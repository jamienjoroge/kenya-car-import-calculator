import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call - In real app, integrate with email service
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store in localStorage for demo purposes
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
      }
      
      setIsSubscribed(true);
      toast({
        title: "Successfully Subscribed!",
        description: "You'll receive weekly CRSP updates and import tips.",
      });
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-green-800 mb-2">Welcome to GariMoto Updates!</h3>
            <p className="text-sm text-green-700">
              You're all set to receive weekly CRSP updates, import tips, and breaking news about Kenya car import regulations.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-800">
          <Mail className="h-5 w-5" />
          Weekly CRSP Updates
        </CardTitle>
        <p className="text-blue-700 text-sm">
          Get the latest import duty changes, CRSP updates, and money-saving tips delivered to your inbox every week.
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span>CRSP Rate Changes</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-orange-600" />
            <span>Policy Updates</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-blue-600" />
            <span>Import Tips</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground">
          Free newsletter. No spam. Unsubscribe anytime. By subscribing, you agree to our privacy policy.
        </p>
      </CardContent>
    </Card>
  );
};

export default NewsletterSignup;