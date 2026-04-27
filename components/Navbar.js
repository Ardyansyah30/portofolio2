'use client';

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

// Animation variants for vertical slide
const slideVariants = {
	animate: {
		y: [0, -20, 0],
		transition: {
			duration: 4,
			repeat: Infinity,
			ease: "easeInOut",
		},
	},
};

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

// Glass design wrapper styles
const glassStyles = "backdrop-blur-lg bg-white/5 border border-white/20 rounded-lg px-4 py-2 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:bg-white/10 transition-all duration-300 glass-shine";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const { scrollY } = useScroll();

	// Deteksi perubahan scroll secara real-time
	useMotionValueEvent(scrollY, "change", (latest) => {
		// Jika scroll lebih dari 50px, aktifkan mode "scrolled"
		setIsScrolled(latest > 50);
	});

	return (
		<motion.header 
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
				isScrolled 
					? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10" 
					: "bg-transparent py-6"
			}`}
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			{/* Animated Background */}
			<div className="absolute inset-0 z-0 overflow-hidden">
				<div className="absolute inset-0 animate-gradient-shift" />
			</div>

			<div className="max-w-4xl mx-auto px-6 flex items-center justify-between w-full relative z-10">
				<motion.div 
					className={`text-xl font-bold ${glassStyles}`}
					variants={slideVariants}
					animate="animate"
					whileHover={{ scale: 1.05, y: 0 }}
					transition={{ type: "spring", stiffness: 400, damping: 10 }}
				>
					Ardyansyah
				</motion.div>

				<nav>
					<motion.ul 
						className="flex gap-6"
						initial="hidden"
						animate="visible"
						variants={containerVariants}
					>
						<motion.li variants={slideVariants}>
							<motion.a 
								href="#about" 
								className={`text-gray-300 hover:text-white transition-colors block ${glassStyles}`}
								whileHover={{ scale: 1.1, color: '#fff', y: 0 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
							>
								About
							</motion.a>
						</motion.li>
						<motion.li variants={slideVariants}>
							<motion.a 
								href="#projects" 
								className={`text-gray-300 hover:text-white transition-colors block ${glassStyles}`}
								whileHover={{ scale: 1.1, color: '#fff', y: 0 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
							>
								Projects
							</motion.a>
						</motion.li>
						<motion.li variants={slideVariants}>
							<motion.a 
								href="#contact" 
								className={`text-gray-300 hover:text-white transition-colors block ${glassStyles}`}
								whileHover={{ scale: 1.1, color: '#fff', y: 0 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
							>
								Contact
							</motion.a>
						</motion.li>
					</motion.ul>
				</nav>
			</div>
		</motion.header>
	);
}
