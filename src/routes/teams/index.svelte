
<svelte:head>
	<title>Teams</title>
</svelte:head>


<script lang="ts">
	import { goto } from '$app/navigation';
	import authStore from '../../stores/authStore';
	import teamsStore from '../../stores/teamsStore';

	authStore.subscribe(async ({isLoggedIn, firebaseControlled}) => {
		if ( !isLoggedIn && firebaseControlled) {
			await goto('/login');
		}
	});

	// const db = getFirestore(app);
</script>

<section>
	{#if !$teamsStore.teams.length}
		<div class="bg-purple-100 text-center rounded-lg py-5 px-6 text-base text-purple-700 mt-10" role="alert">
			No Team Data available
		</div>
	{:else}
		<div class="flex flex-col mt-10">
			<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
					<div class="overflow-hidden">
						<table class="min-w-full text-center rounded-md overflow-hidden">
							<thead class="border-b bg-gray-800">
								<tr>
									<th colspan="2" scope="col" class="text-sm font-bold text-white px-6 py-4">
									TEAMS
									</th>
								</tr>
							</thead>
							<tbody>
								{#each $teamsStore.teams as { team }}
									<tr class="border-b" data-team-id="{team.team_id}">
										<td class="px-6 py-4 whitespace-nowrap text-gray-900 border-l border-r w-32"><img loading=lazy class="w-20 m-auto" src="{team.team_img}" alt="{team.team_name}"></td>
										<td class="text-sm px-6 py-4 whitespace-nowrap border-r font-bold text-gray-900">
										{team.team_name}
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	{/if}
</section>
