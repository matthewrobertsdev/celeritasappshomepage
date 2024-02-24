<script>
	import AppHeading from '../../components/AppHeading.svelte';
  import filterArtAppIcon from '$lib/images/FilterArtAppIcon.png'
  import FilterArtImages from '../../components/FilterArtImages.svelte';
</script>

<svelte:head>
	<title>Celeritas Apps | Filter Art</title>
	<meta name="description" content="Filter Art app homepage" />
</svelte:head>

<AppHeading imgSrc={filterArtAppIcon} ariaLabel="Filter Art">Filter Art</AppHeading>
<h2 class="left-h2">Filter Art lets you add filters to your photos or images to get amazing results!</h2>
<p class="body-p">It lets you apply a series of filters and then save or share your image. You can use filters to enhance your image, or make it wildly different. You can save your filters or use preset filters to get results faster (this may become part of an in-app purchase later). Filter art is free to download. Try it and have fun surprising yourself with what you can create.</p>
<p class="body-p">You can modify your image using the following: hue, contrast, invert colors, color multiply, saturation, brightness, grayscale, opacity, and blur.</p>
<FilterArtImages/>
<br />
<br />
<br />
<br />
