import { c as create_ssr_component, f as each, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { A as AppLink } from "../../../chunks/AppLink.js";
import { a as apps } from "../../../chunks/apps.js";
import { b as base } from "../../../chunks/paths.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-wrt55x_START -->${$$result.title = `<title>Celeritas Apps | Privacy</title>`, ""}<meta name="description" content="Privacy policy links for apps"><!-- HEAD_svelte-wrt55x_END -->`, ""} <h1 class="left-h1" data-svelte-h="svelte-vxetja">Privacy Policies</h1> ${each(apps, (app) => {
    return `${validate_component(AppLink, "AppLink").$$render(
      $$result,
      {
        imgSrc: app.appIcon,
        imgSrcDark: app.darkModeAppIcon,
        appName: app.name,
        pathComponent: `${base}/privacy/` + app.path,
        ariaLabel: `${app.name} Privacy Policy`
      },
      {},
      {
        default: () => {
          return `${escape(`${app.name} Privacy Policy`)}`;
        }
      }
    )} <br>`;
  })} <br> <br> <br> <br>`;
});
export {
  Page as default
};
