import { motion } from "framer-motion";
import services from "../data/services";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function ServicesCreative() {
    return (
        <section className="section">
            <div className="container">
                <motion.div
                    className="section-heading"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <span className="eyebrow">Services</span>
                    <h2>Creative Solutions For Modern Brands</h2>
                    <p>
                        Designed for studios, agencies, and businesses that care
                        about how they are presented.
                    </p>
                </motion.div>

                <motion.div
                    className="services-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {services.map((service) => (
                        <motion.article
                            key={service.id}
                            className="service-card"
                            variants={fadeUp}
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.22 }}
                        >
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
