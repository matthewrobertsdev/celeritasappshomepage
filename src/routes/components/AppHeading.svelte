<script>
  export let ariaLabel=''
  export let appName = '';
	export let imgSrc = '';
	import '../styles.css';
</script>

<h2 class="left-h1 app-heading" aria-label={ariaLabel}>
	<img src={imgSrc} alt={appName + " App Icon"} class="app-img" />
	<slot/>
</h2>
