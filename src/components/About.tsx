import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Get to Know</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About Me
            </h2>
            <div 
              className="h-1 w-24 mx-auto rounded-full"
              style={{ background: "var(--gradient-hero)" }}
            />
          </div>
          
          {/* Content Card with Glassmorphism */}
          <Card className="border border-border/50 backdrop-blur-sm bg-card/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fade-in-up">
            <CardContent className="p-8 md:p-10">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I am <span className="text-foreground font-semibold">Akshit Vaghasiya</span>, a passionate data science and analytics enthusiast with 
                strong skills in Python, data visualization, and machine learning. My academic 
                and project journey has allowed me to explore real-world challenges such as 
                demand forecasting, price optimization, recommendation systems, and fake news 
                detection. I enjoy turning raw data into meaningful insights and building 
                solutions that can create real impact for businesses and communities. With 
                experience in tools like Pandas, NumPy, Matplotlib, Seaborn, and Power BI, 
                I aim to grow as a data professional and contribute to innovative projects 
                that bridge technology and decision-making.
              </p>

              {/* Education Card with Gradient Border */}
              <div className="relative group">
                <div 
                  className="absolute -inset-[1px] rounded-xl opacity-50 group-hover:opacity-100 blur transition-opacity"
                  style={{ background: "var(--gradient-hero)" }}
                />
                <div className="relative flex items-start gap-4 p-6 bg-secondary rounded-xl">
                  <div 
                    className="p-3 rounded-lg relative overflow-hidden group-hover:scale-110 transition-transform"
                    style={{ background: "var(--gradient-hero)" }}
                  >
                    <GraduationCap className="text-primary-foreground relative z-10" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      Education
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    </h3>
                    <p className="text-lg font-medium">B.Tech in Information Technology</p>
                    <p className="text-muted-foreground">
                      Devang Patel Institute of Advance Technology and Research
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Expected Graduation: 2027
                    </p>
                  </div>
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
