import * as universal from '../entries/pages/faq/_page.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/faq/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/faq/+page.ts";
export const imports = ["_app/immutable/nodes/10.0Jbx-lee.js","_app/immutable/chunks/index.30ImaL5r.js","_app/immutable/chunks/scheduler.-a-bpHvp.js","_app/immutable/chunks/index.n2QV-2o_.js","_app/immutable/chunks/apps.XNMBn1E5.js","_app/immutable/chunks/ClockSuiteAppIconDark.uu9szuL3.js","_app/immutable/chunks/SpiffyClockAppIconDark.8K4hTyhk.js","_app/immutable/chunks/CelebrationLightsAppIcon.Gh838oN6.js","_app/immutable/chunks/AppLink.eEhbyboL.js","_app/immutable/chunks/paths.YjxYtH_E.js"];
export const stylesheets = ["_app/immutable/assets/styles.im-2kFgd.css"];
export const fonts = [];
