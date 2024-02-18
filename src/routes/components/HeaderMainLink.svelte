<script>
	import { page } from '$app/stores';
  export let path = '/';
  export let text = '';
  import './header.css'
</script>

<li aria-current={$page.url.pathname === path ? 'page' : undefined} class={$page.url.pathname === path ? 'active-main-link' : 'main-link'}>
  <a href={path}>{text}</a>
</li>