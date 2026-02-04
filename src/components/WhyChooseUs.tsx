import { Users, Award, Clock, DollarSign, Shield, HeartHandshake } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "Experienced Technicians",
      description: "Our team of skilled professionals brings years of expertise to every project, ensuring quality workmanship.",
    },
    {
      icon: Award,
      title: "Quality Equipment",
      description: "We use only premium, industry-standard equipment and materials for long-lasting, reliable installations.",
    },
    {
      icon: HeartHandshake,
      title: "Reliable After-Sales Support",
      description: "Our commitment doesn't end at installation. We provide ongoing maintenance and support services.",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Competitive rates without compromising on quality. We offer flexible payment options for your convenience.",
    },
    {
      icon: Clock,
      title: "Timely Project Delivery",
      description: "We respect your time and deliver projects on schedule, keeping you informed throughout the process.",
    },
    {
      icon: Shield,
      title: "Guaranteed Results",
      description: "We stand behind our work with warranties and guarantees, giving you peace of mind with every project.",
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground font-semibold text-sm mb-6">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The Rachtech Advantage
          </h2>
          <p className="text-lg text-primary-foreground/80">
            When you choose Rachtech Irrigation, you're partnering with a team dedicated to excellence, 
            reliability, and your complete satisfaction.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-2xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-primary-foreground/80">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
