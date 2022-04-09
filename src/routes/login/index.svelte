<script lang="ts">
	import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
	async function loginWithGoogle() {
		try {
			const auth = getAuth();
			const provider = new GoogleAuthProvider();
			const result = await signInWithPopup(auth, provider);
			const credential = GoogleAuthProvider.credentialFromResult(result);
			console.log(credential, result);

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

<svelte:head>
	<title>Login</title>
</svelte:head>

<h1>Login with Google</h1>
<img on:click={ loginWithGoogle } src="/login-google.png" alt="Login with Google" />

<style>
	img {
		cursor: pointer;
	}
</style>
