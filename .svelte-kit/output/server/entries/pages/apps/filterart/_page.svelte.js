import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { A as AppHeading } from "../../../../chunks/AppHeading.js";
import { f as filterArtAppIcon } from "../../../../chunks/FilterArtAppIcon.js";
const filterArtPlayground = "/celeritasappshomepage/_app/immutable/assets/FilterArtPlayground.UbNaju27.png";
const filterArtVenice = "/celeritasappshomepage/_app/immutable/assets/FilterArtVenice.C--V4vbF.png";
const filterArtFlowers = "/celeritasappshomepage/_app/immutable/assets/FilterArtFlowers.YWiVvljr.png";
const FilterArtImages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="iphone-image-container" data-svelte-h="svelte-15oqimm"><img${add_attribute("src", filterArtPlayground, 0)} class="iphone-image iphone-image-border" alt="Filter Art with a filtered image of a playground."> <img${add_attribute("src", filterArtVenice, 0)} class="iphone-image iphone-image-border" alt="Filter Art with a filtered image of some growing flowers."> <img${add_attribute("src", filterArtFlowers, 0)} class="iphone-image iphone-image-border" alt="Filter Art with a filtered image of canal in Venice."></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1pd4tqq_START -->${$$result.title = `<title>Celeritas Apps | Filter Art</title>`, ""}<meta name="description" content="Filter Art app homepage"><!-- HEAD_svelte-1pd4tqq_END -->`, ""} ${validate_component(AppHeading, "AppHeading").$$render(
    $$result,
    {
      imgSrc: filterArtAppIcon,
      imgSrcDark: filterArtAppIcon,
      ariaLabel: "Filter Art"
    },
    {},
    {
      default: () => {
        return `Filter Art`;
      }
    }
  )} <h2 class="left-h2" data-svelte-h="svelte-oitpy4">Filter Art lets you add filters to your photos or images to get amazing results!</h2> <p class="body-p" data-svelte-h="svelte-1n9jv9l">It lets you apply a series of filters and then save or share your image. You can use filters to enhance your image, or make it wildly different. You can save your filters or use preset filters to get results faster (this may become part of an in-app purchase later). Filter art is free to download. Try it and have fun surprising yourself with what you can create.</p> <p class="body-p" data-svelte-h="svelte-1z0qhg3">You can modify your image using the following: hue, contrast, invert colors, color multiply, saturation, brightness, grayscale, opacity, and blur.</p> ${validate_component(FilterArtImages, "FilterArtImages").$$render($$result, {}, {}, {})} <br> <br> <br> <br>`;
});
export {
  Page as default
};
