<script lang="ts">
	import { page } from '$app/stores';
	import logo from './logo.svg';
	import authStore from '../../stores/authStore'
</script>

<header>
<div class="relative bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6">
		<div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
			<div class="flex justify-start lg:w-0 lg:flex-1">
				<a sveltekit:prefetch href="/">
					<span class="sr-only">Home Page</span>
					<img class="h-20 w-auto" src={logo} alt="Home Page">
				</a>
			</div>
			<div class="md:flex space-x-10">
				<!-- <a class:active={$page.url.pathname === '/about'} sveltekit:prefetch href="/about" class="text-base font-medium text-gray-500 hover:text-gray-900"> About </a> -->
				<h1 class="text-base font-medium text-gray-500 hover:text-gray-900">
					Welcome 
					{#if $authStore.isLoggedIn}
						{$authStore.user.displayName}
						<!-- <img src={$authStore.user.photoURL} alt="user" />
						<img src={$authStore.user.photoURL} alt="user" /> -->
					{/if}
				</h1>
				
			</div>
			<div class="md:flex items-center justify-end md:flex-1 lg:w-0">
				<a class:active={$page.url.pathname === '/login'} sveltekit:prefetch  class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" href="/login">Log In</a>
			</div>
		</div>
	</div>
</div>
</header>