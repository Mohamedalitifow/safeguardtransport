import { Link } from "react-router-dom";
import { HiShieldCheck, HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const footerLinks = {
  services: [
    { name: "Home-to-School", href: "/services#school" },
    { name: "SEND Transport", href: "/services#send" },
    { name: "Elderly Transport", href: "/services#elderly" },
    { name: "Medical Appointments", href: "/services#medical" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Safety Standards", href: "/safety" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-custom section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <HiShieldCheck className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-foreground">SafeGuard</span>
                <span className="text-xs font-medium text-muted-foreground">Transport</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Providing safe, reliable, and compassionate transport services across London and surrounding regions.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <FaFacebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+252612121368"
                  className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <HiPhone className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>+252612121368</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@safeguardtransport.co.uk"
                  className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <HiMail className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>info@safeguardtransport.co.uk</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <HiLocationMarker className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>London & Surrounding Regions</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SafeGuard Transport. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
