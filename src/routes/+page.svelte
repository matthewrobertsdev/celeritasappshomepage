<script>
	import { currentApps } from '$lib/model/apps';
	import IconLink from './components/IconLink.svelte';
  import clockSuite from '$lib/images/ClockSuite.png'
  import celebrationLights from '$lib/images/LightJoy.png'
  import FilertArtImages from './components/FilterArtImages.svelte'
  import SpiffyClockImages from './components/SpiffyClockImages.svelte'
	import LearnFlexImages from './components/LearnFlexImages.svelte';
  import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Celeritas Apps</title>
	<meta name="description" content="Celeritas Apps homepage" />
</svelte:head>

<section>
	<div class="icon-container">
		{#each currentApps as app}
			<IconLink imgSrc={app.appIcon} pathComponent={`${base}/apps/${app.path}`} ariaLabel={app.name}>{app.name}</IconLink>
		{/each}
	</div>
</section>
<br/>
<hr>
<br/>
<section>
<div class="link-container">
<a href="{base}/apps/clocksuite" class="big-link">Clock Suite</a>
</div>
<h2 class="left-h2">Colorful clock suite. Resizable clock, alarms, timers, a stopwatch, and a dock clock. Simple and elegant, with each functionality in its own window.</h2>
<br/>
<br/>
<img src={clockSuite} class="mac-image" alt="A clock, alarms, timers, and a stopwatch on a computer screen">
</section>
<br/>
<hr>
<br/>
<section>
  <div class="link-container">
    <a href="{base}/apps/filterart" class="big-link">Filter Art</a>
    </div>
    <h2 class="left-h2">Filter Art lets you add filters to your photos or images to get amazing results!</h2>
    <br/>
    <br/>
    <FilertArtImages/>
</section>
<br/>
<hr>
<br/>
<section>
  <div class="link-container">
    <a href="{base}/apps/spiffyclock" class="big-link">Spiffy Clock</a>
    </div>
    <h2 class="left-h2">A colorful and fun large-text clock, with many colors that change with dark mode and light mode, and choices for display of time, date, and day of the week.</h2>
    <br/>
    <br/>
    <SpiffyClockImages/>
</section>
<br/>
<hr>
<br/>
<section>
  <div class="link-container">
    <a href="{base}/apps/celebrationlights" class="big-link">Light Joy</a>
    </div>
    <h2 class="left-h2">Decorate your screen with lights all-year round or for holidays or special occasions!</h2>
    <br/>
    <br/>
    <img src={celebrationLights} class="mac-image" alt="Rainbow colored lights around the edge of a computer screen.">
</section>
<br/>
<hr>
<br/>
<section>
  <div class="link-container">
    <a href="{base}/apps/learnflex" class="big-link">Learn Flex</a>
    </div>
    <h2 class="left-h2">Learn CSS Flexbox the easy way, or refresh your memory with this app as reference.</h2>
    <br/>
    <br/>
    <LearnFlexImages/>
</section>
<br/>
<br/>
<br/>
<br/>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

</style>
