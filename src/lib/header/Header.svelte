<script lang="ts">
	import { page } from '$app/stores';
	import logo from './logo.svg';
	import authStore from '../../stores/authStore';
	import { getAuth, signOut } from "firebase/auth";

	async function logout() {
		try {
			const auth = getAuth();
			let signedOut = await signOut(auth);
		} catch (e) {
			console.error(e);
		}
		
	}
</script>

<header>
	<div class="relative bg-white">
		<div class="border-b-2 border-gray-100 pb-4">
			<div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
				<div class="flex justify-start w-0 flex-1">
					<a sveltekit:prefetch href="/">
						<span class="sr-only">Home Page</span>
						<img class="h-16 md:h-20 w-auto " src={logo} alt="Home Page">
					</a>
				</div>
				<div class="flex space-x-10">
					<!-- <a class:active={$page.url.pathname === '/about'} sveltekit:prefetch href="/about" class="text-base font-medium text-gray-500 hover:text-gray-900"> About </a> -->
					<h1 class="text-xs text-center md:text-base font-medium text-gray-900">
						{#if $authStore.isLoggedIn}
							<span class="block">Welcome</span>
							<span class="text-emerald-600">
								{$authStore.user.displayName}
							</span>
						{:else}
							<span class="block">Please Login to access</span>
						{/if}
					</h1>
					
				</div>
				<div class="flex items-center justify-end flex-1 w-0">
					{#if $authStore.isLoggedIn}
						<button on:click={logout} class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" >Log Out</button>
					{:else}
						<a class:active={$page.url.pathname === '/login'} sveltekit:prefetch  class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" href="/login">Log In</a>
					{/if}
					
				</div>
			</div>
			{#if $authStore.isLoggedIn}
				<div class="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
					<div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" style="background-position: 10px 10px;"></div>
					<div class="relative rounded-xl overflow-auto">
						<div class="sm:px-8 flex sm:justify-center">
							<div class="bg-white px-6 py-4 shadow">
								<nav class="flex sm:justify-center space-x-4">
								<a class:active={$page.url.pathname === '/teams'} sveltekit:prefetch href="/teams" class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Teams</a>
								</nav>
							</div>
						</div>
					</div>
					<div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
				</div>
			{/if}
		</div>
	</div>
	
</header>