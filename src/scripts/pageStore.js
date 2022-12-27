import { writable } from "svelte/store";

let languages = "en,nl,fr,es";
export const availableLanguages = languages.split(",");

const pageSettings = () => {
  const { subscribe, set, update } = writable({
    isResumeExpanded: false,
    isDarkMode: false,
    isLanguageExpanded: false,
    preferredLanguage: "en",
  });

  return {
    subscribe,
    set,
    update,
    toggleViewMode: (val) =>
      update((self) => {
        self.isDarkMode = val;
        return self;
      }),
  };
};

export const settings = pageSettings();
