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
    background-color: rgb(255, 243, 114);/*rgb(255, 243, 114);*//*#4DA0FF;*/
    transition: background-color 0.2s linear;
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
    background-color: white; /*linear-gradient(rgb(255, 243, 114),rgb(255, 227, 114));white;rgb(255, 243, 114);#9ECBFF;*/
    transition: background-color 0.2s linear;
	}

	footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		padding: 12px;
    font-weight: 600;
    text-align: center;
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
    background-color: #001297;/*#0018d2;*/
  }
  main {
    background: none;
    background-color: rgb(22, 22, 22)/*#000c68;*/
  }
}
</style>
