import { c as create_ssr_component, d as add_attribute, f as each, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { c as currentApps } from "../../chunks/apps.js";
/* empty css                  */
import { c as clockSuite } from "../../chunks/ClockSuite.js";
import { c as celebrationLights } from "../../chunks/LightJoy.js";
import { S as SpiffyClockImages } from "../../chunks/SpiffyClockImages.js";
import { b as base } from "../../chunks/paths.js";
const IconLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ariaLabel = "" } = $$props;
  let { appName = "" } = $$props;
  let { imgSrc = "" } = $$props;
  let { imgSrcDark = "" } = $$props;
  let { pathComponent = "/" } = $$props;
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.appName === void 0 && $$bindings.appName && appName !== void 0)
    $$bindings.appName(appName);
  if ($$props.imgSrc === void 0 && $$bindings.imgSrc && imgSrc !== void 0)
    $$bindings.imgSrc(imgSrc);
  if ($$props.imgSrcDark === void 0 && $$bindings.imgSrcDark && imgSrcDark !== void 0)
    $$bindings.imgSrcDark(imgSrcDark);
  if ($$props.pathComponent === void 0 && $$bindings.pathComponent && pathComponent !== void 0)
    $$bindings.pathComponent(pathComponent);
  return `<a${add_attribute("href", pathComponent, 0)} class="icon-link link"${add_attribute("aria-label", ariaLabel, 0)}><picture><source${add_attribute("srcset", imgSrcDark ?? imgSrc, 0)} media="(prefers-color-scheme: dark)"> <img${add_attribute("src", imgSrc, 0)}></picture> ${slots.default ? slots.default({}) : ``}</a>`;
});
const css = {
  code: "section.svelte-1t8mhim{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-9t6q53_START -->${$$result.title = `<title>Celeritas Apps</title>`, ""}<meta name="description" content="Celeritas Apps homepage"><!-- HEAD_svelte-9t6q53_END -->`, ""} <section class="svelte-1t8mhim"><div class="icon-container">${each(currentApps, (app) => {
    return `${validate_component(IconLink, "IconLink").$$render(
      $$result,
      {
        imgSrc: app.appIcon,
        imgSrcDark: app.darkModeAppIcon,
        pathComponent: `${base}/apps/${app.path}`,
        ariaLabel: app.name
      },
      {},
      {
        default: () => {
          return `${escape(app.name)}`;
        }
      }
    )}`;
  })}</div></section> <br> <hr> <br> <section class="svelte-1t8mhim" data-svelte-h="svelte-7hr8xf"><div class="link-container"><a href="${escape(base, true) + "/apps/clocksuite"}" class="big-link">Clock Suite</a></div> <h2 class="left-h2">Colorful clock suite. Resizable clock, alarms, timers, a stopwatch, and a dock clock. Simple and elegant, with each functionality in its own window.</h2> <br> <br> <img${add_attribute("src", clockSuite, 0)} class="mac-image" alt="A clock, alarms, timers, and a stopwatch on a computer screen"></section> <br> <hr> <br> <section class="svelte-1t8mhim"><div class="link-container" data-svelte-h="svelte-1d4hf6n"><a href="${escape(base, true) + "/apps/spiffyclock"}" class="big-link">Spiffy Clock</a></div> <h2 class="left-h2" data-svelte-h="svelte-wb1b37">A colorful and fun large-text clock, with many colors that change with dark mode and light mode, and choices for display of time, date, and day of the week.</h2> <br> <br> ${validate_component(SpiffyClockImages, "SpiffyClockImages").$$render($$result, {}, {}, {})}</section> <br> <hr> <br> <section class="svelte-1t8mhim" data-svelte-h="svelte-6a3bay"><div class="link-container"><a href="${escape(base, true) + "/apps/lightjoy"}" class="big-link">Light Joy</a></div> <h2 class="left-h2">Decorate your screen with lights for holidays or special occasions!</h2> <br> <br> <img${add_attribute("src", celebrationLights, 0)} class="mac-image" alt="Rainbow colored lights around the edge of a computer screen."></section> <br> <br> <br> <br>`;
});
export {
  Page as default
};
