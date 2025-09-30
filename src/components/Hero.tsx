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
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              🚀 Available for opportunities
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              >
                Akshit Vaghasiya
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Data Science & Analytics Professional
            </p>
            <p className="text-lg text-muted-foreground max-w-xl">
              Transforming raw data into meaningful insights through machine learning, 
              predictive modeling, and innovative analytics solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-secondary"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-scale-in">
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-30"
              style={{ background: "var(--gradient-hero)" }}
            />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img
                src={profileImage}
                alt="Akshit Vaghasiya"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
