import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { A as AppHeading } from "../../../../chunks/AppHeading.js";
import { f as filterArtAppIcon } from "../../../../chunks/FilterArtAppIcon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-87cdiv_START -->${$$result.title = `<title>Celeritas Apps | Filter Art FAQ</title>`, ""}<meta name="description" content="Filter Art FAQ"><!-- HEAD_svelte-87cdiv_END -->`, ""} ${validate_component(AppHeading, "AppHeading").$$render(
    $$result,
    {
      imgSrc: filterArtAppIcon,
      ariaLabel: "Filter Art FAQ"
    },
    {},
    {
      default: () => {
        return `Filter Art FAQ`;
      }
    }
  )} <h2 class="left-h2" data-svelte-h="svelte-1yqr4fz">What is a filter in Filter Art?</h2> <p class="body-p" data-svelte-h="svelte-1eyaupn">Filter takes on two meanings in Filter Art. First it is any of the individual properties you can edit (hue, contrast, invert colors, color multiply, saturation, brightness, grayscale, opacity, and blur). Second, it is the conbination of all these properties that can be applied to an image or saved for future use.</p> <br> <br> <br> <br>`;
});
export {
  Page as default
};
