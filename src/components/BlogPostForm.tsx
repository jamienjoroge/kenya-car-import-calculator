
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface BlogPostFormProps {
  title: string;
  slug: string;
  description: string;
  excerpt: string;
  category: string;
  author: string;
  tags: string;
  readTime: string;
  isBreaking: boolean;
  onTitleChange: (title: string) => void;
  onSlugChange: (slug: string) => void;
  onDescriptionChange: (description: string) => void;
  onExcerptChange: (excerpt: string) => void;
  onCategoryChange: (category: string) => void;
  onAuthorChange: (author: string) => void;
  onTagsChange: (tags: string) => void;
  onReadTimeChange: (readTime: string) => void;
  onBreakingChange: (isBreaking: boolean) => void;
}

const BlogPostForm: React.FC<BlogPostFormProps> = ({
  title,
  slug,
  description,
  excerpt,
  category,
  author,
  tags,
  readTime,
  isBreaking,
  onTitleChange,
  onSlugChange,
  onDescriptionChange,
  onExcerptChange,
  onCategoryChange,
  onAuthorChange,
  onTagsChange,
  onReadTimeChange,
  onBreakingChange,
}) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="Enter blog post title"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="slug">URL Slug</Label>
          <Input
            id="slug"
            value={slug}
            onChange={(e) => onSlugChange(e.target.value)}
            placeholder="url-friendly-slug"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Meta Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          placeholder="SEO meta description (160 characters max)"
          maxLength={160}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => onExcerptChange(e.target.value)}
          placeholder="Brief excerpt for blog listing page"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            placeholder="e.g., Legal, Educational, How-To Guides"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="author">Author</Label>
          <Input
            id="author"
            value={author}
            onChange={(e) => onAuthorChange(e.target.value)}
            placeholder="Author name"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="tags">Tags</Label>
        <Input
          id="tags"
          value={tags}
          onChange={(e) => onTagsChange(e.target.value)}
          placeholder="tag1, tag2, tag3 (comma separated)"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="readTime">Read Time</Label>
          <Input
            id="readTime"
            value={readTime}
            onChange={(e) => onReadTimeChange(e.target.value)}
            placeholder="5 min read"
          />
        </div>
        <div className="flex items-center space-x-2 pt-8">
          <input
            type="checkbox"
            id="breaking"
            checked={isBreaking}
            onChange={(e) => onBreakingChange(e.target.checked)}
            className="rounded border-gray-300"
          />
          <Label htmlFor="breaking">Mark as Breaking News</Label>
        </div>
      </div>
    </div>
  );
};

export default BlogPostForm;
