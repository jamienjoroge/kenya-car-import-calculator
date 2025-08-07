import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Share2, Facebook, Twitter, Linkedin, MessageCircle, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SocialShareProps {
  title: string;
  url?: string;
  description?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ 
  title, 
  url = window.location.href, 
  description = "Check out this article from GariMoto - Kenya's trusted car import calculator" 
}) => {
  const { toast } = useToast();

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}&via=GariMotoKE`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`
  };

  const handleShare = (platform: string) => {
    const link = shareLinks[platform as keyof typeof shareLinks];
    if (link) {
      window.open(link, '_blank', 'width=600,height=400');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link Copied!",
        description: "The article link has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Please copy the link manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-800">
          <Share2 className="h-5 w-5" />
          Share This Article
        </CardTitle>
        <p className="text-gray-600 text-sm">
          Help others save money on car imports by sharing this guide
        </p>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShare('facebook')}
            className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-300"
          >
            <Facebook className="h-4 w-4 text-blue-600" />
            <span className="hidden md:inline">Facebook</span>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShare('twitter')}
            className="flex items-center gap-2 hover:bg-sky-50 hover:border-sky-300"
          >
            <Twitter className="h-4 w-4 text-sky-500" />
            <span className="hidden md:inline">Twitter</span>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShare('linkedin')}
            className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-400"
          >
            <Linkedin className="h-4 w-4 text-blue-700" />
            <span className="hidden md:inline">LinkedIn</span>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShare('whatsapp')}
            className="flex items-center gap-2 hover:bg-green-50 hover:border-green-300"
          >
            <MessageCircle className="h-4 w-4 text-green-600" />
            <span className="hidden md:inline">WhatsApp</span>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            className="flex items-center gap-2 hover:bg-gray-50 hover:border-gray-400"
          >
            <Copy className="h-4 w-4 text-gray-600" />
            <span className="hidden md:inline">Copy</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialShare;