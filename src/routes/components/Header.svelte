<script>
	import HeaderHomeLink from './HeaderHomeLink.svelte';
	import HeaderMainLink from './HeaderMainLink.svelte';
  import './header.css'
</script>

<header>

	<nav>
		<ul>
			<HeaderHomeLink/>
			<HeaderMainLink path='/apps' text='Apps'/>
			<HeaderMainLink path='/contact' text='Contact'/>
      <HeaderMainLink path='/privacy' text='Privacy'/>
      <HeaderMainLink path='/faq' text='FAQ'/>
		</ul>
	</nav>

</header>

