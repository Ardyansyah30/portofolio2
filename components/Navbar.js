'use client';

import { motion } from "framer-motion";

export default function Navbar() {
	return (
		<motion.header 
			className="flex items-center justify-between py-6"
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<motion.div 
				className="text-xl font-bold"
				whileHover={{ scale: 1.05 }}
				transition={{ type: "spring", stiffness: 400, damping: 10 }}
			>
				Ardyansyah
			</motion.div>

			<nav>
				<ul className="flex gap-6">
					<li>
						<motion.a 
							href="#about" 
							className="text-gray-300 hover:text-white"
							whileHover={{ scale: 1.1, color: '#fff' }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
						>
							About
						</motion.a>
					</li>
					<li>
						<motion.a 
							href="#projects" 
							className="text-gray-300 hover:text-white"
							whileHover={{ scale: 1.1, color: '#fff' }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
						>
							Projects
						</motion.a>
					</li>
					<li>
						<motion.a 
							href="#contact" 
							className="text-gray-300 hover:text-white"
							whileHover={{ scale: 1.1, color: '#fff' }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
						>
							Contact
						</motion.a>
					</li>
				</ul>
			</nav>
		</motion.header>
	);
}
