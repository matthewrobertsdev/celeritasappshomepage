import { c as create_ssr_component, d as add_attribute } from "./ssr.js";
/* empty css       */
const AppLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<a${add_attribute("href", pathComponent, 0)} class="app-link"${add_attribute("aria-label", ariaLabel, 0)}><picture><source${add_attribute("srcset", imgSrcDark ?? imgSrc, 0)} media="(prefers-color-scheme: dark)"> <img${add_attribute("src", imgSrc, 0)}${add_attribute("alt", appName + " App Icon", 0)} class="app-img"></picture> ${slots.default ? slots.default({}) : ``}</a>`;
});
export {
  AppLink as A
};
