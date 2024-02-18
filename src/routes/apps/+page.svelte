<script>
	import AppLink from '../components/AppLink.svelte';
	import { apps } from '$lib/model/apps';
</script>

<svelte:head>
	<title>Celeritas Apps | Apps</title>
	<meta name="description" content="Links to web page for apps by Celeritas Apps" />
</svelte:head>

<h1 class="left-h1">Apps</h1>
{#each apps as app}
	<AppLink imgSrc={app.appIcon} appName={app.name} ariaLabel={app.name}>{app.name}</AppLink>
  <br>
{/each}
<br />
<br />
<br />
<br />
