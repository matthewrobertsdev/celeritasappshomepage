import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { A as AppHeading } from "../../../../chunks/AppHeading.js";
import { l as learnFlexAppIcon } from "../../../../chunks/LearnFlexAppIcon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-jpnayx_START -->${$$result.title = `<title>Celeritas Apps | Learn Flex Privacy</title>`, ""}<meta name="description" content="Learn Flex privacy policy"><!-- HEAD_svelte-jpnayx_END -->`, ""} ${validate_component(AppHeading, "AppHeading").$$render(
    $$result,
    {
      imgSrc: learnFlexAppIcon,
      ariaLabel: "Learn Flex Privacy Policy"
    },
    {},
    {
      default: () => {
        return `Learn Flex Privacy Policy`;
      }
    }
  )} <p class="body-p" data-svelte-h="svelte-1i72bdt">Learn Flex does not collect data from its users, and does not connect to the internet. Any changes to the privacy policy of Learn Flex will be reflected here.</p> <br> <br> <br> <br>`;
});
export {
  Page as default
};
