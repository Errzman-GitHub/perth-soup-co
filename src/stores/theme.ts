import { writable } from 'svelte/store';

let defaultTheme = 'light';

// Check if we're in the browser environment before accessing `localStorage`
const getSavedTheme = () => {
  if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
  return defaultTheme;
};

export const theme = writable(getSavedTheme());
