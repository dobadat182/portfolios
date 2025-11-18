// src/components/ui/Section.tsx

import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  containerClass?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  containerClass = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-12 md:py-20 ${className}`}>
      <Container className={containerClass}>
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
        )}

        {subtitle && <p className="text-gray-600 mb-8 max-w-2xl">{subtitle}</p>}

        {children}
      </Container>
    </section>
  );
}
