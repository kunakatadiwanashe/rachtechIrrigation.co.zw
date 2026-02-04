import { Drill, Droplets, Gauge, Wrench, Sprout, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Drill,
      title: "Borehole Drilling",
      description: "Professional borehole drilling services using modern equipment. We handle site assessment, drilling, casing installation, and pump fitting for optimal water access.",
      features: ["Site Survey", "Deep Drilling", "Casing Installation", "Pump Fitting"],
    },
    {
      icon: Droplets,
      title: "Irrigation System Supply & Installation",
      description: "Complete irrigation solutions including drip systems, sprinklers, and center pivots. We design and install systems tailored to your farm's needs.",
      features: ["Drip Irrigation", "Sprinkler Systems", "Center Pivots", "Micro Jets"],
    },
    {
      icon: Gauge,
      title: "Water Pumps & Accessories",
      description: "Quality submersible pumps, surface pumps, and solar-powered systems. We supply, install, and maintain pumping equipment for all applications.",
      features: ["Submersible Pumps", "Solar Pumps", "Booster Pumps", "Accessories"],
    },
    {
      icon: Wrench,
      title: "Borehole Testing & Maintenance",
      description: "Regular maintenance and testing services to ensure your borehole operates efficiently. We provide water quality testing and pump servicing.",
      features: ["Yield Testing", "Water Quality", "Pump Service", "Rehabilitation"],
    },
    {
      icon: Sprout,
      title: "Agricultural Water Solutions",
      description: "Comprehensive water management for farms including dam construction, pipeline installation, and smart irrigation systems for maximum productivity.",
      features: ["Farm Planning", "Pipeline Systems", "Water Storage", "Smart Controls"],
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-growth-light text-secondary font-semibold text-sm mb-6">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Water &{" "}
            <span className="text-gradient-water">Irrigation Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From borehole drilling to irrigation installation, we provide end-to-end water solutions 
            for homes, farms, and businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl shadow-card border border-border hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-water flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button asChild variant="ghost" className="text-primary hover:bg-water-light p-0 h-auto font-semibold">
                <a href="#contact" className="flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-gradient-water hover:opacity-90 transition-opacity text-lg px-8">
            <a href="#contact">
              Discuss Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
