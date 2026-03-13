import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import PageTransition from "../components/PageTransition";

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((item) => item.id === id);

    if (!project) {
        return (
            <section className="section">
                <div className="container">
                    <h1>Project Not Found</h1>
                    <Link to="/projects" className="btn btn-accent">
                        Back to Projects
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <PageTransition>
            <section className="section">
                <div className="container narrow-container">
                    <span className="eyebrow">{project.category}</span>
                    <h1 className="detail-title">{project.title}</h1>

                    <div className="detail-image-wrap">
                        <img src={project.image} alt={project.title} />
                    </div>

                    <div className="detail-content">
                        <p>{project.description}</p>
                        <p>
                            This page is useful for agencies that want to
                            explain the story behind the work instead of only
                            showing a thumbnail.
                        </p>
                    </div>

                    <Link to="/projects" className="btn btn-outline">
                        Back to Projects
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
}
