import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { A as AppHeading } from "../../../../chunks/AppHeading.js";
import { s as spiffyClockAppIcon, a as spiffyClockAppIconDark } from "../../../../chunks/SpiffyClockAppIconDark.js";
import { S as SpiffyClockImages } from "../../../../chunks/SpiffyClockImages.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-81zewm_START -->${$$result.title = `<title>Celeritas Apps | Spiffy Clock</title>`, ""}<meta name="description" content="Filter Art app homepage"><!-- HEAD_svelte-81zewm_END -->`, ""} ${validate_component(AppHeading, "AppHeading").$$render(
    $$result,
    {
      imgSrc: spiffyClockAppIcon,
      imgSrcDark: spiffyClockAppIconDark,
      ariaLabel: "Spiffy Clock"
    },
    {},
    {
      default: () => {
        return `Spiffy Clock`;
      }
    }
  )} <h2 class="left-h2" data-svelte-h="svelte-wb1b37">A colorful and fun large-text clock, with many colors that change with dark mode and light mode, and choices for display of time, date, and day of the week.</h2> <p class="body-p" data-svelte-h="svelte-1fgmciz">Spiffy Clock puts the time and date front and center!  It has 16 free colors that can be displayed as the background or as the text.  An in-app purchase unlocks gradient backgrounds, gradient text, custom background and text colors, bi-color themes, gold, silver, and bronze, and rainbow coloring.  Choose from numerous settings exactly how you want the time and date and day of the week displayed.  When the color choice is for the background, the color will automatically change for light mode and dark mode, except when using custom colors.  Works in both portrait and landscape mode.</p> ${validate_component(SpiffyClockImages, "SpiffyClockImages").$$render($$result, {}, {}, {})} <p class="body-p" data-svelte-h="svelte-qfalh6">A useful night mode for use with dark mode allows you to display dark text in dark mode.</p> <h2 class="left-h2" data-svelte-h="svelte-cj2bdq">Free color choices are:</h2> <ul class="feature-list" data-svelte-h="svelte-1vtnpic"><li>—Red</li> <li>—Orange</li> <li>—Yellow</li> <li>—Green</li> <li>—Mint</li> <li>—Cyan</li> <li>—Teal</li> <li>—Blue</li> <li>—Indigo</li> <li>—Purple</li> <li>—Brown</li> <li>—Black</li> <li>—Gray</li> <li>—White</li> <li>—System</li></ul> <h2 class="left-h2" data-svelte-h="svelte-1hqqv96">Paid color choices are:</h2> <ul class="feature-list" data-svelte-h="svelte-iaps0q"><li>—Gradients</li> <li>—Gold</li> <li>—Silver</li> <li>—Bronze</li> <li>—Bi-color themes</li> <li>—Custom colors</li></ul> <p class="body-p" data-svelte-h="svelte-9ad83k">You can choose to display the background as a color gradient.</p> <h2 class="left-h2" data-svelte-h="svelte-1is2pci">Time and Date Settings</h2> <ul class="feature-list" data-svelte-h="svelte-rot3k3"><li>—Analog or digital clock</li> <li>—Show/hide seconds</li> <li>—Use 24 hour/12 hour time</li> <li>—Show/hide date</li> <li>—Show/hide day of the week</li> <li>—Use numerical date</li></ul> <p class="body-p" data-svelte-h="svelte-1pj1o2w">You can also hide the status bar if you want.</p> <p class="body-p" data-svelte-h="svelte-8ihsxk">This app is a great compliment to the desktop app Clock Suite. Similar colors are used, so there is a consistent look and feel across your devices.</p> <br> <br> <br> <br>`;
});
export {
  Page as default
};
