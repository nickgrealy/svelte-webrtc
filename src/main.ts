import App from './App.svelte';
import Peer from "simple-peer";

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;