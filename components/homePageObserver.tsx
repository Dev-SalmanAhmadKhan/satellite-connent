"use client";

import { useEffect } from "react";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("section-visible");
      });
    }, observerOptions);

    document
      .querySelectorAll(".scroll-section")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
