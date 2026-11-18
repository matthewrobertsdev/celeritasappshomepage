<script>
	export let ariaLabel = '';
	export let appName = '';
	export let imgSrc = '';
  export let imgSrcDark = '';
	export let pathComponent = '/';
	import '../styles.css';
</script>

<a href={pathComponent} class="icon-link link" aria-label={ariaLabel}>
	<picture>
		<source srcset={imgSrcDark ?? imgSrc} media="(prefers-color-scheme: dark)" />
		<img src={imgSrc} />
	</picture>
	<slot />
</a>
