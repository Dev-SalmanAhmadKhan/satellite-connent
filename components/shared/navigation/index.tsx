"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NAV_ROUTES } from "@/lib/routes";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState<string>("/");
  const pathname = usePathname();

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const currentPath = pathname || "/";
    const matchedRoute = NAV_ROUTES.find((route) => {
      if (route.href === "/") {
        return currentPath === "/";
      }
      return currentPath.startsWith(route.href);
    });
    setActiveRoute(matchedRoute?.href || "/");
  }, [pathname]);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <Image
              src="/logos/logo.png"
              alt="Satellite Connect Logo"
              width={160}
              height={40}
              className="h-10 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ROUTES.map((link) => {
            const isActive = activeRoute === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 text-sm font-medium uppercase tracking-wide ${
                  isActive
                    ? "text-primary bg-gradient-primary/5"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`}
              >
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}

          <div className="ml-4">
            <Link
              href="#contact"
              className="bg-gradient-primary text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm font-bold uppercase tracking-wider"
            >
              Free Quote
            </Link>
          </div>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed top-20 inset-x-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <div className="px-6 py-4 space-y-2">
          {NAV_ROUTES.map((link) => {
            const isActive = activeRoute === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${
                  isActive
                    ? "bg-gradient-primary text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={handleNavClick}
              >
                <span
                  className={`font-semibold text-sm uppercase tracking-wider flex-1 ${
                    isActive ? "text-white" : "text-gray-700"
                  }`}
                >
                  {link.label}
                </span>
                {isActive && (
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                )}
              </Link>
            );
          })}

          <div className="pt-4">
            <Link
              href="#contact"
              className="block bg-gradient-primary text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-center font-bold text-sm uppercase tracking-wider"
              onClick={handleNavClick}
            >
              Free Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
