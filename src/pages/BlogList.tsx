
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit, Trash2, Plus } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  breaking?: boolean;
}

const BlogList = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const adminAuth = localStorage.getItem('adminAuthenticated');
    if (adminAuth !== 'true') {
      navigate('/admin');
      return;
    }
    setIsAuthenticated(true);
    
    // Load blog posts from localStorage
    const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    setBlogPosts(posts);
  }, [navigate]);

  const deleteBlogPost = (postId: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      const updatedPosts = blogPosts.filter(post => post.id !== postId);
      setBlogPosts(updatedPosts);
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    }
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Button variant="outline" onClick={() => navigate('/admin')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <Button onClick={() => navigate('/admin/blog-editor')}>
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </div>

        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Manage Blog Posts</h1>
          <p className="text-gray-600">Edit or delete your existing blog posts</p>
        </div>

        <div className="space-y-4">
          {blogPosts.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-500 mb-4">No blog posts found</p>
                <Button onClick={() => navigate('/admin/blog-editor')}>
                  Create Your First Post
                </Button>
              </CardContent>
            </Card>
          ) : (
            blogPosts.map((post) => (
              <Card key={post.id} className={post.breaking ? 'border-red-200 bg-red-50' : ''}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                        {post.breaking && (
                          <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                            BREAKING
                          </span>
                        )}
                      </div>
                      <CardDescription>{post.description}</CardDescription>
                      <p className="text-sm text-gray-500 mt-2">{post.date}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => deleteBlogPost(post.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
