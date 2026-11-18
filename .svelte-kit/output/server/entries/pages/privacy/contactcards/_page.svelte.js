import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { A as AppHeading } from "../../../../chunks/AppHeading.js";
import { c as contactCardsAppIcon } from "../../../../chunks/ContactCardsAppIcon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-74gss9_START -->${$$result.title = `<title>Celeritas Apps | Contact Cards Privacy</title>`, ""}<meta name="description" content="Contact Cards privacy policy"><!-- HEAD_svelte-74gss9_END -->`, ""} ${validate_component(AppHeading, "AppHeading").$$render(
    $$result,
    {
      imgSrc: contactCardsAppIcon,
      ariaLabel: "Contact Cards Privacy Policy"
    },
    {},
    {
      default: () => {
        return `Contact Cards Privacy Policy`;
      }
    }
  )} <p class="body-p" data-svelte-h="svelte-1dn7i06">Contact Cards syncs data with its user&#39;s private iCloud storage, unless the user has turned iCloud off for it. The developer cannot access this data. Contact Cards connects to the internet to sync with iCloud. Any changes to the privacy policy of Contact Cards will be reflected here.</p> <br> <br> <br> <br>`;
});
export {
  Page as default
};
