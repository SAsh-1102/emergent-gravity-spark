import { useParams, Link } from 'react-router-dom';
import { useBlog } from '@/hooks/useBlogs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import CosmicBackground from '@/components/CosmicBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: blog, isLoading, error } = useBlog(slug || '');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen relative">
        <CosmicBackground />
        <Header />
        <div className="min-h-[60vh] flex flex-col items-center justify-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/#blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <Header />
      
      <main className="relative z-10 pt-24 pb-16">
        <article className="container mx-auto px-6 max-w-4xl">
          <Link to="/#blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {blog.cover_image && (
            <div className="rounded-xl overflow-hidden mb-8 aspect-video">
              <img 
                src={blog.cover_image} 
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary">
                <Calendar className="w-3 h-3 mr-1" />
                {format(new Date(blog.created_at), 'MMMM dd, yyyy')}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              {blog.title}
            </h1>
            {blog.excerpt && (
              <p className="text-xl text-muted-foreground">
                {blog.excerpt}
              </p>
            )}
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            {blog.content.split('\n').map((paragraph, index) => (
              paragraph.trim() && (
                <p key={index} className="text-foreground/90 leading-relaxed mb-4">
                  {paragraph}
                </p>
              )
            ))}
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
