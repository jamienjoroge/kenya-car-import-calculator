import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

export const useBlogEditor = () => {
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

  return {
    isAuthenticated,
    title,
    slug,
    description,
    excerpt,
    content,
    readTime,
    isBreaking,
    category,
    tags,
    author,
    isSaving,
    isEditing,
    setTitle: handleTitleChange,
    setSlug,
    setDescription,
    setExcerpt,
    setContent,
    setReadTime,
    setIsBreaking,
    setCategory,
    setTags,
    setAuthor,
    saveBlogPost,
    navigate
  };
};
