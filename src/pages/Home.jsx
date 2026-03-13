import PageTransition from "../components/PageTransition";
import HeroCreative from "../components/HeroCreative";
import ServicesCreative from "../components/ServicesCreative";
import ProjectsMasonry from "../components/ProjectsMasonry";
import ClientLogos from "../components/ClientLogos";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import CTASection from "../components/CTASection";

export default function Home() {
    return (
        <PageTransition>
            <HeroCreative />
            <ServicesCreative />
            <ProjectsMasonry />
            <ClientLogos />
            <TestimonialsCarousel />
            <CTASection />
        </PageTransition>
    );
}
