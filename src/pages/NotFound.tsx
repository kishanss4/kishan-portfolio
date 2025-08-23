import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="text-center relative z-10 px-6">
        <div className="space-y-8">
          {/* Error Icon */}
          <div className="flex justify-center">
            <div className="p-6 rounded-full bg-secondary/50 border-2 border-primary/20">
              <AlertTriangle className="text-primary" size={64} />
            </div>
          </div>

          {/* Error Text */}
          <div className="space-y-4">
            <h1 className="text-8xl font-bold gradient-text">404</h1>
            <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Back to Home Button */}
          <div className="pt-4">
            <Button variant="hero" size="lg" asChild className="group">
              <a href="/">
                <Home className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Return to Home
              </a>
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center space-x-4 pt-8 opacity-60">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-primary-glow rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
