<script>
	import Header from './Header.svelte';
  import './styles.css'
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Copyright © 2020-2024 Matt Roberts</p>
	</footer>
</div>

<style>
  :global(body) {
    margin: 0px;
    padding: 0px;
  }
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
    flex: 1;
    margin: 0 auto;
	}

  p {
    font-size: 18px;
  }

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		padding: 12px;
    font-weight: 600;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

  @media (prefers-color-scheme: dark) {
  h1, h2, h3, p {
    color: white;
  }
  :global(body) {
    background-color: #0018d2;
  }
  main {
    background-color: #000c68;
  }
}
</style>
