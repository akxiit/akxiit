import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Blinkit Sales Analysis & Demand Prediction",
    description:
      "End-to-end system for sales analysis, forecasting, and price optimization using Python and Power BI. Implemented predictive models to forecast demand and optimize pricing strategies.",
    tags: ["Python", "Power BI", "Forecasting", "Price Optimization"],
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "Product Recommendation System",
    description:
      "Built a recommendation engine using collaborative filtering and predictive modeling techniques. Developed personalized product suggestions to enhance user experience.",
    tags: ["Machine Learning", "Collaborative Filtering", "Python", "Scikit-learn"],
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Fake News Detection System",
    description:
      "Developed a model using NLP and supervised learning to classify news as real or fake. Achieved high accuracy in detecting misinformation through text analysis.",
    tags: ["NLP", "Supervised Learning", "Text Classification", "Python"],
    gradient: "from-orange-500 to-red-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden" style={{ background: "var(--gradient-subtle)" }}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <div 
              className="h-1 w-24 mx-auto rounded-full mb-4"
              style={{ background: "var(--gradient-hero)" }}
            />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world applications of data science and machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group border border-border/50 backdrop-blur-sm bg-card/80 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Header with Animation */}
                <div className="relative h-32 overflow-hidden">
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:1rem_1rem]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ExternalLink className="text-white" size={28} />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
