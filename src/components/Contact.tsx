import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "akshitvaghasiya504@gmail.com",
    href: "mailto:akshitvaghasiya504@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8488012359",
    href: "tel:+918488012359",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/akxiit",
    href: "http://linkedin.com/in/akxiit",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/akxiit",
    href: "https://github.com/akxiit",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,hsl(var(--primary))_1px,transparent_1px),linear-gradient(-45deg,hsl(var(--accent))_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Connect
            </h2>
            <div 
              className="h-1 w-24 mx-auto rounded-full mb-4"
              style={{ background: "var(--gradient-hero)" }}
            />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Feel free to reach out for collaborations or just a friendly chat
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                className="group border border-border/50 backdrop-blur-sm bg-card/80 hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                  style={{ background: "var(--gradient-hero)" }}
                />

                <CardContent className="p-6 relative z-10">
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div 
                      className="p-3 rounded-xl group-hover:scale-110 transition-all shadow-lg"
                      style={{ background: "var(--gradient-hero)" }}
                    >
                      <contact.icon size={24} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                      <p className="font-semibold group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                    <ExternalLink size={20} className="text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Button with Enhanced Design */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="relative inline-block">
              <div 
                className="absolute -inset-2 rounded-xl blur-lg opacity-50"
                style={{ background: "var(--gradient-hero)" }}
              />
              <Button
                size="lg"
                className="relative group overflow-hidden text-primary-foreground shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                style={{ background: "var(--gradient-hero)" }}
                onClick={() => window.open("mailto:akshitvaghasiya504@gmail.com", "_blank")}
              >
                <Mail className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                Send Me an Email
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
