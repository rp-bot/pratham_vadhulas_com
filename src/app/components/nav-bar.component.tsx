"use client";
import { FaHome, FaProjectDiagram, FaInfoCircle, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
export function NavBar ()
{
	const [ menuOpen, setMenuOpen ] = useState( false );

	return (


		<header className="  flex flex-row items-center justify-evenly w-full ">
			<div className="md:hidden self-start w-full p-5  ">
				<button onClick={ () => setMenuOpen( !menuOpen ) } className="text-white bg-gray-500 p-2 rounded">
					{ menuOpen ? <FaTimes /> : <FaBars /> }
				</button>
			</div>

			<nav
				className={ `fixed top-0 right-0 h-full bg-zinc-800 p-10 w-3/4 transform ${ menuOpen ? 'translate-x-0' : 'translate-x-full'
					} transition-transform duration-300 ease-in-out md:hidden z-10` }
			>
				<div className="flex flex-col space-y-6">
					<Link href="/" onClick={ () => setMenuOpen( false ) } className="text-white flex items-center space-x-2 hover:text-gray-400">
						<FaHome /> <span>Home</span>
					</Link>
					<Link href="/projects" onClick={ () => setMenuOpen( false ) } className="text-white flex items-center space-x-2 hover:text-gray-400">
						<FaProjectDiagram /> <span>Projects</span>
					</Link>
					<Link href="/about" onClick={ () => setMenuOpen( false ) } className="text-white flex items-center space-x-2 hover:text-gray-400">
						<FaInfoCircle /> <span>About</span>
					</Link>
					<Link href="/contact" onClick={ () => setMenuOpen( false ) } className="text-white flex items-center space-x-2 hover:text-gray-400">
						<FaEnvelope /> <span>Contact Me</span>
					</Link>
				</div>
			</nav>

			<nav className='md:flex flex-row items-center justify-evenly w-full hidden bg-zinc-800 p-10 '>
				<div>
					<Link href="/" className="text-white flex items-center space-x-1 hover:text-gray-400">
						<FaHome /> <span>Home</span>
					</Link>
				</div>
				<div>
					<Link href="/projects" className="text-white flex items-center space-x-1 hover:text-gray-400">
						<FaProjectDiagram /> <span>Projects</span>
					</Link>
				</div>
				<div>
					<Link href="/about" className="text-white flex items-center space-x-1 hover:text-gray-400">
						<FaInfoCircle /> <span>About</span>
					</Link>
				</div>
				<div>
					<Link href="/contact" className="text-white flex items-center space-x-1 hover:text-gray-400">
						<FaEnvelope /> <span>Contact Me</span>
					</Link>
				</div>
			</nav>


		</header>
	);
}
