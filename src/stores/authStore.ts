import { writable } from "svelte/store";
import type { UserInfo } from "firebase/app";


const authStore = writable<{
    isLoggedIn: boolean,
    user?: UserInfo,
    firebaseControlled: boolean,
}>({
    isLoggedIn: false,
    firebaseControlled: false
});

export default {
    subscribe: authStore.subscribe,
    set: authStore.set
}