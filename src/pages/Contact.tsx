import { useState } from "react";
import { HiPhone, HiMail, HiLocationMarker, HiClock, HiPaperAirplane, HiCheckCircle } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SEOHead } from "@/components/SEOHead";
import { Layout } from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: HiPhone,
    title: "Phone",
    content: "+44 7851 843396",
    href: "tel:+447851843396",
  },
  {
    icon: HiMail,
    title: "Email",
    content: "info@safeguardtransport.uk",
    href: "mailto:info@safeguardtransport.uk",
  },
  {
    icon: HiLocationMarker,
    title: "Address",
    content: "80 Suite 209, Cumberland House, Scrabs Lane, London, United Kingdom, NW10 6RF",
  },
  {
    icon: HiClock,
    title: "Office Hours",
    content: "Mon-Fri: 8am - 6pm",
  },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xjgkbgor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        toast({
          title: "Message Sent!",
          description:
            "Thank you for contacting us. We'll get back to you shortly.",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Contact Us"
        description="Get in touch with SafeGuard Transport for a free quote or to discuss your transport needs. We serve London and surrounding regions."
        canonical="https://safeguardtransport.co.uk/contact"
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <HiMail className="h-4 w-4" />
              Get in Touch
            </div>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a question or need a quote? We're here to help. Reach out to
              our friendly team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <div className="rounded-2xl border border-border bg-background p-8 shadow-large">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                        <HiCheckCircle className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for contacting us. We'll get back to you within
                      24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Please tell us about your transport needs..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <HiPaperAirplane className="h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-up delay-200">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {contactInfo.map((info) => (
                    <div
                      key={info.title}
                      className="flex gap-4 rounded-xl border border-border bg-background p-5 transition-all hover:shadow-medium"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Our Service Area
                </h2>
                <div className="rounded-xl overflow-hidden border border-border shadow-medium">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340160927!2d-0.24168119403828618!3d51.52855824155367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1702500000000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SafeGuard Transport Service Area - London"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  We serve London and the surrounding regions including Essex,
                  Kent, Surrey, Hertfordshire, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Prefer to Talk?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Our friendly team is available Monday to Friday, 8am to 6pm. Give
              us a call for immediate assistance.
            </p>
            <Button
              asChild
              size="xl"
              className="bg-card text-primary hover:bg-card/90"
            >
              <a href="tel:+447851843396">
                <HiPhone className="h-5 w-5" />
                Call +44 7851 843396
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
