import { derived } from "svelte/store";
import { settings } from "../scripts/pageStore";

import translations from "./translations";

export const locales = Object.keys(translations);

export const translate = (locale, key, vars) => {
  if (!key) throw Error("No key provided");
  if (!locale) throw Error(`No translation for ${key}`);

  // Flatten the source object of the translation
  // This way you can access the translation string with a path string
  const flatten_lang_object = (obj, prefix = "") =>
    Object.keys(obj).reduce((acc, k) => {
      const pre = prefix.length ? prefix + "." : "";
      if (typeof obj[k] === "object")
        Object.assign(acc, flatten_lang_object(obj[k], pre + k));
      else acc[pre + k] = obj[k];
      return acc;
    }, {});

  let textObj = translations[locale];
  if (!textObj) throw new Error(`No translation found for ${locale}`);
  let flatTextObj = flatten_lang_object(textObj);
  let newText = flatTextObj[key];

  // Replace any passed in variables in the translation string.
  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    newText = newText.replace(regex, vars[k]);
  });
  return newText;
};

export const t = derived(
  settings,
  ($settings) =>
    (key, vars = {}) =>
      translate($settings.language.preferredLanguage, key, vars)
);
