<script lang="ts">
	import "../app.css";
	import Header from '$lib/header/Header.svelte';
	import { initializeApp } from 'firebase/app';
	import { onMount } from 'svelte';
	import authStore from '../stores/authStore';
	import { getAuth } from "firebase/auth";

	onMount(() => {
		const firebaseConfig = {
			apiKey: "AIzaSyC47HbOthMoL3NaiuhngMhAbjMOiJ7K14E",
			authDomain: "ipl-490.firebaseapp.com",
			projectId: "ipl-490",
			storageBucket: "ipl-490.appspot.com",
			messagingSenderId: "233512990468",
			appId: "1:233512990468:web:f9f52670f5ddb6a81a8251",
			measurementId: "G-BX5DYP48BT"
		};
		const app = initializeApp(firebaseConfig);
		const auth = getAuth();
		auth.onAuthStateChanged(user => {
			authStore.set({
				isLoggedIn: user != null,
				user,
				firebaseController: true
			});
		});
	});
</script>

<Header />

<main >
	<slot />
</main>
