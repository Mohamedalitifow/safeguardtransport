import { Link } from "react-router-dom";
import { HiShieldCheck, HiHeart, HiCheckCircle, HiAcademicCap, HiUsers, HiFlag, HiArrowRight, HiUser } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { Layout } from "@/components/Layout";

const values = [
  {
    icon: HiShieldCheck,
    title: "Safety First",
    description: "Safety is non-negotiable. Every vehicle, driver, and journey is held to the highest safety standards.",
  },
  {
    icon: HiCheckCircle,
    title: "Reliability",
    description: "We understand the importance of punctuality. You can count on us to be there when you need us.",
  },
  {
    icon: HiHeart,
    title: "Respect & Dignity",
    description: "Every passenger is valued. We treat all individuals with compassion and understanding.",
  },
  {
    icon: HiAcademicCap,
    title: "Honesty & Transparency",
    description: "Clear communication, fair pricing, and no hidden charges. Trust is earned through transparency.",
  },
];

const teamFeatures = [
  "Enhanced DBS checked",
  "Licensed and experienced",
  "Trained in safeguarding and first aid",
  "Skilled in SEND and assisted travel support",
  "Patient and understanding approach",
  "Clear communication skills",
];

export default function AboutPage() {
  return (
    <Layout>
      <SEOHead
        title="About Us"
        description="Learn about SafeGuard Transport's mission to provide dependable, compassionate transport services. Meet our DBS-checked team of professional drivers."
        canonical="https://safeguardtransport.co.uk/about"
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <HiUsers className="h-4 w-4" />
              Who We Are
            </div>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl mb-6">
              About SafeGuard Transport
            </h1>
            <p className="text-xl text-muted-foreground">
              A trusted partner in accessible, safe, and reliable transport services across London and surrounding regions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                SafeGuard Transport was founded with a simple but powerful mission: to provide safe, 
                reliable, and compassionate transport services for those who need them most. We recognised 
                a gap in the market for transport providers who truly understand the needs of vulnerable 
                passengers—whether they're children travelling to school, individuals with special educational 
                needs, or elderly citizens attending medical appointments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team brings together years of experience in passenger transport, healthcare, and 
                education support. We're not just drivers—we're trained professionals who understand the 
                importance of routine, clear communication, and genuine care.
              </p>
            </div>
            <div className="relative animate-fade-up delay-200">
              <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                <div className="space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <HiFlag className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    "To provide dependable, compassionate, and structured journeys that support 
                    independence and peace of mind for every passenger and their families."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do, from the drivers we hire to the way we communicate with families.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-large animate-fade-up delay-${(index + 1) * 100}`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 animate-fade-up">
              <div className="grid gap-3 sm:grid-cols-2">
                {teamFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-soft"
                  >
                    <HiCheckCircle className="h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-sm font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 space-y-6 lg:order-2 animate-fade-up delay-200">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Our Team
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every member of the SafeGuard team is carefully selected and rigorously trained. 
                We understand that trust is earned, which is why we invest heavily in our people.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our drivers and journey assistants aren't just transport providers—they're trained 
                professionals who understand the unique needs of our passengers. From safeguarding 
                protocols to first aid, our team is equipped to handle any situation with calm 
                professionalism.
              </p>
              <Button asChild size="lg">
                <Link to="/safety">
                  Learn About Our Standards
                  <HiArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Join the SafeGuard Family
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Experience the difference of transport services built on trust, care, and professionalism.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
