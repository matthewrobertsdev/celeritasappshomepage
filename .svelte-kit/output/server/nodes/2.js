import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.-bb_8btR.js","_app/immutable/chunks/scheduler.-a-bpHvp.js","_app/immutable/chunks/index.n2QV-2o_.js","_app/immutable/chunks/apps.XNMBn1E5.js","_app/immutable/chunks/ClockSuiteAppIconDark.uu9szuL3.js","_app/immutable/chunks/SpiffyClockAppIconDark.8K4hTyhk.js","_app/immutable/chunks/CelebrationLightsAppIcon.Gh838oN6.js","_app/immutable/chunks/ClockSuite.sW62990s.js","_app/immutable/chunks/LightJoy.MXfn6gum.js","_app/immutable/chunks/SpiffyClockImages.prvWtrAZ.js","_app/immutable/chunks/paths.YjxYtH_E.js"];
export const stylesheets = ["_app/immutable/assets/2.qn3wQUKj.css","_app/immutable/assets/styles.im-2kFgd.css"];
export const fonts = [];
