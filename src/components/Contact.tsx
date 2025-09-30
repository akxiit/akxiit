import { Mail, Phone, Linkedin, Github } from "lucide-react";
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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
            Let's Connect
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Feel free to reach out for collaborations or just a friendly chat
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <contact.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open("mailto:akshitvaghasiya504@gmail.com", "_blank")}
            >
              <Mail className="mr-2" size={20} />
              Send Me an Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
