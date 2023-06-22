<script>
	import '../app.css';
	import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";
	export let data;
</script>

<main>
	<Header header={data.header}/>
	<slot />
	<Footer />
</main>
