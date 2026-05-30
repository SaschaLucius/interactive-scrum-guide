<script>
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import github from '$lib/images/github.svg';

	const pages = [{ path: '/about', name: 'About' }] as const;
</script>

<header>
	<a href={resolve('/')} class="logo">
		<span class="logo-icon">📖</span>
		<span class="logo-text">Agile Guides</span>
	</a>

	<nav>
		<ul>
			{#each pages as p (p.path)}
				<li aria-current={page.url.pathname === p.path ? 'page' : undefined}>
					<a href={resolve(p.path)}>{p.name}</a>
				</li>
			{/each}
			<li>
				<a href="https://github.com/SaschaLucius/interactive-scrum-guide/" class="github-link">
					<img src={github} alt="GitHub" />
				</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 1.5rem;
		height: 3.5rem;
		background: var(--color-surface);
		border-bottom: 1px solid var(--color-border);
		box-shadow: var(--shadow-sm);
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		color: var(--color-text);
		font-weight: 700;
		font-size: 1.1rem;
		letter-spacing: -0.02em;
	}

	.logo:hover {
		text-decoration: none;
		color: var(--color-theme-1);
	}

	.logo-icon {
		font-size: 1.4rem;
	}

	nav ul {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav a {
		display: flex;
		align-items: center;
		padding: 0.4rem 0.75rem;
		border-radius: 6px;
		color: var(--color-text-muted);
		font-weight: 500;
		font-size: 0.875rem;
		text-decoration: none;
		transition:
			background 0.15s ease,
			color 0.15s ease;
	}

	nav a:hover {
		background: var(--color-bg-1);
		color: var(--color-text);
		text-decoration: none;
	}

	li[aria-current='page'] a {
		background: var(--color-bg-2);
		color: var(--color-theme-1);
		font-weight: 600;
	}

	.github-link img {
		width: 1.25rem;
		height: 1.25rem;
		opacity: 0.6;
		transition: opacity 0.15s ease;
	}

	.github-link:hover img {
		opacity: 1;
	}
</style>
