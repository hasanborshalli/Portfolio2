import PageHero from "../components/PageHero";
import site from "../data/site";
import PageTransition from "../components/PageTransition";

export default function About() {
    return (
        <>
            <PageTransition>
                <PageHero
                    title="A Creative Portfolio Built For Visual-First Businesses"
                    text="This template is designed for agencies, creative studios, branding teams, and modern service companies."
                />

                <section className="section">
                    <div className="container split-layout">
                        <div>
                            <span className="eyebrow">Who We Are</span>
                            <h2>We Turn Ideas Into Strong Brand Experiences</h2>
                            <p>{site.aboutText}</p>
                            <p>
                                The design language here is intentionally bold
                                and dark, giving this template a stronger
                                personality than the first portfolio template.
                            </p>
                        </div>

                        <div className="image-panel">
                            <img
                                src="/images/about.jpg"
                                alt="About creative agency"
                            />
                        </div>
                    </div>
                </section>
            </PageTransition>
        </>
    );
}
