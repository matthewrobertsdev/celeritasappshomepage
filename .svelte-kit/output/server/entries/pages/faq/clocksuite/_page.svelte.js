import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { A as AppHeading } from "../../../../chunks/AppHeading.js";
import { c as clockSuiteAppIcon, a as clockSuiteAppIconDark } from "../../../../chunks/ClockSuiteAppIconDark.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-xv4zyp_START -->${$$result.title = `<title>Celeritas Apps | Clock Suite FAQ</title>`, ""}<meta name="description" content="Clock Suite FAQ"><!-- HEAD_svelte-xv4zyp_END -->`, ""} ${validate_component(AppHeading, "AppHeading").$$render(
    $$result,
    {
      imgSrc: clockSuiteAppIcon,
      imgSrcDark: clockSuiteAppIconDark,
      ariaLabel: "Clock Suite FAQ"
    },
    {},
    {
      default: () => {
        return `Clock Suite FAQ`;
      }
    }
  )} <h2 class="left-h2" data-svelte-h="svelte-1bgtllk">How do I enable translucency for Clock Suite windows?</h2> <p class="body-p" data-svelte-h="svelte-1jeledk">It requires that you have purchased the &quot;All Themes&quot; in-app purchase.  You can open the translucent themes in the themes window by clicking on the &quot;Translucent&quot; button at the bottom on the left-hand side.</p> <br> <br> <br> <br>`;
});
export {
  Page as default
};
