export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "celeritasappshomepage/_app",
	assets: new Set([".DS_Store","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.JqzAuXYI.js","app":"_app/immutable/entry/app.D0_PNH4H.js","imports":["_app/immutable/entry/start.JqzAuXYI.js","_app/immutable/chunks/entry.DJeFw9Rm.js","_app/immutable/chunks/scheduler.-a-bpHvp.js","_app/immutable/chunks/paths.YjxYtH_E.js","_app/immutable/entry/app.D0_PNH4H.js","_app/immutable/chunks/scheduler.-a-bpHvp.js","_app/immutable/chunks/index.n2QV-2o_.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
