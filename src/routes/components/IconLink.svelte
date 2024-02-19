<script>
  export let ariaLabel=''
  export let appName = '';
	export let imgSrc = '';
	export let pathComponent = '/';
	import '../styles.css';
</script>

  <a href={pathComponent} class="icon-link link" aria-label={ariaLabel}>
    <img src={imgSrc}>
    <slot/>
  </a>
