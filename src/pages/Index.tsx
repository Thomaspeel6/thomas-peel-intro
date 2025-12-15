import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-xl text-center space-y-8">
        <header>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            Thomas Peel
          </h1>
          <p className="mt-2 text-muted-foreground text-lg">
            Computer Science Student · Software Engineer
          </p>
          <p className="text-sm text-muted-foreground">
            New York City & London
          </p>
        </header>

        <p className="text-foreground/80 text-lg leading-relaxed">
          I'm a Computer Science student passionate about full-stack development, 
          artificial intelligence, and building practical software that solves 
          real problems. Currently exploring the intersection of modern web 
          technologies and AI to create meaningful digital experiences.
        </p>

        <nav className="flex justify-center gap-4" aria-label="Social links">
          <Button variant="outline" size="lg" asChild>
            <a 
              href="https://github.com/thomaspeel" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a 
              href="https://linkedin.com/in/thomaspeel" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </nav>
      </div>
    </main>
  );
};

export default Index;
