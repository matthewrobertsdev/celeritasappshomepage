import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { A as AppHeading } from "../../../../chunks/AppHeading.js";
import { l as learnFlexAppIcon } from "../../../../chunks/LearnFlexAppIcon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1a3cv3f_START -->${$$result.title = `<title>Celeritas Apps | Learn Flex FAQ</title>`, ""}<meta name="description" content="Learn Flex FAQ"><!-- HEAD_svelte-1a3cv3f_END -->`, ""} ${validate_component(AppHeading, "AppHeading").$$render(
    $$result,
    {
      imgSrc: learnFlexAppIcon,
      ariaLabel: "Learn Flex FAQ"
    },
    {},
    {
      default: () => {
        return `Learn Flex FAQ`;
      }
    }
  )} <h2 class="left-h2" data-svelte-h="svelte-yj1n4j">Can I learn all of CSS Flexbox just from this app?</h2> <p class="body-p" data-svelte-h="svelte-1tw8u7g">You probably cannot.  Some knowledge of CSS is required.  In addition, if something is not working in your own project, search for general answers as they probably exist on StackOverflow.com.  Lastly, there is no substitute for practicing in your own projects.</p> <br> <br> <br> <br>`;
});
export {
  Page as default
};
