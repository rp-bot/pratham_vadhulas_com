import { FaHome, FaProjectDiagram, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

export function NavBar ()
{
	return (
		<header>


			<ul>
				<li>
					<a href="/">
						<FaHome /> Home
					</a>
				</li>
				<li>
					<a href="/projects">
						<FaProjectDiagram /> Projects
					</a>
				</li>
				<li>
					<a href="/about">
						<FaInfoCircle /> About
					</a>
				</li>
				<li>
					<a href="/contact">
						<FaEnvelope /> Contact Me
					</a>
				</li>
			</ul>

		</header>
	);
}
