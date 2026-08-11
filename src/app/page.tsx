import { Hero } from "@/components/hero/Hero";
import {
  ProductsSection,
  WhyChooseSection,
  StatsSection,
  ServicesSection,
  BrandsSection,
  ProjectsSection,
  IndustriesSection,
  TestimonialsSection,
  CtaSection,
} from "@/components/home/HomeSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <WhyChooseSection />
      <StatsSection />
      <ServicesSection />
      <BrandsSection />
      <ProjectsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
