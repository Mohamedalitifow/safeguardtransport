import { Link } from "react-router-dom";
import {
  Shield,
  CheckCircle,
  Users,
  Clock,
  Heart,
  ArrowRight,
  GraduationCap,
  Accessibility,
  UserCheck,
  Building2,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { Layout } from "@/components/Layout";
import heroImage from "@/assets/hero-transport.jpg";

const features = [
  {
    icon: Users,
    title: "Specialists in Daily Travel",
    description: "Expert scheduled transport for students, elderly, and SEND passengers",
  },
  {
    icon: Shield,
    title: "DBS-Checked Drivers",
    description: "All drivers enhanced DBS checked and professionally trained",
  },
  {
    icon: Clock,
    title: "Clear Communication",
    description: "Predictable routines and transparent updates for peace of mind",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Every passenger treated with dignity, respect, and professionalism",
  },
];

const services = [
  { icon: GraduationCap, name: "Home-to-School", href: "/services#school" },
  { icon: Accessibility, name: "SEND Transport", href: "/services#send" },
  { icon: UserCheck, name: "Elderly Assisted", href: "/services#elderly" },
  { icon: Building2, name: "Medical Appointments", href: "/services#medical" },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Parent",
    content: "SafeGuard has been incredible for my son. The drivers are patient and understanding, and I always know he's safe.",
  },
  {
    name: "James K.",
    role: "School Administrator",
    content: "Reliable, professional, and always on time. They've been our trusted transport partner for over 3 years.",
  },
  {
    name: "Margaret T.",
    role: "Care Home Manager",
    content: "The care and attention given to our elderly residents is exceptional. Highly recommended.",
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="SafeGuard Transport fleet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="md:space-y-10 space-y-6 animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground backdrop-blur-sm border border-primary/30 px-5 py-2.5 text-sm font-semibold text-blue-900">
                <Shield className="h-4 w-4 text-primary" />
                Trusted by 500+ Families
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary-foreground leading-[1.1]">
                SafeGuard
                <span className="block text-primary mt-2">Transport</span>
              </h1>
              
              <p className="text-2xl sm:text-3xl font-medium text-primary-foreground/90 italic">
                Where Safety Meets the Journey.
              </p>
              
              <p className="text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
                Professional, DBS-checked transport for students, SEND passengers, elderly individuals, 
                and medical appointments across London. Every journey with dignity and care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="xl" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <Link to="/contact">
                    Get a Free Quote
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="ghost" className="bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border-2 border-primary-foreground/20 hover:bg-primary-foreground/20 hover:-translate-y-1 transition-all duration-300">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="hidden lg:block animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-border/50 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Shield className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground">DBS Checked Drivers</p>
                </div>
                
                <div className="bg-card/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-border/50 hover:scale-105 transition-transform duration-300 mt-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Families Trust Us</p>
                </div>
                
                <div className="bg-card/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-border/50 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-foreground">99%</p>
                  <p className="text-sm text-muted-foreground">On-Time Rate</p>
                </div>
                
                <div className="bg-card/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-border/50 hover:scale-105 transition-transform duration-300 mt-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Star className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-foreground">5.0</p>
                  <p className="text-sm text-muted-foreground">Customer Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Stats Bar */}
          <div className="lg:hidden mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {[
              { value: "100%", label: "DBS Checked" },
              { value: "500+", label: "Families" },
              { value: "99%", label: "On-Time" },
              { value: "5.0★", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card/90 backdrop-blur-sm rounded-xl p-4 text-center border border-border/50">
                <p className="text-xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
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
              We're committed to providing exceptional transport services with safety at our core.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group rounded-xl bg-background p-6 shadow-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-up delay-${(index + 1) * 100}`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
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
                From daily school runs to medical appointments, we offer a full range of transport services 
                tailored to meet diverse needs with professionalism and care.
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
                    <span className="font-medium text-foreground">{service.name}</span>
                  </Link>
                ))}
              </div>
              <Button asChild size="lg">
                <Link to="/services">
                  View All Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative animate-fade-up delay-200">
              <div className="grid gap-4">
                <div className="rounded-xl bg-gradient-to-br from-primary to-primary/80 p-6 text-primary-foreground">
                  <h3 className="text-xl font-bold mb-2">Fleet Options</h3>
                  <p className="text-primary-foreground/90">
                    Individual and group transport with accessible vehicles for all mobility needs.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-secondary p-6 text-secondary-foreground">
                    <h4 className="font-bold mb-1">Fair Pricing</h4>
                    <p className="text-sm text-secondary-foreground/90">No hidden charges</p>
                  </div>
                  <div className="rounded-xl bg-accent p-6 text-accent-foreground">
                    <h4 className="font-bold mb-1">Trained Staff</h4>
                    <p className="text-sm text-accent-foreground/90">Journey assistants available</p>
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
                <Heart className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">Our Promise</h2>
            <p className="text-xl leading-relaxed text-primary-foreground/90">
              "Every passenger is treated with dignity, respect, and professionalism from pickup to drop-off. 
              We understand the trust you place in us, and we're committed to exceeding your expectations every journey."
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
                className={`rounded-xl bg-card p-6 shadow-medium animate-fade-up delay-${(index + 1) * 100}`}
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
              Get in touch today for a free, no-obligation quote. We're here to help.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="xl" className="bg-card text-primary hover:bg-card/90">
                <Link to="/contact">
                  Contact Us Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="ghost" className="text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
