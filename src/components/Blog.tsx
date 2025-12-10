import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar } from 'lucide-react';
import { useBlogs } from '@/hooks/useBlogs';
import { format } from 'date-fns';

const Blog = () => {
  const { data: blogs, isLoading } = useBlogs(true);

  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Latest Insights
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Our Blog
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and innovations in software development
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-card/50 backdrop-blur-sm border-border/50 animate-pulse">
                <div className="h-48 bg-muted rounded-t-lg" />
                <CardHeader>
                  <div className="h-4 bg-muted rounded w-1/4 mb-2" />
                  <div className="h-6 bg-muted rounded w-3/4" />
                </CardHeader>
                <CardContent>
                  <div className="h-4 bg-muted rounded w-full mb-2" />
                  <div className="h-4 bg-muted rounded w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : blogs && blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 6).map((blog, index) => (
              <Link 
                key={blog.id} 
                to={`/blog/${blog.slug}`}
                className="group"
              >
                <Card 
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 h-full overflow-hidden animate-fade-in hover:shadow-glow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {blog.cover_image ? (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={blog.cover_image} 
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20" />
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      {format(new Date(blog.created_at), 'MMM dd, yyyy')}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3 mb-4">
                      {blog.excerpt || blog.content.slice(0, 150)}
                    </CardDescription>
                    <span className="inline-flex items-center text-primary group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No blog posts yet. Check back soon!</p>
          </div>
        )}

        {blogs && blogs.length > 6 && (
          <div className="text-center mt-12">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
            >
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
