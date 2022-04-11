<script lang='ts'>
	import '../app.css';
	import Header from '$lib/header/Header.svelte';
	import { initializeApp } from 'firebase/app';
	import { onMount } from 'svelte';
	import authStore from '../stores/authStore';
	import teamsStore from '../stores/teamsStore';
	import { getAuth } from 'firebase/auth';
	import { getFirestore, collection, getDocs} from 'firebase/firestore';


	async function getTeams(db, teams) {
		const querySnapshot = await getDocs(collection(db, 'teams'));
		querySnapshot.forEach((doc) => {
			teams.push({
				team_id: doc.id,
				team: doc.data()
			});
		});
		teamsStore.set({
			teams: teams
		});
	}

	onMount(() => {
		const firebaseConfig = {
			apiKey: 'AIzaSyC47HbOthMoL3NaiuhngMhAbjMOiJ7K14E',
			authDomain: 'ipl-490.firebaseapp.com',
			projectId: 'ipl-490',
			storageBucket: 'ipl-490.appspot.com',
			messagingSenderId: '233512990468',
			appId: '1:233512990468:web:f9f52670f5ddb6a81a8251',
			measurementId: 'G-BX5DYP48BT'
		};
		const app = initializeApp(firebaseConfig);
		const db = getFirestore(app);
		const auth = getAuth();
		const teams = [];
		auth.onAuthStateChanged(user => {
			authStore.set({
				isLoggedIn: user != null,
				user,
				firebaseControlled: true
			});

			$: if ( $authStore.isLoggedIn ) {
				getTeams(db, teams);
			} else {
				teamsStore.set({
					teams: []
				});
			}
		});
	});
</script>

<Header />

<main >
	<slot />
</main>
