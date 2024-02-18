<script>
	import AppLink from '../components/AppLink.svelte';
	import { apps } from '$lib/model/apps';
</script>

<svelte:head>
	<title>Celeritas Apps | Contact</title>
	<meta name="description" content="FAQ links for apps" />
</svelte:head>

<h1 class="left-h1">Frequently Asked Questions</h1>
{#each apps as app}
	<AppLink imgSrc={app.appIcon} appName={app.name} ariaLabel={`${app.name} FAQ`}>{`${app.name} FAQ`}</AppLink>
  <br>
{/each}
<br />
<br />
<br />
<br />
