import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { A as AppHeading } from "../../../../chunks/AppHeading.js";
import { l as learnFlexAppIcon } from "../../../../chunks/LearnFlexAppIcon.js";
const learnFlexContainer = "/celeritasappshomepage/_app/immutable/assets/LearnFlexContainer.g0G9KzcI.png";
const learnFlexContainerProperties = "/celeritasappshomepage/_app/immutable/assets/LearnFlexContainerProperties.owjxgzn-.png";
const learnFlexItems = "/celeritasappshomepage/_app/immutable/assets/LearnFlexItems.NqrJQqr6.png";
const LearnFlexImages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="iphone-image-container" data-svelte-h="svelte-1n2f40"><img${add_attribute("src", learnFlexContainer, 0)} class="iphone-image iphone-image-border" alt="Learn flex with the Flexbox container showing."> <img${add_attribute("src", learnFlexContainerProperties, 0)} class="iphone-image iphone-image-border" alt="Learn Flex Flexbox container properties."> <img${add_attribute("src", learnFlexItems, 0)} class="iphone-image iphone-image-border" alt="Learn flex with the Flexbox container showing with item properties defined."></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1xj6eca_START -->${$$result.title = `<title>Celeritas Apps | Learn Flex</title>`, ""}<meta name="description" content="Learn Flex app homepage"><!-- HEAD_svelte-1xj6eca_END -->`, ""} ${validate_component(AppHeading, "AppHeading").$$render(
    $$result,
    {
      imgSrc: learnFlexAppIcon,
      imgSrcDark: learnFlexAppIcon,
      ariaLabel: "Learn Flex"
    },
    {},
    {
      default: () => {
        return `Learn Flex`;
      }
    }
  )} <h2 class="left-h2" data-svelte-h="svelte-2mtp0m">Learn CSS Flexbox the easy way, or refresh your memory with this app as reference.</h2> <p class="body-p" data-svelte-h="svelte-1cmzeg0">Learn CSS Flexbox, a CSS technology used in web development as well as in some cross-platform development frameworks, such as React Native, with the convenience of your phone or tablet.  Try out different CSS properties for the FlexBox container and learn how they work, as well as for individual FlexBox items.  &quot;flex-direction&quot;, &quot;justify-content&quot;, &quot;align-content&quot;, &quot;align-items&quot;, &quot;flex-basis&quot;, &quot;flex-grow&quot;, &quot;flex-shrink&quot;, and &quot;align-self&quot; can be changed for demonstration in the app.  Also read up about &quot;gap&quot;, &quot;row-gap&quot;, &quot;column-gap&quot;, and &quot;order&quot;, although those are not demoed in the app.  Bring your Flexbox knowledge to the next level.  Includes descriptions of all the properties mentioned above for your learning or reference.</p> ${validate_component(LearnFlexImages, "LearnFlexImages").$$render($$result, {}, {}, {})} <br> <br> <br> <br>`;
});
export {
  Page as default
};
