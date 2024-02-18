<script>
  export let ariaLabel=''
  export let appName = '';
	export let imgSrc = '';
	export let pathComponent = '/';
	import '../styles.css';
</script>

<a href={pathComponent} class="app-link" aria-label={ariaLabel}>
	<img src={imgSrc} alt={appName + " App Icon"} class="app-img" />
	<slot/>
</a>
