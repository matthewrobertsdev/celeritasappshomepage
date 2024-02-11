<script>
	import { page } from '$app/stores';
	import celeritasAppsLogo from '$lib/images/celeritas-apps.png';
	import github from '$lib/images/github.svg';
</script>

<header>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined} class={$page.url.pathname === '/' ? 'active-home' : 'home'}>
				<a href="/"><img src={celeritasAppsLogo}> Celeritas Apps</a>
			</li>
			<li aria-current={$page.url.pathname === '/apps' ? 'page' : undefined} class={$page.url.pathname.startsWith('/apps') ? 'active-link' : 'link'}>
				<a href="/apps">Apps</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined} class={$page.url.pathname.startsWith('/contact') ? 'active-link' : 'link'}>
				<a href="/contact">Contact</a>
			</li>
      <li aria-current={$page.url.pathname.startsWith('/privacy') ? 'page' : undefined} class={$page.url.pathname.startsWith('/privacy') ? 'active-link' : 'link'}>
				<a href="/privacy">Privacy</a>
			</li>
      <li aria-current={$page.url.pathname.startsWith('/faq') ? 'page' : undefined} class={$page.url.pathname.startsWith('/faq') ? 'active-link' : 'link'}>
				<a href="/faq">FAQ</a>
			</li>
		</ul>
	</nav>

</header>

<style>
	header {
		display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
	}

  .home a {
    padding: 0px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .active-home a {
    padding-top: 1.5px;
    padding-bottom: 2px;
    padding-left: 15px;
    padding-right: 15px;
  }


  .active-link a {
    padding-top: 17.5px;
    padding-bottom: 18px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .link a {
    padding: 21px;
    padding-bottom: 21px;
    padding-left: 15px;
    padding-right: 15px;
  }


	nav {
		display: flex;
    flex-wrap: wrap;
    flex-direction: row;
		justify-content: center;
	}

	ul {
		position: relative;
		display: flex;
    flex-direction: row;
    flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		list-style: none;
    padding: none;
    margin: 0px;
    margin-left: -30px;
	}

	li {
    flex-wrap: wrap;
		position: relative;
	}

	li[aria-current='page'] {
		padding-top: 4px;
    border-bottom-color: #001eff;
    border-bottom-style: solid;
    border-bottom-width: 4px;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		text-decoration: none;
		transition: color 0.2s linear;
    font-size: 20px;
    font-weight: bold;
	}

  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin-right: 10px;
    border-color: rgb(255, 243, 114);;
    border-width: 3px;
    border-style: solid;
  }

  @media (prefers-color-scheme: dark) {
  a {
    color: #ffdf00;
  }
  li[aria-current='page'] {
    border-bottom-color: white;
	}
  img {
    border-color: white;
  }
}

.home a:hover {
  text-decoration: underline;
}
.link a:hover {
  text-decoration: underline;
}

@media screen and (min-width: 400px) {
  .link a {
    font-size: 20px;
  }
  .active-link a {
    font-size: 20px;
  }
  .home a {
    font-size: 20px;
  }
  .active-home a {
    font-size: 20px;
  }

  .home {
    margin-right: 40px;
  }
  .active-home {
    margin-right: 40px;
  }
}

@media screen and (min-width: 600px) {
  .link a {
    font-size: 22px;
  }
  .active-link a {
    font-size: 22px;
  }
  .home a {
    font-size: 25px;
  }
  .active-home a {
    font-size: 25px;
  }

  .home {
    margin-right: 40px;
  }
  .active-home {
    margin-right: 40px;
  }
}

@media screen and (min-width: 800px) {

  .link a {
    font-size: 23px;
  }
  .active-link a {
    font-size: 23px;
  }

  .home a {
    font-size: 30px;
  }
  .active-home a {
    font-size: 30px;
  }

  .home {
    margin-right: 80px;
  }
  .active-home {
    margin-right: 80px;
  }
}

</style>
