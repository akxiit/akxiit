import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in-up">
            About Me
          </h2>
          
          <Card className="border-2 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I am Akshit Vaghasiya, a passionate data science and analytics enthusiast with 
                strong skills in Python, data visualization, and machine learning. My academic 
                and project journey has allowed me to explore real-world challenges such as 
                demand forecasting, price optimization, recommendation systems, and fake news 
                detection. I enjoy turning raw data into meaningful insights and building 
                solutions that can create real impact for businesses and communities. With 
                experience in tools like Pandas, NumPy, Matplotlib, Seaborn, and Power BI, 
                I aim to grow as a data professional and contribute to innovative projects 
                that bridge technology and decision-making.
              </p>

              <div className="flex items-start gap-4 p-6 bg-secondary rounded-xl">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-lg font-medium">B.Tech in Information Technology</p>
                  <p className="text-muted-foreground">
                    Devang Patel Institute of Advance Technology and Research
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Expected Graduation: 2027
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
