import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { A as AppHeading } from "../../../../chunks/AppHeading.js";
import { c as clockSuiteAppIcon, a as clockSuiteAppIconDark } from "../../../../chunks/ClockSuiteAppIconDark.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-gud4y3_START -->${$$result.title = `<title>Celeritas Apps | Clock Suite Privacy</title>`, ""}<meta name="description" content="Clock Suite privacy policy"><!-- HEAD_svelte-gud4y3_END -->`, ""} ${validate_component(AppHeading, "AppHeading").$$render(
    $$result,
    {
      imgSrc: clockSuiteAppIcon,
      imgSrcDark: clockSuiteAppIconDark,
      ariaLabel: "Clock Suite Privacy Policy"
    },
    {},
    {
      default: () => {
        return `Clock Suite Privacy Policy`;
      }
    }
  )} <p class="body-p" data-svelte-h="svelte-jy4o4i">Clock Suite does not collect data from its users.  It only connects to the internet when you make an in-app purchase or when it needs to verify an in-app purchase.  Any changes to the privacy policy of Clock Suite will be reflected here.</p> <br> <br> <br> <br>`;
});
export {
  Page as default
};
