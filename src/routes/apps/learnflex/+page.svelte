<script>
	import AppHeading from '../../components/AppHeading.svelte';
  import learnFlexAppIcon from '$lib/images/LearnFlexAppIcon.png'
  import filterArtPlayground from '$lib/images/FilterArtPlayground.png'
  import filterArtVenice from '$lib/images/FilterArtVenice.png'
  import filterArtFlowers from '$lib/images/FilterArtFlowers.png'
	import LearnFlexImages from '../../components/LearnFlexImages.svelte';
</script>

<svelte:head>
	<title>Celeritas Apps | Learn Flex</title>
	<meta name="description" content="Learn Flex app homepage" />
</svelte:head>

<AppHeading imgSrc={learnFlexAppIcon} ariaLabel="Learn Flex">Learn Flex</AppHeading>
<h2 class="left-h2">Learn CSS Flexbox the easy way, or refresh your memory with this app as reference.</h2>
<p class="body-p">Learn CSS Flexbox, a CSS technology used in web development as well as in some cross-platform development frameworks, such as React Native, with the convenience of your phone or tablet.  Try out different CSS properties for the FlexBox container and learn how they work, as well as for individual FlexBox items.  "flex-direction", "justify-content", "align-content", "align-items", "flex-basis", "flex-grow", "flex-shrink", and "align-self" can be changed for demonstration in the app.  Also read up about "gap", "row-gap", "column-gap", and "order", although those are not demoed in the app.  Bring your Flexbox knowledge to the next level.  Includes descriptions of all the properties mentioned above for your learning or reference.</p>
<LearnFlexImages/>
<br />
<br />
<br />
<br />
