import { writable } from "svelte/store";


const teamsStore = writable<{
    teams?: any
}>({
    teams: []
});

export default {
    subscribe: teamsStore.subscribe,
    set: teamsStore.set
}