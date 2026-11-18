import { g as getContext, c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/exports.js";
import "devalue";
import { b as base } from "../../chunks/paths.js";
/* empty css                  */
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const celeritasAppsLogo = "/celeritasappshomepage/_app/immutable/assets/celeritas-apps.m44KytbC.png";
const HeaderHomeLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)}${add_attribute("class", $page.url.pathname === "/" ? "active-home" : "home", 0)}><a href="${escape(base, true) + "/"}" aria-label="Celeritas Apps" data-svelte-h="svelte-1m62lwf"><img${add_attribute("src", celeritasAppsLogo, 0)} class="home-img" alt="Celeritas Apps Logo"> Celeritas Apps</a></li>`;
});
const HeaderMainLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { path = "/" } = $$props;
  let { text = "" } = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$unsubscribe_page();
  return `<li${add_attribute("aria-current", $page.url.pathname === path ? "page" : void 0, 0)}${add_attribute(
    "class",
    $page.url.pathname === path ? "active-main-link" : "main-link",
    0
  )}><a${add_attribute("href", path, 0)}>${escape(text)}</a></li>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header><nav><ul>${validate_component(HeaderHomeLink, "HeaderHomeLink").$$render($$result, {}, {}, {})} ${validate_component(HeaderMainLink, "HeaderMainLink").$$render($$result, { path: base + "/apps", text: "Apps" }, {}, {})} ${validate_component(HeaderMainLink, "HeaderMainLink").$$render($$result, { path: base + "/contact", text: "Contact" }, {}, {})} ${validate_component(HeaderMainLink, "HeaderMainLink").$$render($$result, { path: base + "/privacy", text: "Privacy" }, {}, {})} ${validate_component(HeaderMainLink, "HeaderMainLink").$$render($$result, { path: base + "/faq", text: "FAQ" }, {}, {})}</ul></nav></header>`;
});
const css = {
  code: ".main-content.svelte-1s5mra4{flex:1;max-width:1000px;padding:20px}body{margin:0px;padding:0px;background-color:rgb(255, 243, 114);transition:background-color 0.2s linear}.app.svelte-1s5mra4{display:flex;flex-direction:column;min-height:100vh;flex:1;margin:0 auto}p.svelte-1s5mra4{font-size:18px}main.svelte-1s5mra4{flex:1;display:flex;flex-direction:row;justify-content:center;width:100%;margin:0 auto;box-sizing:border-box;background-color:white;transition:background-color 0.2s linear}footer.svelte-1s5mra4{display:flex;flex-direction:row;justify-content:center;align-content:center;padding:12px;font-weight:600;text-align:center}@media(min-width: 480px){footer.svelte-1s5mra4{padding:12px 0}}@media(prefers-color-scheme: dark){p.svelte-1s5mra4{color:white}body{background-color:#001297}main.svelte-1s5mra4{background:none;background-color:rgb(22, 22, 22)/*#000c68;*/\n  }}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-1s5mra4">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-1s5mra4"><div class="main-content svelte-1s5mra4">${slots.default ? slots.default({}) : ``}</div></main> <footer class="svelte-1s5mra4" data-svelte-h="svelte-hignrq"><p class="svelte-1s5mra4">Copyright © 2020-2026 Matt Roberts</p></footer> </div>`;
});
export {
  Layout as default
};
