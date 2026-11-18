import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { A as AppHeading } from "../../../../chunks/AppHeading.js";
import { s as spiffyClockAppIcon, a as spiffyClockAppIconDark } from "../../../../chunks/SpiffyClockAppIconDark.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-19f0jev_START -->${$$result.title = `<title>Celeritas Apps | Spiffy Clock FAQ</title>`, ""}<meta name="description" content="Spiffy Clock FAQ"><!-- HEAD_svelte-19f0jev_END -->`, ""} ${validate_component(AppHeading, "AppHeading").$$render(
    $$result,
    {
      imgSrc: spiffyClockAppIcon,
      imgSrcDark: spiffyClockAppIconDark,
      ariaLabel: "Spiffy Clock FAQ"
    },
    {},
    {
      default: () => {
        return `Spiffy Clock FAQ`;
      }
    }
  )} <h2 class="left-h2" data-svelte-h="svelte-1vzqu8l">Why is night mode not making the text dark?</h2> <p class="body-p" data-svelte-h="svelte-1xn5f85">For night mode to have effect, you must be using dark mode. If it is not darkening the text, you must not be using system-wide dark mode at that time.</p> <h2 class="left-h2" data-svelte-h="svelte-mjricy">Why is the text dark in light mode?</h2> <p class="body-p" data-svelte-h="svelte-km9yz0">This is the convention on iOS devices. In light mode, the backgrounds are lighter and the text is darker. This is particularly important for colors like light mode yellow on which light text wouldn&#39;t show up very well.</p> <br> <br> <br> <br>`;
});
export {
  Page as default
};
