export const NAV_ROUTES = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "#contact", label: "Contact Us" },
] as const;

export const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "#contact", label: "Contact" },
] as const;

export const POLICY_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/terms", label: "Terms & Conditions" },
] as const;

export const CONTACT_INFO = {
  phone: "832-220-8949",
  email: "info@satelliteconnect.site",
  address: "16711 Cold Harbour LN, Houston, TX",
} as const;

export const PAYMENT_METHODS = [
  { src: "/images/amex.png", alt: "American Express" },
  { src: "/images/visa.png", alt: "Visa" },
  { src: "/images/mastercard.png", alt: "MasterCard" },
  { src: "/images/discover.png", alt: "Discover" },
] as const;
