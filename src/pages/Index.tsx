import { Link } from "react-router-dom";
import {
  HiShieldCheck,
  HiCheckCircle,
  HiUsers,
  HiClock,
  HiHeart,
  HiArrowRight,
  HiAcademicCap,
  HiUserGroup,
  HiUserCircle,
  HiOfficeBuilding,
  HiStar,
} from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { Layout } from "@/components/Layout";
import heroImage from "@/assets/herosection.jpeg";

const features = [
  {
    icon: HiUsers,
    title: "Specialists in Daily Travel",
    description:
      "Expert scheduled transport for students, elderly, and SEND passengers",
  },
  {
    icon: HiShieldCheck,
    title: "DBS-Checked Drivers",
    description: "All drivers enhanced DBS checked and professionally trained",
  },
  {
    icon: HiClock,
    title: "Clear Communication",
    description:
      "Predictable routines and transparent updates for peace of mind",
  },
  {
    icon: HiHeart,
    title: "Compassionate Care",
    description:
      "Every passenger treated with dignity, respect, and professionalism",
  },
];

const services = [
  { icon: HiAcademicCap, name: "Home-to-School", href: "/services#school" },
  { icon: HiUserGroup, name: "SEND Transport", href: "/services#send" },
  { icon: HiUserCircle, name: "Elderly Assisted", href: "/services#elderly" },
  { icon: HiOfficeBuilding, name: "Medical Appointments", href: "/services#medical" },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Parent",
    content:
      "SafeGuard has been incredible for my son. The drivers are patient and understanding, and I always know he's safe.",
  },
  {
    name: "James K.",
    role: "School Administrator",
    content:
      "Reliable, professional, and always on time. They've been our trusted transport partner for over 3 years.",
  },
  {
    name: "Margaret T.",
    role: "Care Home Manager",
    content:
      "The care and attention given to our elderly residents is exceptional. Highly recommended.",
  },
];

export default function HomePage() {
  return (
    <Layout>
      <SEOHead
        title="Safe & Reliable Transport Services"
        description="SafeGuard Transport provides professional, DBS-checked transport for students, SEND passengers, elderly individuals, and medical appointments across London."
        canonical="https://safeguardtransport.co.uk"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
        {/* Elegant Background Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.05)_100%)]" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)`,
              backgroundSize: '60px 60px'
            }} 
          />
        </div>

        {/* Refined Floating Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] animate-pulse" />
        <div 
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] animate-pulse" 
          style={{ animationDelay: "1.5s" }} 
        />

        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            {/* Left Column: Text Content */}
            <div className="text-center md:text-left space-y-8">
              {/* Premium Badge */}
             

              {/* Main Heading with Enhanced Typography */}
              <div className="space-y-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]">
                  SafeGuard
                  <span className="block mt-3 bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">
                    Transport
                  </span>
                </h1>
              </div>

              {/* Elegant Subtitle */}
              <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white/95 leading-tight animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Where Safety Meets the Journey
              </p>

              {/* Refined Description */}
              <p className="text-lg sm:text-xl md:text-xl text-white/85 leading-relaxed max-w-xl md:max-w-none animate-fade-up" style={{ animationDelay: "0.3s" }}>
                Professional, DBS-checked transport for students, SEND passengers, 
                elderly individuals, and medical appointments across London. 
                Every journey with dignity and care.
              </p>

              {/* Premium CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <Button
                  asChild
                  size="xl"
                  className="group bg-white text-primary hover:bg-white/95 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-all duration-300 rounded-full px-8 py-6 md:px-10 md:py-7 text-base md:text-lg font-semibold"
                >
                  <Link to="/contact" className="flex items-center">
                    Get a Free Quote
                    <HiArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="xl"
                  variant="outline"
                  className="bg-white/5 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/40 rounded-full px-8 py-6 md:px-10 md:py-7 text-base md:text-lg font-semibold transition-all duration-300"
                >
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>

              {/* Premium Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-6 animate-fade-up" style={{ animationDelay: "0.5s" }}>
                {[
                  { text: "100% DBS Checked" },
                  { text: "Fully Insured" },
                  { text: "24/7 Support" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <HiCheckCircle className="h-5 w-5 text-white/90 flex-shrink-0" />
                    <span className="text-sm font-medium text-white/90">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Premium Image Presentation */}
            <div className="hidden md:flex items-center justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="relative w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                {/* Main Image Container */}
                <div className="relative group">
                  {/* Image with Premium Styling */}
                  <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-4 border-white/30 transform group-hover:scale-[1.02] transition-all duration-700">
                    <img
                      src={heroImage}
                      alt="SafeGuard Transport professional school bus service with happy children in school uniforms boarding a white Mercedes-Benz school bus in a safe residential neighborhood"
                      className="w-full h-auto object-cover"
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                  </div>
                  
                  {/* Decorative Accent Elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-3xl opacity-60" />
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/15 rounded-full blur-3xl opacity-60" />
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-white/20 rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-white/20 rounded-br-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-7 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2 backdrop-blur-md bg-white/5">
            <div className="w-1.5 h-4 bg-white/80 rounded-full" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              Why Choose SafeGuard?
            </h2>
            <p className="text-lg text-muted-foreground">
              We're committed to providing exceptional transport services with
              safety at our core.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group rounded-xl bg-background p-6 shadow-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-up delay-${
                  (index + 1) * 100
                }`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Comprehensive Transport Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                From daily school runs to medical appointments, we offer a full
                range of transport services tailored to meet diverse needs with
                professionalism and care.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-medium"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-foreground">
                      {service.name}
                    </span>
                  </Link>
                ))}
              </div>
              <Button asChild size="lg">
                <Link to="/services">
                  View All Services
                  <HiArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative animate-fade-up delay-200">
              <div className="grid gap-4">
                <div className="rounded-xl bg-gradient-to-br from-primary to-primary/80 p-6 text-primary-foreground">
                  <h3 className="text-xl font-bold mb-2">Fleet Options</h3>
                  <p className="text-primary-foreground/90">
                    Individual and group transport with accessible vehicles for
                    all mobility needs.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-secondary p-6 text-secondary-foreground">
                    <h4 className="font-bold mb-1">Fair Pricing</h4>
                    <p className="text-sm text-secondary-foreground/90">
                      No hidden charges
                    </p>
                  </div>
                  <div className="rounded-xl bg-accent p-6 text-accent-foreground">
                    <h4 className="font-bold mb-1">Trained Staff</h4>
                    <p className="text-sm text-accent-foreground/90">
                      Journey assistants available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center animate-fade-up">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/20">
                <HiHeart className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">Our Promise</h2>
            <p className="text-xl leading-relaxed text-primary-foreground/90">
              "Every passenger is treated with dignity, respect, and
              professionalism from pickup to drop-off. We understand the trust
              you place in us, and we're committed to exceeding your
              expectations every journey."
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              Trusted by Families & Organisations
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`rounded-xl bg-card p-6 shadow-medium animate-fade-up delay-${
                  (index + 1) * 100
                }`}
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <HiStar
                      key={i}
                      className="h-4 w-4 fill-warning text-warning"
                    />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">
                  {testimonial.content}
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/90">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl mb-4">
              Ready to Experience Safe Transport?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Get in touch today for a free, no-obligation quote. We're here to
              help.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="xl"
                className="bg-card text-primary hover:bg-card/90"
              >
                <Link to="/contact">
                  Contact Us Now
                  <HiArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="ghost"
                className="text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10"
              >
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
