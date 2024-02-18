<script>
	import AppLink from '../components/AppLink.svelte';
	import { apps } from '$lib/model/apps';
</script>

<svelte:head>
	<title>Celeritas Apps | Privacy</title>
	<meta name="description" content="Privacy policy links for apps" />
</svelte:head>

<h1 class="left-h1">Privacy Policies</h1>
{#each apps as app}
	<AppLink imgSrc={app.appIcon} appName={app.name} ariaLabel={`${app.name} Privacy Policy`}>{`${app.name} Privacy Policy`}</AppLink>
  <br>
{/each}
<br />
<br />
<br />
<br />
