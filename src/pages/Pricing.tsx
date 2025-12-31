import { Link } from "react-router-dom";
import {
  HiCheckCircle,
  HiArrowRight,
  HiAcademicCap,
  HiCalendar,
  HiUsers,
  HiUserGroup,
  HiOfficeBuilding,
  HiDocumentText,
} from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEOHead } from "@/components/SEOHead";
import { Layout } from "@/components/Layout";

const pricingCategories = [
  {
    icon: HiAcademicCap,
    title: "Daily School Routes",
    description: "Regular home-to-school transport with consistent schedules and reliable service.",
    features: [
      "Door-to-school service",
      "Consistent driver allocation",
      "Term-time pricing available",
      "Flexible pickup times",
    ],
  },
  {
    icon: HiCalendar,
    title: "Weekly/Monthly Travel",
    description: "Ongoing transport arrangements with discounted rates for regular bookings.",
    features: [
      "Reduced rates for regular bookings",
      "Flexible scheduling",
      "Priority booking access",
      "Dedicated account manager",
    ],
  },
  {
    icon: HiOfficeBuilding,
    title: "One-Off Bookings",
    description: "Single journey bookings for medical appointments, special events, or occasional needs.",
    features: [
      "No long-term commitment",
      "Quick booking process",
      "Wait-and-return options",
      "Flexible timing",
    ],
  },
  {
    icon: HiUsers,
    title: "Group Transport",
    description: "Cost-effective transport for groups, community organisations, and day centres.",
    features: [
      "Competitive group rates",
      "Various vehicle sizes",
      "Accessible options available",
      "Regular or one-off",
    ],
  },
  {
    icon: HiUserGroup,
    title: "Assisted & SEND Transport",
    description: "Specialist transport with trained journey assistants for passengers with additional needs.",
    features: [
      "Journey assistant included",
      "Wheelchair-accessible vehicles",
      "Individual care plans",
      "Consistent staffing",
    ],
  },
  {
    icon: HiDocumentText,
    title: "Contract Services",
    description: "Bespoke transport contracts for schools, councils, and organisations.",
    features: [
      "Tailored solutions",
      "Dedicated fleet",
      "Performance guarantees",
      "Regular reporting",
    ],
  },
];

export default function PricingPage() {
  return (
    <Layout>
      <SEOHead
        title="Pricing"
        description="SafeGuard Transport offers transparent, fair pricing for all transport services. No hidden charges - get a free quote today."
        canonical="https://safeguardtransport.co.uk/pricing"
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <HiCheckCircle className="h-4 w-4" />
              Transparent Pricing
            </div>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl mb-6">
              Clear & Fair Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We believe in transparent pricing with no hidden charges. Every quote is tailored to your specific needs.
            </p>
            <div className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-6 py-4 shadow-medium">
              <HiCheckCircle className="h-5 w-5 text-secondary" />
              <span className="font-medium text-foreground">No unexpected charges. Full quotes provided.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Categories */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the service that fits your needs. All prices are calculated based on distance, frequency, and specific requirements.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricingCategories.map((category, index) => (
              <div
                key={category.title}
                className={`group rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary hover:shadow-large animate-fade-up delay-${(index + 1) * 100}`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{category.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <HiCheckCircle className="h-4 w-4 shrink-0 text-secondary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Pricing Works */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                How Our Pricing Works
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every journey is unique, which is why we provide personalised quotes based on your specific requirements. Our pricing takes into account:
              </p>
              <ul className="space-y-3">
                {[
                  "Distance and route complexity",
                  "Frequency of journeys",
                  "Vehicle type required",
                  "Additional support needs (journey assistants)",
                  "Waiting time for return journeys",
                  "Number of passengers",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <HiCheckCircle className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 animate-fade-up delay-200">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Get a Free Quote</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Contact us today for a free, no-obligation quote tailored to your transport needs. 
                  Our team will work with you to find the most cost-effective solution.
                </p>
                <div className="space-y-3">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">
                      Request a Quote
                      <HiArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Or call us: <a href="tel:+447851843396" className="font-medium text-primary hover:underline">+44 7851 843396</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl animate-fade-up">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  q: "Are there any hidden charges?",
                  a: "Absolutely not. We provide full, transparent quotes that include everything. The price we quote is the price you pay.",
                },
                {
                  q: "Do you offer discounts for regular bookings?",
                  a: "Yes, we offer competitive rates for weekly, monthly, and term-time bookings. Contact us for a personalised quote.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept bank transfers, direct debits for regular customers, and can invoice councils and organisations.",
                },
                {
                  q: "Is there a minimum booking requirement?",
                  a: "No, we accommodate both one-off journeys and ongoing arrangements. Every booking is welcome.",
                },
              ].map((faq, index) => (
                <AccordionItem 
                  key={faq.q} 
                  value={`item-${index}`}
                  className="rounded-xl bg-card border-0 shadow-soft px-6"
                >
                  <AccordionTrigger className="font-semibold text-foreground hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-secondary-foreground/90 mb-8">
              Contact us today for a free, no-obligation quote. We're here to help find the right solution for you.
            </p>
            <Button asChild size="lg" className="bg-card text-secondary hover:bg-card/90">
              <Link to="/contact">
                Contact Us Now
                <HiArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
