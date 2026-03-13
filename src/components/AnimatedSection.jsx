import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

export default function AnimatedSection({
    children,
    className = "",
    variants = fadeUp,
}) {
    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
}
