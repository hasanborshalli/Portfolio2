import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

export default function CTASection() {
    return (
        <section className="section">
            <div className="container">
                <motion.div
                    className="cta-box"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.22 }}
                >
                    <span className="eyebrow">Let’s Work Together</span>
                    <h2>Ready To Build Something Bold?</h2>
                    <p>
                        Use this section to push the visitor toward inquiry,
                        quote requests, or a project kickoff.
                    </p>
                    <Link to="/contact" className="btn btn-accent">
                        Start Your Project
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
