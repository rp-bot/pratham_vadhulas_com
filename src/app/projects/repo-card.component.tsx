interface RepoCardProps {
	children: React.ReactNode;
}

export function RepoCard({ children }: RepoCardProps) {
	return (
		<>
			<h1>RepoCard</h1>
			{children}
		</>
	);
}
