export default function Navbar() {
	return (
		<header className="flex items-center justify-between py-6">
			<div className="text-xl font-bold">Ardyansyah</div>

			<nav>
				<ul className="flex gap-6">
					<li>
						<a href="#about" className="text-gray-300 hover:text-white">
							About
						</a>
					</li>
					<li>
						<a href="#projects" className="text-gray-300 hover:text-white">
							Projects
						</a>
					</li>
					<li>
						<a href="#contact" className="text-gray-300 hover:text-white">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
