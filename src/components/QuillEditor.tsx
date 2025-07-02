
import React from 'react';
import ReactQuill from 'react-quill';
import { Label } from '@/components/ui/label';
import 'react-quill/dist/quill.snow.css';

interface QuillEditorProps {
  content: string;
  onChange: (content: string) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ content, onChange }) => {
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

  return (
    <div className="space-y-2">
      <Label>Content</Label>
      <div className="border rounded-md">
        <ReactQuill
          theme="snow"
          value={content}
          onChange={onChange}
          modules={quillModules}
          placeholder="Write your blog content here..."
          style={{ minHeight: '400px' }}
        />
      </div>
    </div>
  );
};

export default QuillEditor;
