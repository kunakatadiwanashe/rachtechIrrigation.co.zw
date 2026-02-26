import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To advance modern agriculture through innovative irrigation and integrated water-management solutions that enhance efficiency, reliability, and sustainability.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the preferred choice for water and energy solutions, recognized for our expertise,innovation, and commitment to a sustainable future.",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We use only premium equipment and employ skilled technicians to ensure lasting results for every project.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We work closely with clients to deliver solutions that exceed expectations.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-water-light text-primary font-semibold text-sm mb-6">
              About Us
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner in{" "}
              <span className="text-gradient-nature">Water Solutions & solar Specialist</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Rachtech Irrigation Pvt Ltd is a leading provider of professional borehole drilling, 
              irrigation equipment supply, and water management solutions. Based in Bulawayo, Zimbabwe, 
              we serve residential, commercial, and agricultural clients with dedication and expertise.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              With years of experience in the industry, our team of skilled technicians and engineers 
              are committed to delivering reliable, sustainable water solutions that help our clients 
              achieve their goals—whether it's ensuring clean water access for homes or maximizing 
              crop yields for farms.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-water flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">10+</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Years</p>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-nature flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold">100+</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Projects</p>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-water flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">50+</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Happy</p>
                  <p className="text-sm text-muted-foreground">Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-card border border-border hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-water-light flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
