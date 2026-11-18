import { c as create_ssr_component, f as each, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { A as AppLink } from "../../../chunks/AppLink.js";
import { a as apps } from "../../../chunks/apps.js";
import { b as base } from "../../../chunks/paths.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-t3y6y7_START -->${$$result.title = `<title>Celeritas Apps | Contact</title>`, ""}<meta name="description" content="FAQ links for apps"><!-- HEAD_svelte-t3y6y7_END -->`, ""} <h1 class="left-h1" data-svelte-h="svelte-oefmwc">Frequently Asked Questions</h1> ${each(apps, (app) => {
    return `${validate_component(AppLink, "AppLink").$$render(
      $$result,
      {
        imgSrc: app.appIcon,
        imgSrcDark: app.darkModeAppIcon,
        appName: app.name,
        pathComponent: `${base}/faq/` + app.path,
        ariaLabel: `${app.name} FAQ`
      },
      {},
      {
        default: () => {
          return `${escape(`${app.name} FAQ`)}`;
        }
      }
    )} <br>`;
  })} <br> <br> <br> <br>`;
});
export {
  Page as default
};
