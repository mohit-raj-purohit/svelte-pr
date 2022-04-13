
<svelte:head>
	<title>Login</title>
</svelte:head>

<script lang="ts">
	import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
	import authStore from '../../stores/authStore';
	async function loginWithGoogle() {
		try {
			const auth = getAuth();
			const provider = new GoogleAuthProvider();
			const result = await signInWithPopup(auth, provider);
			const credential = GoogleAuthProvider.credentialFromResult(result);
		} catch (error) {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
		}
	}
</script>
<section>
	<div>
		{#if $authStore.isLoggedIn}
			<span class="block mt-20">Welcome {$authStore.user.displayName}</span>
		{:else}
			<img class="m-auto mt-20" on:click={ loginWithGoogle } src="/login-google.png" alt="Login with Google" />
		{/if}
	</div>

</section>
<style>
	img {
		cursor: pointer;
	}
</style>
