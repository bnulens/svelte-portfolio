import { writable } from "svelte/store";

let languages = "en,nl,fr,es";
export const allLanguages = languages.split(",");

const pageSettings = () => {
  const { subscribe, set, update } = writable({
    isResumeExpanded: false,
    isDarkMode: false,
    language: {
      preferredLanguage: "en",
      isSelectorExpanded: false,
    },
  });

  return {
    subscribe,
    set,
    update,

    toggleLangSelector: (val) =>
      update((self) => {
        self.language.isSelectorExpanded = val;
        return self;
      }),
    toggleResume: (val) =>
      update((self) => {
        self.isResumeExpanded = val;
        return self;
      }),
    toggleViewMode: (val) =>
      update((self) => {
        self.isDarkMode = val;
        return self;
      }),
    selectLanguage: (val) =>
      update((self) => {
        self.language.preferredLanguage = val;
        return self;
      }),
  };
};

export const settings = pageSettings();
