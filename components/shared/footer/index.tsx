import { Phone, Mail, MapPin, FileText, Shield, RefreshCw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { QUICK_LINKS, CONTACT_INFO, PAYMENT_METHODS } from "@/lib/routes";

export default function Footer() {
  return (
    <footer className="bg-[#0f0c1a] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 text-left pb-10">
          {/* Company Info Column - Takes double width */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-1">
              <Image
                src="/logos/logo_secondary.png"
                alt="Satellite Connect Logo"
                width={180}
                height={36}
                className="h-9 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Houston's premier satellite infrastructure experts.
            </p>

            <div>
              <p className="text-gray-400 text-sm mb-2 mt-8">
                Accepted Payment Methods
              </p>
              <div className="flex flex-wrap items-center gap-4">
                {PAYMENT_METHODS.map((method, index) => (
                  <div key={index} className="w-14 h-14">
                    <Image
                      src={method.src}
                      alt={method.alt}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Quick Links</h4>
            <ul className="text-gray-400 space-y-3 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors flex items-center gap-3 group py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Legal & Policies</h4>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition-colors flex items-center gap-3 group py-1"
                >
                  <Shield
                    size={16}
                    className="text-gray-500 group-hover:text-primary transition-colors"
                  />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="hover:text-primary transition-colors flex items-center gap-3 group py-1"
                >
                  <RefreshCw
                    size={16}
                    className="text-gray-500 group-hover:text-primary transition-colors"
                  />
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-colors flex items-center gap-3 group py-1"
                >
                  <FileText
                    size={16}
                    className="text-gray-500 group-hover:text-primary transition-colors"
                  />
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">
              Contact Information
            </h4>
            <div className="space-y-4 text-sm text-gray-400">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <Phone size={16} className="text-primary" />
                <div>
                  <div className="text-xs text-gray-500">Phone</div>
                  <div className="font-medium">{CONTACT_INFO.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <Mail size={16} className="text-primary" />
                <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="font-medium">{CONTACT_INFO.email}</div>
                </div>
              </a>

              <div className="flex items-start gap-3 group">
                <MapPin size={24} className="text-primary" />
                <div>
                  <div className="text-xs text-gray-500">Address</div>
                  <div className="font-medium">{CONTACT_INFO.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-400 w-full pb-3.5 text-center border-b border-white/5">
          We do NOT sell, rent, trade, or share your personal information with
          any third party for marketing or commercial purposes.
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Satellite Connect. Houston, TX. All
            rights reserved.
          </div>

          {/* Bottom Policy Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors hover:underline"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/refund-policy"
              className="hover:text-white transition-colors hover:underline"
            >
              Refund Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/terms"
              className="hover:text-white transition-colors hover:underline"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
