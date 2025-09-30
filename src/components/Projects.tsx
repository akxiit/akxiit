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
    <section id="projects" className="py-20" style={{ background: "var(--gradient-subtle)" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Real-world applications of data science and machine learning
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink size={16} className="mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
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
