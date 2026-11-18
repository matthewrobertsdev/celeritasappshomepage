export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/apps": [3],
		"/apps/clocksuite": [4],
		"/apps/filterart": [5],
		"/apps/learnflex": [6],
		"/apps/lightjoy": [7],
		"/apps/spiffyclock": [8],
		"/contact": [9],
		"/faq": [10],
		"/faq/clocksuite": [11],
		"/faq/contactcards": [12],
		"/faq/filterart": [13],
		"/faq/learnflex": [14],
		"/faq/lightjoy": [15],
		"/faq/spiffyclock": [16],
		"/privacy": [17],
		"/privacy/clocksuite": [18],
		"/privacy/contactcards": [19],
		"/privacy/filterart": [20],
		"/privacy/learnflex": [21],
		"/privacy/lightjoy": [22],
		"/privacy/spiffyclock": [23]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';