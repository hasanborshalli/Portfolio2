import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";

export default function App() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });

    useEffect(() => {
        document.body.classList.remove("theme-dark", "theme-light");
        document.body.classList.add(`theme-${theme}`);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <div className="app-shell">
            <ScrollToTop />
            <Navbar theme={theme} toggleTheme={toggleTheme} />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:id" element={<ProjectDetail />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}
