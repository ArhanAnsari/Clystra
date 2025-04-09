// 🦶 Footer (app/components/Footer.tsx)
import Link from "next/link";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Coverage", href: "/coverage" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
    return (
      <footer className="w-full border-t border-border bg-muted px-6 py-6 text-center text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Clystra Networks Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-primary text-muted-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    );
  }