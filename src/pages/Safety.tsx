import { Link } from "react-router-dom";
import {
  Shield,
  BadgeCheck,
  Heart,
  FileCheck,
  Users,
  Accessibility,
  Brain,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { Layout } from "@/components/Layout";

const driverStandards = [
  {
    icon: BadgeCheck,
    title: "Enhanced DBS Checks",
    description: "All drivers undergo enhanced Disclosure and Barring Service checks to ensure the safety of our passengers.",
  },
  {
    icon: FileCheck,
    title: "Licensed Professionals",
    description: "Our drivers hold all required licences and certifications for passenger transport.",
  },
  {
    icon: Shield,
    title: "Safeguarding Training",
    description: "Comprehensive safeguarding training ensures our team can identify and respond to any concerns.",
  },
  {
    icon: Heart,
    title: "First Aid Certified",
    description: "All drivers are trained in first aid, ready to respond to any medical situation.",
  },
];

const assistantSupport = [
  {
    icon: Accessibility,
    title: "SEND Passengers",
    description: "Trained assistants who understand the needs of passengers with special educational needs and disabilities.",
  },
  {
    icon: Users,
    title: "Elderly & Mobility Support",
    description: "Patient, compassionate support for elderly passengers and those with mobility requirements.",
  },
  {
    icon: Brain,
    title: "Behavioural & Communication",
    description: "Skilled in supporting passengers with behavioural or communication needs with understanding and patience.",
  },
];

const certifications = [
  "DBS Enhanced Check (Updated Service)",
  "PSVAR Compliance",
  "Section 19 Permit",
  "Public Liability Insurance",
  "Fleet Insurance",
  "Vehicle MOT Certification",
  "LOLER Compliance (Lifts)",
  "Risk Assessment Documentation",
];

export default function SafetyPage() {
  return (
    <Layout>
      <SEOHead
        title="Safety & Standards"
        description="Learn about SafeGuard Transport's rigorous safety standards, DBS-checked drivers, trained journey assistants, and commitment to passenger welfare."
        canonical="https://safeguardtransport.co.uk/safety"
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Shield className="h-4 w-4" />
              Your Safety, Our Priority
            </div>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl mb-6">
              Safety & Standards
            </h1>
            <p className="text-xl text-muted-foreground">
              At SafeGuard Transport, safety isn't just a promise—it's our foundation. Every aspect of our service is designed with passenger welfare in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Driver Standards */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              Driver Standards
            </h2>
            <p className="text-lg text-muted-foreground">
              Every driver in our team meets and exceeds industry standards for safety and professionalism.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {driverStandards.map((standard, index) => (
              <div
                key={standard.title}
                className={`group rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary hover:shadow-large animate-fade-up delay-${(index + 1) * 100}`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <standard.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{standard.title}</h3>
                <p className="text-sm text-muted-foreground">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Assistants */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Journey Assistants
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For passengers who need additional support, our trained journey assistants provide 
                compassionate, professional care throughout every journey.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our assistants are carefully matched to passengers based on their individual needs, 
                ensuring continuity and building positive relationships over time.
              </p>
            </div>
            <div className="space-y-4 animate-fade-up delay-200">
              {assistantSupport.map((support) => (
                <div
                  key={support.title}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-medium"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <support.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{support.title}</h3>
                    <p className="text-sm text-muted-foreground">{support.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 animate-fade-up">
              <div className="grid gap-3 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-soft"
                  >
                    <Award className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 space-y-6 lg:order-2 animate-fade-up delay-200">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Compliance & Certifications
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SafeGuard Transport maintains full compliance with all regulatory requirements and 
                holds comprehensive certifications to ensure the highest standards of service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to compliance goes beyond meeting minimum requirements—we continuously 
                invest in training, equipment, and processes to exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/20">
                <Shield className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Trust SafeGuard
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Experience the peace of mind that comes with knowing your loved ones are in safe hands. Contact us today to learn more about our safety commitment.
            </p>
            <Button asChild size="lg" className="bg-card text-primary hover:bg-card/90">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
