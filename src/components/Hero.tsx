import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--gradient-subtle)" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            {/* Glassmorphic Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm bg-accent/10 border border-accent/20 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-accent">Available for opportunities</span>
            </div>

            {/* Main Heading with Enhanced Typography */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Hi, I'm{" "}
              <span
                className="bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              >
                Akshit Vaghasiya
              </span>
            </h1>

            {/* Subtitle with Gradient Underline */}
            <div className="relative inline-block">
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                Data Science & Analytics Professional
              </p>
              <div 
                className="absolute -bottom-2 left-0 h-1 w-24 rounded-full"
                style={{ background: "var(--gradient-hero)" }}
              />
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Transforming raw data into meaningful insights through machine learning, 
              predictive modeling, and innovative analytics solutions.
            </p>

            {/* Enhanced Buttons with Better Hover States */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection("projects")}
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-border hover:border-primary backdrop-blur-sm bg-background/50 hover:bg-accent/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Enhanced Profile Image with Modern Effects */}
          <div className="relative animate-scale-in">
            {/* Glow Effect */}
            <div
              className="absolute -inset-4 rounded-3xl blur-3xl opacity-20 animate-pulse-slow"
              style={{ background: "var(--gradient-hero)" }}
            />
            
            {/* Decorative Rings */}
            <div className="absolute -inset-8 border-2 border-primary/10 rounded-3xl animate-spin-slow" />
            <div className="absolute -inset-12 border-2 border-accent/10 rounded-3xl animate-spin-slower" />
            
            {/* Image Container with Glassmorphism */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 mix-blend-overlay" />
              <img
                src={profileImage}
                alt="Akshit Vaghasiya - Data Science Professional"
                className="w-full h-auto object-cover relative z-10"
              />
              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 group flex flex-col items-center gap-2"
        aria-label="Scroll to about section"
      >
        <span className="text-xs text-muted-foreground/60 font-medium tracking-wider uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1.5 group-hover:border-primary transition-colors">
          <div className="w-1.5 h-2 bg-primary rounded-full animate-scroll" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
