import { writable } from "svelte/store";

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

export const translateLangToName = (prefLang) => {
  let langString;

  prefLang === "en"
    ? (langString = "English")
    : prefLang === "nl"
    ? (langString = "Nederlands")
    : prefLang === "fr"
    ? (langString = "Français")
    : prefLang === "es"
    ? (langString = "Español")
    : (langString = "en");

  return langString;
};
