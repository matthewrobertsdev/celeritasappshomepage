import * as universal from '../entries/pages/apps/filterart/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/apps/filterart/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/apps/filterart/+page.ts";
export const imports = ["_app/immutable/nodes/5.rZ3bYFG8.js","_app/immutable/chunks/index.30ImaL5r.js","_app/immutable/chunks/scheduler.-a-bpHvp.js","_app/immutable/chunks/index.n2QV-2o_.js","_app/immutable/chunks/AppHeading.RfdLVaOQ.js","_app/immutable/chunks/FilterArtAppIcon.P_MRoUyP.js"];
export const stylesheets = ["_app/immutable/assets/styles.im-2kFgd.css"];
export const fonts = [];
