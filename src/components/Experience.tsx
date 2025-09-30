import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Data Science Intern",
    company: "Cognifyz Technologies",
    period: "April 2025 – May 2025",
    description:
      "Analyzed datasets, performed EDA, feature engineering, and implemented supervised/unsupervised ML algorithms.",
    skills: ["Python", "EDA", "Feature Engineering", "Machine Learning"],
  },
  {
    title: "AI/ML Intern",
    company: "Edunet Foundation",
    period: "June 2025 – July 2025",
    description:
      "Identified business problems, applied NLP on text datasets, and evaluated ML models using statistical metrics.",
    skills: ["NLP", "Machine Learning", "Model Evaluation", "Text Analysis"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden" style={{ background: "var(--gradient-subtle)" }}>
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Career Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work Experience
            </h2>
            <div 
              className="h-1 w-24 mx-auto rounded-full"
              style={{ background: "var(--gradient-hero)" }}
            />
          </div>

          {/* Timeline */}
          <div className="relative space-y-8">
            {/* Connecting Line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30 hidden md:block" />

            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group border border-border/50 backdrop-blur-sm bg-card/80 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-primary/50 animate-fade-in-up relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-42px] top-8 hidden md:block">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:scale-150 transition-transform" />
                </div>

                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 flex items-center gap-3 group-hover:text-primary transition-colors">
                        <div 
                          className="p-2 rounded-lg"
                          style={{ background: "var(--gradient-hero)" }}
                        >
                          <Briefcase className="text-primary-foreground" size={20} />
                        </div>
                        {exp.title}
                      </CardTitle>
                      <p className="text-lg font-semibold bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent backdrop-blur-sm">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
