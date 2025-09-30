const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Akshit Vaghasiya. Built with passion and data.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
