import PageHero from "../components/PageHero";
import site from "../data/site";
import PageTransition from "../components/PageTransition";

export default function Contact() {
    return (
        <>
            <PageTransition>
                <PageHero
                    title="Let’s Talk About Your Next Project"
                    text="This template includes a static contact layout. You can connect it later to EmailJS, Web3Forms, Formspree, or your own backend."
                />

                <section className="section">
                    <div className="container contact-layout">
                        <div>
                            <span className="eyebrow">Contact Info</span>
                            <h2>Start Something Creative</h2>
                            <p>
                                This section works well for inquiry-based
                                businesses like agencies and design studios.
                            </p>

                            <div className="contact-list">
                                <p>
                                    <strong>Email:</strong> {site.email}
                                </p>
                                <p>
                                    <strong>Phone:</strong> {site.phone}
                                </p>
                                <p>
                                    <strong>Address:</strong> {site.address}
                                </p>
                            </div>
                        </div>

                        <form className="contact-form">
                            <input type="text" placeholder="Full Name" />
                            <input type="email" placeholder="Email Address" />
                            <input type="text" placeholder="Subject" />
                            <textarea
                                rows="6"
                                placeholder="Tell us about your project"
                            ></textarea>
                            <button type="button" className="btn btn-accent">
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>
            </PageTransition>
        </>
    );
}
