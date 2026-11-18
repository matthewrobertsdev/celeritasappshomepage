import { c as create_ssr_component, f as each, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { A as AppLink } from "../../../chunks/AppLink.js";
import { c as currentApps } from "../../../chunks/apps.js";
import { b as base } from "../../../chunks/paths.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1drzosc_START -->${$$result.title = `<title>Celeritas Apps | Apps</title>`, ""}<meta name="description" content="Links to web page for apps by Celeritas Apps"><!-- HEAD_svelte-1drzosc_END -->`, ""} <h1 class="left-h1" data-svelte-h="svelte-1uj80qo">Apps</h1> ${each(currentApps, (app) => {
    return `${validate_component(AppLink, "AppLink").$$render(
      $$result,
      {
        imgSrc: app.appIcon,
        imgSrcDark: app.darkModeAppIcon,
        appName: app.name,
        pathComponent: `${base}/apps/${app.path}`,
        ariaLabel: app.name
      },
      {},
      {
        default: () => {
          return `${escape(app.name)}`;
        }
      }
    )} <br>`;
  })} <br> <br> <br> <br>`;
});
export {
  Page as default
};
