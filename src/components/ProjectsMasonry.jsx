import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projects";
import { fadeUp } from "../utils/animations";

export default function ProjectsMasonry() {
    return (
        <section className="section section-dark">
            <div className="container">
                <motion.div
                    className="section-heading"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <span className="eyebrow">Selected Work</span>
                    <h2>
                        Projects That Mix Visual Quality With Clear Direction
                    </h2>
                    <p>
                        A masonry-style portfolio to make this template feel
                        more creative than Portfolio 1.
                    </p>
                </motion.div>

                <div className="masonry-grid">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.12 }}
                        >
                            <Link
                                to={`/projects/${project.id}`}
                                className="project-card"
                            >
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    whileHover={{ scale: 1.04 }}
                                    transition={{ duration: 0.35 }}
                                />

                                <div className="project-overlay">
                                    <span>{project.category}</span>
                                    <h3>{project.title}</h3>
                                    <p>{project.summary}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
