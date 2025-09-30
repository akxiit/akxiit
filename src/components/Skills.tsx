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
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
            Skills & Expertise
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Technologies and tools I use to transform data into insights
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-primary/10 ${category.color}`}>
                      <category.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
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
