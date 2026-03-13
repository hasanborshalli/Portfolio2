import PageHero from "../components/PageHero";
import services from "../data/services";
import PageTransition from "../components/PageTransition";

export default function Services() {
    return (
        <>
            <PageTransition>
                <PageHero
                    title="Creative Services"
                    text="Present your services in a more dynamic and design-focused way than a typical corporate website."
                />

                <section className="section">
                    <div className="container">
                        <div className="services-grid">
                            {services.map((service) => (
                                <article
                                    key={service.id}
                                    className="service-card"
                                >
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </PageTransition>
        </>
    );
}
