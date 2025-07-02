
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Eye } from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  excerpt: string;
  readTime: string;
  date: string;
  breaking?: boolean;
  category?: string;
  tags?: string[];
  author?: string;
}

const BlogEditor = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [readTime, setReadTime] = useState('5 min read');
  const [isBreaking, setIsBreaking] = useState(false);
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [author, setAuthor] = useState('GariMoto Editorial');
  const [isSaving, setIsSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPostId, setEditingPostId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const adminAuth = localStorage.getItem('adminAuthenticated');
    if (adminAuth !== 'true') {
      navigate('/admin');
      return;
    }
    setIsAuthenticated(true);
    
    // Check if we're editing an existing post
    const urlParams = new URLSearchParams(window.location.search);
    const editPostId = urlParams.get('edit');
    
    if (editPostId) {
      const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
      const postToEdit = savedPosts.find((post: BlogPost) => post.id === editPostId);
      
      if (postToEdit) {
        setIsEditing(true);
        setEditingPostId(editPostId);
        setTitle(postToEdit.title);
        setSlug(postToEdit.slug);
        setDescription(postToEdit.description);
        setExcerpt(postToEdit.excerpt);
        setContent(postToEdit.content);
        setReadTime(postToEdit.readTime);
        setIsBreaking(postToEdit.breaking || false);
        setCategory(postToEdit.category || '');
        setTags(postToEdit.tags?.join(', ') || '');
        setAuthor(postToEdit.author || 'GariMoto Editorial');
      }
    }
  }, [navigate]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    if (!slug || slug === generateSlug(title)) {
      setSlug(generateSlug(newTitle));
    }
  };

  const saveBlogPost = () => {
    setIsSaving(true);
    
    const blogPost: BlogPost = {
      id: isEditing ? editingPostId : slug,
      title,
      slug,
      description,
      content,
      excerpt,
      readTime,
      date: isEditing ? 
        // Keep original date if editing
        (() => {
          const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
          const existingPost = existingPosts.find((post: BlogPost) => post.id === editingPostId);
          return existingPost?.date || new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          });
        })() :
        // New post gets current date
        new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
      breaking: isBreaking,
      category: category.trim(),
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0),
      author: author.trim()
    };

    // Save to localStorage (in a real app, this would go to a database)
    const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    const updatedPosts = existingPosts.filter((post: BlogPost) => post.id !== (isEditing ? editingPostId : slug));
    updatedPosts.unshift(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));

    setTimeout(() => {
      setIsSaving(false);
      alert(`Blog post ${isEditing ? 'updated' : 'saved'} successfully!`);
      navigate('/admin/blog-list');
    }, 1000);
  };

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      [{ 'align': [] }],
      ['clean']
    ],
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
          <div className="flex gap-2">
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button onClick={saveBlogPost} disabled={isSaving}>
              <Save className="h-4 w-4 mr-2" />
              {isSaving ? 'Saving...' : 'Save Post'}
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}</CardTitle>
            <CardDescription>{isEditing ? 'Update your blog content' : 'Write and publish your blog content'}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter blog post title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">URL Slug</Label>
                <Input
                  id="slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="url-friendly-slug"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Meta Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="SEO meta description (160 characters max)"
                maxLength={160}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Brief excerpt for blog listing page"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="e.g., Legal, Educational, How-To Guides"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Author name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="tag1, tag2, tag3 (comma separated)"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="readTime">Read Time</Label>
                <Input
                  id="readTime"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  placeholder="5 min read"
                />
              </div>
              <div className="flex items-center space-x-2 pt-8">
                <input
                  type="checkbox"
                  id="breaking"
                  checked={isBreaking}
                  onChange={(e) => setIsBreaking(e.target.checked)}
                  className="rounded border-gray-300"
                />
                <Label htmlFor="breaking">Mark as Breaking News</Label>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Content</Label>
              <div className="border rounded-md">
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={quillModules}
                  placeholder="Write your blog content here..."
                  style={{ minHeight: '400px' }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogEditor;
