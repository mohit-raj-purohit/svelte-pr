<script lang="ts">
	import authStore from '../stores/authStore'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h2> 
		{#if $authStore.isLoggedIn}
			<img src={$authStore.user.photoURL} alt="user" />
		{/if}
	</h2>
</section>
