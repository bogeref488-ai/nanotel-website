import Hero from "../sections/Hero";
import AboutSection from "../sections/AboutSection";
import WhereWeOperate from "../sections/WhereWeOperate";
import ServicesGrid from "../sections/ServicesGrid";
import AnimateOnScroll from "../components/AnimateOnScroll";

export default function Home() {
  return (
    <div>
      {/* Hero can stay without animation if you want; but it also looks good */}
      <Hero />

      <AnimateOnScroll>
        <AboutSection />
      </AnimateOnScroll>

      <AnimateOnScroll delay={80}>
        <WhereWeOperate />
      </AnimateOnScroll>

      <AnimateOnScroll delay={120}>
        <ServicesGrid />
      </AnimateOnScroll>
    </div>
  );
}

