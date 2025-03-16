import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname
    );
  }, [location.pathname]);

  return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center p-8">
          <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
          <p className="text-xl text-muted-foreground mb-8">Oops! Page not found</p>
          <Button asChild>
            <a href="/" className="inline-flex items-center gap-2">
              <Home size={16} />
              Return to Home
            </a>
          </Button>
        </div>
      </div>
  );
};

export default NotFound;