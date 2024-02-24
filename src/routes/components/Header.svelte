<script>
	import HeaderHomeLink from './HeaderHomeLink.svelte';
	import HeaderMainLink from './HeaderMainLink.svelte';
  import './header.css'
  import { base } from '$app/paths';
</script>

<header>

	<nav>
		<ul>
			<HeaderHomeLink/>
			<HeaderMainLink path='{base}/apps' text='Apps'/>
			<HeaderMainLink path='{base}/contact' text='Contact'/>
      <HeaderMainLink path='{base}/privacy' text='Privacy'/>
      <HeaderMainLink path='{base}/faq' text='FAQ'/>
		</ul>
	</nav>

</header>

