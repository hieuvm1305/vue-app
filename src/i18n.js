import { createI18n } from "vue-i18n";
import en from "./langs/en.json";
import vi from "./langs/vi.json";

export const i18n = createI18n({
  locale: "vi",
  fallbackLocale: "en",
  messages: {
    en: en,
    vi: vi,
  },
});
