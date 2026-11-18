<script>
  export let ariaLabel=''
  export let appName = '';
	export let imgSrc = '';
  export let imgSrcDark = '';
	import '../styles.css';
</script>

<h1 class="left-h1 app-heading" aria-label={ariaLabel}>
<picture>
  <source srcset={imgSrcDark ?? imgSrc} media="(prefers-color-scheme: dark)" />
		<img src={imgSrc} alt={appName + " App Icon"} class="app-img" />
    </picture>
	<slot/>
</h1>
