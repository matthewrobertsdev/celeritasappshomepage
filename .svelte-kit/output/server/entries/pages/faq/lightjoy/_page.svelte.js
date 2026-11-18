import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { A as AppHeading } from "../../../../chunks/AppHeading.js";
import { c as celebrationLightsAppIcon } from "../../../../chunks/CelebrationLightsAppIcon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-apxetd_START -->${$$result.title = `<title>Celeritas Apps | Light Joy FAQ</title>`, ""}<meta name="description" content="Light Joy FAQ"><!-- HEAD_svelte-apxetd_END -->`, ""} ${validate_component(AppHeading, "AppHeading").$$render(
    $$result,
    {
      imgSrc: celebrationLightsAppIcon,
      ariaLabel: "Light Joy FAQ"
    },
    {},
    {
      default: () => {
        return `Light Joy FAQ`;
      }
    }
  )} <h2 class="left-h2" data-svelte-h="svelte-652ttr">How do I maximize battery life and minmize energy usage while using Light Joy?</h2> <p class="body-p" data-svelte-h="svelte-1adj1kc">To maximize battery life and minmize energy usage, leave all lights on or off as opposed to &quot;random off&quot; or &quot;staggered off&quot;.  This way, the app will not have to refresh as often, saving energy.</p> <br> <br> <br> <br>`;
});
export {
  Page as default
};
