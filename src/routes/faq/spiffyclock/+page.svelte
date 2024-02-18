<script>
	import AppHeading from '../../components/AppHeading.svelte';
  import spiffyClockAppIcon from '$lib/images/SpiffyClockAppIcon.png'
</script>

<svelte:head>
	<title>Celeritas Apps | Spiffy Clock FAQ</title>
	<meta name="description" content="Spiffy Clock FAQ" />
</svelte:head>

<AppHeading imgSrc={spiffyClockAppIcon}>Spiffy Clock FAQ</AppHeading>
<h2 class="left-h2">Why is night mode not making the text dark?</h2>
<p class="body-p">For night mode to have effect, you must be using dark mode. If it is not darkening the text, you must not be using system-wide dark mode at that time.</p>
<h2 class="left-h2">Why is the text dark in light mode?</h2>
<p class="body-p">This is the convention on iOS devices. In light mode, the backgrounds are lighter and the text is darker. This is particularly important for colors like light mode yellow on which light text wouldn't show up very well.</p>
<br />
<br />
<br />
<br />
