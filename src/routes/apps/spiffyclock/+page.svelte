<script>
	import AppHeading from '../../components/AppHeading.svelte';
  import spiffyClockAppIcon from '$lib/images/SpiffyClockAppIcon.png'
  import spiffyClockGreenGradient from '$lib/images/SpiffyClockGreenGradient.png'
  import spiffyClockDarkRed from '$lib/images/SpiffyClockDarkRed.png'
  import spiffyClockDarkPurple from '$lib/images/SpiffyClockDarkPurple.png'
</script>

<svelte:head>
	<title>Celeritas Apps | Spiffy Clock</title>
	<meta name="description" content="Filter Art app homepage" />
</svelte:head>

<AppHeading imgSrc={spiffyClockAppIcon} ariaLabel="Spiffy Clock">Spiffy Clock</AppHeading>
<h2 class="left-h2">A colorful and fun large-text clock, with many colors that change with dark mode and light mode, and choices for display of time, date, and day of the week.</h2>
<p class="body-p">Spiffy Clock puts the time and date front and center!  It has 13 built-in colors that can be displayed as the background or as the text.  Choose from numerous settings exactly how you want the time and date and day of the week displayed.  When the color choice is for the background, the color will automatically change for light mode and dark mode (provided your iOS version supports system-wide dark mode).  Works in both portrait and landscape mode.</p>
<div class="iphone-image-container">
<img src={spiffyClockGreenGradient} class="iphone-image" alt="Spiffy Clock with a green to blue gradient background.">
<img src={spiffyClockDarkRed} class="iphone-image" alt="Spiffy Clock with dark mode red background.">
<img src={spiffyClockDarkPurple} class="iphone-image" alt="Spiffy Clock with dark mode purple background.">
</div>
<p class="body-p">A useful night mode for use with dark mode allows you to display dark text in dark mode.</p>
<h2 class="left-h2">Color Choices</h2>
  <ul class="feature-list">
  <li>—Red</li>
  <li>—Orange</li>
  <li>—Yellow</li>
  <li>—Green</li>
  <li>—Blue</li>
  <li>—Indigo</li>
  <li>—Purple</li>
  <li>—Brown</li>
  <li>—Black</li>
  <li>—Gray</li>
  <li>—White</li>
  <li>—System</li>
</ul>
<p class="body-p">You can choose to display the background as a color gradient.</p>
<h2 class="left-h2">Time and Date Settings</h2>
  <ul class="feature-list">
  <li>—Show/hide seconds</li>
  <li>—Use 24 hour/12 hour time</li>
  <li>—Show date</li>
  <li>—Show day of the week</li>
  <li>—Use numerical date</li>
</ul>
<p class="body-p">You can also hide the status bar if you want.
</p>
<p class="body-p">This app is a great compliment to the desktop app Clock Suite. Similar colors are used, so there is a consistent look and feel across your devices.
</p>

<br />
<br />
<br />
<br />
