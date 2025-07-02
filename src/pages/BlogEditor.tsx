
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import BlogEditorHeader from '@/components/BlogEditorHeader';
import BlogPostForm from '@/components/BlogPostForm';
import QuillEditor from '@/components/QuillEditor';
import { useBlogEditor } from '@/hooks/useBlogEditor';

const BlogEditor = () => {
  const {
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
    setTitle,
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
  } = useBlogEditor();

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <BlogEditorHeader
          onBack={() => navigate('/admin')}
          onSave={saveBlogPost}
          isSaving={isSaving}
          isEditing={isEditing}
        />

        <Card>
          <CardHeader>
            <CardTitle>{isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}</CardTitle>
            <CardDescription>{isEditing ? 'Update your blog content' : 'Write and publish your blog content'}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <BlogPostForm
              title={title}
              slug={slug}
              description={description}
              excerpt={excerpt}
              category={category}
              author={author}
              tags={tags}
              readTime={readTime}
              isBreaking={isBreaking}
              onTitleChange={setTitle}
              onSlugChange={setSlug}
              onDescriptionChange={setDescription}
              onExcerptChange={setExcerpt}
              onCategoryChange={setCategory}
              onAuthorChange={setAuthor}
              onTagsChange={setTags}
              onReadTimeChange={setReadTime}
              onBreakingChange={setIsBreaking}
            />

            <QuillEditor
              content={content}
              onChange={setContent}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogEditor;
