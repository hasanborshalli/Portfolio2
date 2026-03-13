import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import site from "../data/site";
import { fadeUp, heroContainer } from "../utils/animations";

export default function HeroCreative() {
    return (
        <section className="hero-section">
            <div className="hero-bg"></div>
            <div className="hero-overlay"></div>

            <motion.div
                className="container hero-content"
                variants={heroContainer}
                initial="hidden"
                animate="show"
            >
                <motion.span className="eyebrow" variants={fadeUp}>
                    Creative Agency Portfolio
                </motion.span>

                <motion.h1 variants={fadeUp}>{site.heroTitle}</motion.h1>

                <motion.p variants={fadeUp}>{site.heroText}</motion.p>

                <motion.div className="hero-actions" variants={fadeUp}>
                    <Link to="/contact" className="btn btn-accent">
                        Start a Project
                    </Link>
                    <Link to="/projects" className="btn btn-outline">
                        View Work
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
