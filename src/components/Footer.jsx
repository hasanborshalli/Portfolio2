import site from "../data/site";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                <div>
                    <h3>{site.brand}</h3>
                    <p>{site.tagline}</p>
                </div>

                <div>
                    <h4>Pages</h4>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4>Contact</h4>
                    <p>{site.email}</p>
                    <p>{site.phone}</p>
                    <p>{site.address}</p>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>© 2026 {site.brand}. All rights reserved.</p>
                <a href="https://brndnglb.com" target="_blank">
                    <p>
                        Powered by <strong>Brndng.</strong>
                    </p>
                </a>
            </div>
        </footer>
    );
}
