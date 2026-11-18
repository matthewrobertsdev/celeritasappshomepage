import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { A as AppHeading } from "../../../../chunks/AppHeading.js";
import { f as filterArtAppIcon } from "../../../../chunks/FilterArtAppIcon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1pikt0t_START -->${$$result.title = `<title>Celeritas Apps | Filter Art Privacy</title>`, ""}<meta name="description" content="Filter Art privacy policy"><!-- HEAD_svelte-1pikt0t_END -->`, ""} ${validate_component(AppHeading, "AppHeading").$$render(
    $$result,
    {
      imgSrc: filterArtAppIcon,
      ariaLabel: "Filter Art Privacy Policy"
    },
    {},
    {
      default: () => {
        return `Filter Art Privacy Policy`;
      }
    }
  )} <p class="body-p" data-svelte-h="svelte-3ury20">Filter Art syncs saved or favorited filters with its user&#39;s private iCloud storage, unless the user has turned iCloud off for it. The developer cannot access this data. Filter Art connects to the internet to sync saved or favorited filters with iCloud. Any changes to the privacy policy of Filter Art will be reflected here.</p> <br> <br> <br> <br>`;
});
export {
  Page as default
};
