import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/bore.jpeg";

const Hero = () => {
  const highlights = [
    "Professional Borehole Drilling",
    "Quality Irrigation Equipment",
    "Expert Water Solutions",
    "Expert Solar  Specialists",
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute inset-0 wave-pattern opacity-50" />
      
      {/* Content */}
      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-2 rounded-full bg-water-light text-primary font-semibold text-sm mb-6">
              Trusted Water And Solar Solutions Since Day One
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Reliable{" "}
              <span className="text-gradient-water">Borehole Drilling</span>
              {" "}& Irrigation Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Empowering farms, homes, and businesses with sustainable water access. 
              Expert drilling, quality equipment, and dedicated support for all your water needs.
            </p>

            {/* Highlights */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-water hover:opacity-90 transition-opacity text-lg px-8">
                <a href="#contact">
                  Request a Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-water-light text-lg px-8">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Professional borehole drilling and irrigation equipment"
                className="w-full h-[500px] object-cover object-bottom"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-card border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-nature flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">100+</p>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
