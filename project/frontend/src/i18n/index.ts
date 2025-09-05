// Internationalization configuration
import { en } from './en';
import { tr } from './tr';

export type Language = 'en' | 'tr';

export interface Translations {
  nav: {
    home: string;
    users: string;
    posts: string;
    language: string;
  };
  home: {
    title: string;
    subtitle: string;
    description: string;
    features: {
      title: string;
      userManagement: {
        title: string;
        description: string;
      };
      postManagement: {
        title: string;
        description: string;
      };
      realTime: {
        title: string;
        description: string;
      };
      responsive: {
        title: string;
        description: string;
      };
    };
    getStarted: string;
    apiDocs: string;
    techStack: {
      title: string;
      frontend: string;
      backend: string;
    };
  };
  users: {
    title: string;
    addUser: string;
    editUser: string;
    deleteUser: string;
    confirmDelete: string;
    noUsers: string;
    viewPosts: string;
    form: {
      name: string;
      username: string;
      email: string;
      phone: string;
      website: string;
      nameRequired: string;
      usernameRequired: string;
      emailRequired: string;
      emailInvalid: string;
    };
  };
  posts: {
    title: string;
    addPost: string;
    editPost: string;
    deletePost: string;
    confirmDelete: string;
    noPosts: string;
    byUser: string;
    allPosts: string;
    form: {
      title: string;
      body: string;
      user: string;
      titleRequired: string;
      userRequired: string;
      selectUser: string;
    };
  };
  common: {
    save: string;
    cancel: string;
    edit: string;
    delete: string;
    close: string;
    loading: string;
    error: string;
    success: string;
    confirm: string;
    yes: string;
    no: string;
    search: string;
    filter: string;
    actions: string;
    retry: string;
  };
  messages: {
    userCreated: string;
    userUpdated: string;
    userDeleted: string;
    postCreated: string;
    postUpdated: string;
    postDeleted: string;
    errorOccurred: string;
    networkError: string;
    validationError: string;
  };
}

export const translations: Record<Language, Translations> = {
  en,
  tr,
};

// Get browser language or default to English
export const getDefaultLanguage = (): Language => {
  const browserLang = navigator.language.split('-')[0] as Language;
  return translations[browserLang] ? browserLang : 'en';
};

// Get saved language from localStorage or use default
export const getSavedLanguage = (): Language => {
  const saved = localStorage.getItem('language') as Language;
  return saved && translations[saved] ? saved : getDefaultLanguage();
};

// Save language to localStorage
export const saveLanguage = (lang: Language): void => {
  localStorage.setItem('language', lang);
};

// Get translation function
export const getTranslations = (lang: Language): Translations => {
  return translations[lang] || translations.en;
};
