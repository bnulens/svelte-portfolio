import { writable } from "svelte/store";

export const pageSettings = writable({
  toggleResume: false,
  toggleViewMode: false,
  preferredLanguage: "en",
});
