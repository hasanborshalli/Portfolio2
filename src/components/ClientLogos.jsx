import { motion } from "framer-motion";
import clients from "../data/clients";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function ClientLogos() {
    return (
        <section className="section">
            <div className="container">
                <motion.div
                    className="section-heading center"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <span className="eyebrow">Trusted By</span>
                    <h2>Brands We Worked With</h2>
                </motion.div>

                <motion.div
                    className="logos-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {clients.map((client) => (
                        <motion.div
                            className="logo-box"
                            key={client.id}
                            variants={fadeUp}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.22 }}
                        >
                            <img src={client.image} alt={client.name} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
