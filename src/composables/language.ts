import { inject, type InjectionKey, provide, ref, type Ref } from 'vue'

export type Language = 'en' | 'hi'

interface LanguageContext {
  lang: Ref<Language>
  setLang: (language: Language) => void
}

const LanguageSymbol: InjectionKey<LanguageContext> = Symbol('Language')

export function provideLanguage () {
  const lang = ref<Language>('hi')//           default language yaha se set kar sakte ho
  const setLang = (language: Language) => {
    lang.value = language
  }
  provide(LanguageSymbol, { lang, setLang })
}

export function useLanguage () {
  const language = inject(LanguageSymbol)
  if (!language) {
    throw new Error('Language not provided')
  }
  return language
}
