import { c as create_ssr_component, d as add_attribute } from "./ssr.js";
/* empty css       */
const AppHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ariaLabel = "" } = $$props;
  let { appName = "" } = $$props;
  let { imgSrc = "" } = $$props;
  let { imgSrcDark = "" } = $$props;
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.appName === void 0 && $$bindings.appName && appName !== void 0)
    $$bindings.appName(appName);
  if ($$props.imgSrc === void 0 && $$bindings.imgSrc && imgSrc !== void 0)
    $$bindings.imgSrc(imgSrc);
  if ($$props.imgSrcDark === void 0 && $$bindings.imgSrcDark && imgSrcDark !== void 0)
    $$bindings.imgSrcDark(imgSrcDark);
  return `<h1 class="left-h1 app-heading"${add_attribute("aria-label", ariaLabel, 0)}><picture><source${add_attribute("srcset", imgSrcDark ?? imgSrc, 0)} media="(prefers-color-scheme: dark)"> <img${add_attribute("src", imgSrc, 0)}${add_attribute("alt", appName + " App Icon", 0)} class="app-img"></picture> ${slots.default ? slots.default({}) : ``}</h1>`;
});
export {
  AppHeading as A
};
