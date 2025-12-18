import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HiHome, HiArrowLeft } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { Layout } from "@/components/Layout";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEOHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to SafeGuard Transport homepage."
      />
      <section className="section-padding bg-gradient-to-b from-background to-muted min-h-[60vh] flex items-center">
        <div className="container-custom">
          <div className="mx-auto max-w-lg text-center animate-fade-up">
            <div className="text-8xl font-bold gradient-text mb-4">404</div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link to="/">
                  <HiHome className="h-5 w-5" />
                  Go Home
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">
                  <HiArrowLeft className="h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
