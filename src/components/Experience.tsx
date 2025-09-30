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
    <section id="experience" className="py-20" style={{ background: "var(--gradient-subtle)" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in-up">
            Work Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        <Briefcase className="text-primary" size={24} />
                        {exp.title}
                      </CardTitle>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
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
