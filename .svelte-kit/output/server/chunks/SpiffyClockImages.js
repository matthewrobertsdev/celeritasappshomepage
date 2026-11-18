import { c as create_ssr_component, d as add_attribute } from "./ssr.js";
const spiffyClockGreenGradient = "/celeritasappshomepage/_app/immutable/assets/SpiffyClockGreenGradient.d8-t2z44.png";
const spiffyClockDarkRed = "/celeritasappshomepage/_app/immutable/assets/SpiffyClockDarkRed.na4Yt1It.png";
const spiffyClockDarkPurple = "/celeritasappshomepage/_app/immutable/assets/SpiffyClockDarkPurple.WjGTtj1s.png";
const SpiffyClockImages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="iphone-image-container" data-svelte-h="svelte-1ykh008"><img${add_attribute("src", spiffyClockGreenGradient, 0)} class="iphone-image" alt="Spiffy Clock with a green to blue gradient background."> <img${add_attribute("src", spiffyClockDarkRed, 0)} class="iphone-image" alt="Spiffy Clock with dark mode red background."> <img${add_attribute("src", spiffyClockDarkPurple, 0)} class="iphone-image" alt="Spiffy Clock with dark mode purple background."></div>`;
});
export {
  SpiffyClockImages as S
};
