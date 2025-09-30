const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/50 bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary))_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-4">
            <span 
              className="text-2xl font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            >
              AV
            </span>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground mb-2">
            © {new Date().getFullYear()} Akshit Vaghasiya. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground/60">
            Built with passion and data 📊
          </p>

          {/* Decorative Line */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
            <div 
              className="h-1 w-1 rounded-full"
              style={{ background: "var(--gradient-hero)" }}
            />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
