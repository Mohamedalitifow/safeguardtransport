import { Link } from "react-router-dom";
import {
  HiAcademicCap,
  HiUserGroup,
  HiUserCircle,
  HiOfficeBuilding,
  HiUsers,
  HiDocumentText,
  HiArrowRight,
  HiCheckCircle,
} from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { Layout } from "@/components/Layout";

const services = [
  {
    id: "school",
    icon: HiAcademicCap,
    title: "Home-to-School Transport",
    description: "Reliable daily transport for students of all ages, with consistent routines and trained drivers who understand the importance of punctuality.",
    features: [
      "Daily scheduled pickups and drop-offs",
      "Consistent drivers for familiarity",
      "Door-to-school service",
      "Safe and comfortable vehicles",
      "Communication with parents/guardians",
    ],
  },
  {
    id: "send",
    icon: HiUserGroup,
    title: "SEND & Additional Needs Transport",
    description: "Specialist transport for passengers with special educational needs and disabilities. Our trained staff understand individual requirements and provide compassionate support.",
    features: [
      "Trained journey assistants available",
      "Wheelchair-accessible vehicles",
      "Sensory-friendly environments",
      "Individual care plans accommodated",
      "Consistent routines and communication",
    ],
  },
  {
    id: "elderly",
    icon: HiUserCircle,
    title: "Elderly Assisted Transport",
    description: "Dignified and comfortable transport for elderly passengers, with patient drivers trained to provide mobility assistance and compassionate care.",
    features: [
      "Door-to-door assistance",
      "Mobility aid accommodation",
      "Patient and understanding drivers",
      "Comfortable vehicles",
      "Flexible scheduling",
    ],
  },
  {
    id: "medical",
    icon: HiOfficeBuilding,
    title: "Hospital & Medical Appointment Transport",
    description: "Reliable transport to and from medical appointments, ensuring patients arrive on time and in comfort for their healthcare needs.",
    features: [
      "On-time arrival guarantee",
      "Wait-and-return service",
      "Comfortable seating",
      "Assistance with mobility",
      "Regular and one-off bookings",
    ],
  },
  {
    id: "community",
    icon: HiUsers,
    title: "Community & Group Transport",
    description: "Flexible transport solutions for community groups, day centres, and organisations requiring reliable group travel.",
    features: [
      "Group size flexibility",
      "Regular or one-off bookings",
      "Accessible vehicles available",
      "Experienced group handlers",
      "Competitive group rates",
    ],
  },
  {
    id: "contracts",
    icon: HiDocumentText,
    title: "Contracted Transport Solutions",
    description: "Tailored transport contracts for schools, councils, and organisations requiring ongoing, reliable transport services.",
    features: [
      "Bespoke contract arrangements",
      "Dedicated fleet allocation",
      "Regular performance reviews",
      "Compliance and reporting",
      "Cost-effective solutions",
    ],
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      <SEOHead
        title="Our Services"
        description="Explore SafeGuard Transport's comprehensive range of services including home-to-school, SEND, elderly, medical, and community transport across London."
        canonical="https://safeguardtransport.co.uk/services"
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <HiUserGroup className="h-4 w-4" />
              Comprehensive Solutions
            </div>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl mb-6">
              Our Transport Services
            </h1>
            <p className="text-xl text-muted-foreground">
              From daily school runs to specialist SEND transport, we offer a complete range of passenger transport services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 grid items-center gap-8 lg:grid-cols-2 lg:gap-12 animate-fade-up ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="space-y-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <Button asChild size="lg">
                    <Link to="/contact">
                      Enquire Now
                      <HiArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className="rounded-xl border border-border bg-background p-6 shadow-medium">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">What's Included:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <HiCheckCircle className="h-5 w-5 shrink-0 text-secondary mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-secondary-foreground/90 mb-8">
              We understand that every passenger and organisation has unique needs. Contact us to discuss how we can tailor our services to you.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-card text-secondary hover:bg-card/90">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-secondary-foreground border-2 border-secondary-foreground/30 hover:bg-secondary-foreground/10">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
