import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { A as AppHeading } from "../../../../chunks/AppHeading.js";
import { s as spiffyClockAppIcon, a as spiffyClockAppIconDark } from "../../../../chunks/SpiffyClockAppIconDark.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-bk9l4l_START -->${$$result.title = `<title>Celeritas Apps | Spiffy Clock Privacy</title>`, ""}<meta name="description" content="Spiffy Clock privacy policy"><!-- HEAD_svelte-bk9l4l_END -->`, ""} ${validate_component(AppHeading, "AppHeading").$$render(
    $$result,
    {
      imgSrc: spiffyClockAppIcon,
      imgSrcDark: spiffyClockAppIconDark,
      ariaLabel: "Spiffy Clock Privacy Policy"
    },
    {},
    {
      default: () => {
        return `Spiffy Clock Privacy Policy`;
      }
    }
  )} <p class="body-p" data-svelte-h="svelte-24l51y">Spiffy Clock does not collect data from its users.  It only connects to the internet when you make an in-app purchase or when it needs to verify an in-app purchase.  Any changes to the privacy policy of Spiffy Clock will be reflected here.</p> <br> <br> <br> <br>`;
});
export {
  Page as default
};
