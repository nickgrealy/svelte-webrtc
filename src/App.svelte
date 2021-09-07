<script lang="ts">

	import Peer from 'peerjs/dist/peerjs'

	let status = 'disconnected'
	let messages = []

	const peer = new Peer({
		host: "0.peerjs.com",
		port: 443,
		path: "/",
		pingInterval: 5000,
	} as any);
	// const conn = peer.connect("other-peer-id");
	// conn.on("open", () => {
	// 	status = 'connected'
	// 	conn.send("Hello World!");
	// });
	// conn.on("data", (data) => {
	// 	console.log("Received data", data);
	// 	messages.push(data)
	// });
</script>

<main class="flex flex-col">
	<div class="flex">
		<label>Status: {status}</label>
	</div>
	<form class="flex">
		<input type="text" />
		<button type="submit" on:click={() => {}}>Send</button>
	</form>
	<pre>
		{JSON.stringify(messages, null, 2)}
	</pre>
</main>

<style>
	main {
		border: 1px solid red;
	}
	.flex { display: flex; }
	.flex > * { flex: 1 0 auto; }
	.flex-col { flex-direction: column ;}
</style>