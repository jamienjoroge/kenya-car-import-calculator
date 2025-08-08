import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Calculator, Gift } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ExitIntentPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [hasShown, setHasShown] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    const timer = setTimeout(() => {
      if (!hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    }, 45000); // Show after 45 seconds

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "Your free import guide is being sent to your email!",
      });
      setShowPopup(false);
    }
  };

  return (
    <Dialog open={showPopup} onOpenChange={setShowPopup}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Gift className="h-6 w-6 text-primary" />
            Wait! Don't Leave Empty Handed!
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="text-center">
            <div className="mb-4 p-4 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-lg">
              <Calculator className="h-12 w-12 mx-auto mb-2 text-primary" />
              <h3 className="font-bold text-lg">Get Your FREE Import Guide!</h3>
              <p className="text-sm text-muted-foreground">
                "2025 Car Import Cost Estimation Guide" - Save KES 500K+ on your next import
              </p>
            </div>
            
            <div className="text-left space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Complete CRSP schedule breakdown</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Hidden fees checklist</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Money-saving tips from experts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Weekly CRSP updates via email</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Send Me The FREE Guide
            </Button>
          </form>
          
          <p className="text-xs text-center text-muted-foreground">
            No spam. Unsubscribe anytime. Used by 15,000+ importers.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;