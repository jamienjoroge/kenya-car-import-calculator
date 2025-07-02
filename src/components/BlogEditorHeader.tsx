
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save, Eye } from 'lucide-react';

interface BlogEditorHeaderProps {
  onBack: () => void;
  onSave: () => void;
  isSaving: boolean;
  isEditing: boolean;
}

const BlogEditorHeader: React.FC<BlogEditorHeaderProps> = ({
  onBack,
  onSave,
  isSaving,
  isEditing
}) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <Button variant="outline" onClick={onBack}>
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Dashboard
      </Button>
      <div className="flex gap-2">
        <Button variant="outline">
          <Eye className="h-4 w-4 mr-2" />
          Preview
        </Button>
        <Button onClick={onSave} disabled={isSaving}>
          <Save className="h-4 w-4 mr-2" />
          {isSaving ? 'Saving...' : `${isEditing ? 'Update' : 'Save'} Post`}
        </Button>
      </div>
    </div>
  );
};

export default BlogEditorHeader;
