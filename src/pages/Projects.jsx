import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import PageTransition from "../components/PageTransition";

export default function Projects() {
    return (
        <>
            <PageTransition>
                <PageHero
                    title="Featured Projects"
                    text="A dedicated projects page with a creative masonry layout to keep this template visually strong."
                />

                <section className="section section-dark">
                    <div className="container">
                        <div className="masonry-grid">
                            {projects.map((project) => (
                                <Link
                                    to={`/projects/${project.id}`}
                                    key={project.id}
                                    className="project-card"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />
                                    <div className="project-overlay">
                                        <span>{project.category}</span>
                                        <h3>{project.title}</h3>
                                        <p>{project.summary}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </PageTransition>
        </>
    );
}
