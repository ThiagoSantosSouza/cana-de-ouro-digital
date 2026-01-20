import { ThemeToggle } from "@/components/ThemeToggle";
import { FloatingNav } from "@/components/FloatingNav";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { MudancaDeVidaSection } from "@/components/MudancaDeVidaSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CommunitySection } from "@/components/CommunitySection";
import { ContactSection } from "@/components/ContactSection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <FloatingNav />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <MudancaDeVidaSection />
      <TestimonialsSection />
      <CommunitySection />
      <ContactSection />
      <LocationSection />
      <Footer />
    </main>
  );
};

export default Index;
