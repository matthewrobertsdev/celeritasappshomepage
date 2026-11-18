import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { A as AppHeading } from "../../../../chunks/AppHeading.js";
import { c as celebrationLightsAppIcon } from "../../../../chunks/CelebrationLightsAppIcon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1eo26xn_START -->${$$result.title = `<title>Celeritas Apps | Light Joy Privacy</title>`, ""}<meta name="description" content="Light Joy privacy policy"><!-- HEAD_svelte-1eo26xn_END -->`, ""} ${validate_component(AppHeading, "AppHeading").$$render(
    $$result,
    {
      imgSrc: celebrationLightsAppIcon,
      ariaLabel: "Light Joy Privacy Policy"
    },
    {},
    {
      default: () => {
        return `Light Joy Privacy Policy`;
      }
    }
  )} <p class="body-p" data-svelte-h="svelte-5kk7fu">Light Joy does not collect data from its users.  It only connects to the internet when you make an in-app purchase or when it needs to verify an in-app purchase.  Any changes to the privacy policy of Light Joy will be reflected here.</p> <br> <br> <br> <br>`;
});
export {
  Page as default
};
