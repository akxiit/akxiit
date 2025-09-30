import { Code2, Database, BarChart3, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    color: "text-blue-500",
  },
  {
    title: "Data Visualization",
    icon: BarChart3,
    skills: ["Matplotlib", "Seaborn", "Power BI", "Tableau"],
    color: "text-green-500",
  },
  {
    title: "Machine Learning",
    icon: Brain,
    skills: ["Supervised Learning", "Unsupervised Learning", "NLP", "Predictive Modeling"],
    color: "text-purple-500",
  },
  {
    title: "Data Analytics",
    icon: Database,
    skills: ["EDA", "Feature Engineering", "Statistical Analysis", "Data Preprocessing"],
    color: "text-orange-500",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary))_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">My Toolkit</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & Expertise
            </h2>
            <div 
              className="h-1 w-24 mx-auto rounded-full mb-4"
              style={{ background: "var(--gradient-hero)" }}
            />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use to transform data into actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="group border border-border/50 backdrop-blur-sm bg-card/80 hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:border-primary/30 animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Overlay on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
                  style={{ background: "var(--gradient-hero)" }}
                />

                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div 
                      className="p-3 rounded-xl relative overflow-hidden group-hover:scale-110 transition-transform shadow-lg"
                      style={{ background: "var(--gradient-hero)" }}
                    >
                      <category.icon size={24} className="text-primary-foreground relative z-10" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full text-sm font-medium transition-all duration-300 cursor-default hover:scale-105 shadow-sm"
                      >
                        {skill}
                      </span>
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

export default Skills;
