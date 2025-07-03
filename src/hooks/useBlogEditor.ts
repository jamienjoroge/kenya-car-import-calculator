import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

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
      loadPostForEditing(editPostId);
    }
  }, [navigate]);

  const loadPostForEditing = async (postId: string) => {
    try {
      const { data: post, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', postId)
        .single();

      if (error) {
        console.error('Error loading post:', error);
        return;
      }

      if (post) {
        setIsEditing(true);
        setEditingPostId(postId);
        setTitle(post.title);
        setSlug(post.slug);
        setDescription(post.description);
        setExcerpt(post.excerpt);
        setContent(post.content);
        setReadTime(post.read_time);
        setIsBreaking(post.is_breaking || false);
        setCategory(post.category || '');
        setTags(post.tags?.join(', ') || '');
        setAuthor(post.author || 'GariMoto Editorial');
      }
    } catch (error) {
      console.error('Error loading post for editing:', error);
    }
  };

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

  const saveBlogPost = async () => {
    setIsSaving(true);
    
    try {
      const blogPostData = {
        title,
        slug,
        description,
        content,
        excerpt,
        read_time: readTime,
        is_breaking: isBreaking,
        category: category.trim() || null,
        tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0),
        author: author.trim()
      };

      if (isEditing) {
        // Update existing post
        const { error } = await supabase
          .from('blog_posts')
          .update(blogPostData)
          .eq('id', editingPostId);

        if (error) {
          console.error('Error updating post:', error);
          alert('Error updating blog post');
          return;
        }
      } else {
        // Create new post
        const { error } = await supabase
          .from('blog_posts')
          .insert([blogPostData]);

        if (error) {
          console.error('Error creating post:', error);
          alert('Error creating blog post');
          return;
        }
      }

      alert(`Blog post ${isEditing ? 'updated' : 'saved'} successfully!`);
      navigate('/admin/blog-list');
    } catch (error) {
      console.error('Error saving blog post:', error);
      alert('Error saving blog post');
    } finally {
      setIsSaving(false);
    }
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
