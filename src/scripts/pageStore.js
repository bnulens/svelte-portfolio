import { writable } from "svelte/store";

export const toggleResume = writable(false);
export const toggleViewMode = writable(false);
export const toggleLanguage = writable("en");
