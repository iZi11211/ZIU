import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export const PageTransition = ({ children }) => {
    return (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, transition: { duration: 0.25 }, children: children }));
};
