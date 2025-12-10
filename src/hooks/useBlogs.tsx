import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  author_id: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface BlogInput {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  cover_image?: string;
  published?: boolean;
}

export const useBlogs = (publishedOnly = true) => {
  return useQuery({
    queryKey: ['blogs', publishedOnly],
    queryFn: async () => {
      let query = supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (publishedOnly) {
        query = query.eq('published', true);
      }
      
      const { data, error } = await query;
      
      if (error) throw error;
      return data as Blog[];
    }
  });
};

export const useBlog = (slug: string) => {
  return useQuery({
    queryKey: ['blog', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();
      
      if (error) throw error;
      return data as Blog | null;
    },
    enabled: !!slug
  });
};

export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (blog: BlogInput) => {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { data, error } = await supabase
        .from('blogs')
        .insert({
          ...blog,
          author_id: user?.id
        })
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      toast({
        title: 'Success',
        description: 'Blog post created successfully'
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      });
    }
  });
};

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({ id, ...blog }: BlogInput & { id: string }) => {
      const { data, error } = await supabase
        .from('blogs')
        .update(blog)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      toast({
        title: 'Success',
        description: 'Blog post updated successfully'
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      });
    }
  });
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      toast({
        title: 'Success',
        description: 'Blog post deleted successfully'
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      });
    }
  });
};
