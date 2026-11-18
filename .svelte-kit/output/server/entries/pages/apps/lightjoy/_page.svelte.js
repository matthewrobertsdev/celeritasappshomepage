import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/ssr.js";
import { A as AppHeading } from "../../../../chunks/AppHeading.js";
import { c as celebrationLightsAppIcon } from "../../../../chunks/CelebrationLightsAppIcon.js";
import { c as celebrationLights } from "../../../../chunks/LightJoy.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-7le59g_START -->${$$result.title = `<title>Celeritas Apps | Light Joy</title>`, ""}<meta name="description" content="Light Joy app homepage"><!-- HEAD_svelte-7le59g_END -->`, ""} ${validate_component(AppHeading, "AppHeading").$$render(
    $$result,
    {
      imgSrc: celebrationLightsAppIcon,
      imgSrcDark: celebrationLightsAppIcon,
      ariaLabel: "Light Joy"
    },
    {},
    {
      default: () => {
        return `Light Joy`;
      }
    }
  )} <h2 class="left-h2" data-svelte-h="svelte-11fbk7x">Decorate your screen with lights all year round or for holidays or special occasions!</h2> <p class="body-p" data-svelte-h="svelte-12q0e5y">Decorate your screen with colorful lights, both all year round and with special themes for
	holidays and special occasions! Single color, custom color, changing, and holiday and
	special-occasion themes are available, as well as various bulb shapes, on/off modes for the
	lights, various cord colors, float-on-top mode or not, and ways of showing and hiding different
	strands of lights. Lights will appear on all your displays for your computer. You can use your
	computer as usual with the lights around the edges as a decoration. In-app purchase is required to
	use all themes besides rainbow.</p> <p class="body-p" data-svelte-h="svelte-1okl3f8">Note: does not go over other apps that are in fullscreen mode.</p> <img${add_attribute("src", celebrationLights, 0)} class="mac-image" alt="Rainbow colored lights around the edge of a computer screen."> <h2 class="left-h2" data-svelte-h="svelte-luenmd">Single colors:</h2> <ul class="feature-list" data-svelte-h="svelte-1tiw8r3"><li>—Red</li> <li>—Orange</li> <li>—Yellow</li> <li>—Green</li> <li>—Mint</li> <li>—Cyan</li> <li>—Teal</li> <li>—Blue</li> <li>—Indigo</li> <li>—Purple</li> <li>—Pink</li> <li>—Brown</li> <li>—White</li> <li>—Black</li> <li>—Custom Color</li> <li>—Changing colors every second according to the rainbow</li></ul> <h2 class="left-h2" data-svelte-h="svelte-882k5p">Themed Lights:</h2> <ul class="feature-list" data-svelte-h="svelte-liwss8"><li>—Rainbow</li> <li>—Multi-color: red, blue, yellow, green and orange</li> <li>—Christmas</li> <li>—Christmas Mix</li> <li>—Ornaments Mix</li> <li>—Ice and Snow</li> <li>—New Year&#39;s</li> <li>—Milestone</li> <li>—Autumn</li> <li>—Halloween</li> <li>—Thanksgiving</li> <li>—Fourth of July</li> <li>—Hanukkah</li> <li>—Earth Day</li> <li>—Valentine&#39;s Day</li> <li>—Kwanzaa</li> <li>—Ramadan</li> <li>—Diwali</li> <li>—Buddha Day</li> <li>—Cinco de Mayo</li> <li>—Saint Patrick&#39;s Day</li> <li>—Lunar New Year</li> <li>—Easter</li> <li>—Birthday</li></ul> <h2 class="left-h2" data-svelte-h="svelte-lxjpwc">Bulb Shapes:</h2> <ul class="feature-list" data-svelte-h="svelte-yghtvz"><li>—Basic</li> <li>—Curved</li> <li>—Circular</li> <li>—Hearts</li> <li>—Stars</li> <li>—Moons</li> <li>—Moons and Stars</li> <li>—Bells</li> <li>—Balloons</li> <li>—Bursts</li></ul> <h2 class="left-h2" data-svelte-h="svelte-mubp9x">Cord Colors:</h2> <ul class="feature-list" data-svelte-h="svelte-up5dyq"><li>—Red</li> <li>—Orange</li> <li>—Yellow</li> <li>—Green</li> <li>—Blue</li> <li>—Indigo</li> <li>—Purple</li> <li>—Pink</li> <li>—Brown</li> <li>—White</li> <li>—Black</li></ul> <h2 class="left-h2" data-svelte-h="svelte-gt6x5e">On/Off Modes:</h2> <ul class="feature-list" data-svelte-h="svelte-7f6l9n"><li>—All On</li> <li>—Random Off</li> <li>—Staggered Off</li> <li>—All Off</li></ul> <h2 class="left-h2" data-svelte-h="svelte-u4y4x">Strand Visibility:</h2> <ul class="feature-list" data-svelte-h="svelte-3phrnq"><li>—All Visible</li> <li>—Top Hidden</li> <li>—Bottom Hidden</li> <li>—Top and Bottom Hidden</li> <li>—Sides Hidden</li> <li>—Only Top Visible</li> <li>—Only Bottom Visible</li></ul> <br> <br> <br> <br>`;
});
export {
  Page as default
};
