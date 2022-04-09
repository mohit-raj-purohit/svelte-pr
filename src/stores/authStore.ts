import { writable } from "svelte/store";
import type { UserInfo } from "firebase/app";


const authStore = writable<{
    isLoggedIn: boolean,
    user?: UserInfo,
    firebaseController: boolean,
}>({
    isLoggedIn: false,
    firebaseController: false
});

export default {
    subscribe: authStore.subscribe,
    set: authStore.set
}