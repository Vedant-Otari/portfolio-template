import { appConfig } from './config';

export function applyTheme() {
  const normalized = appConfig.theme.toLowerCase();
  const value = ['light', 'dark', 'system'].includes(normalized) ? normalized : 'light';
  document.documentElement.setAttribute('data-theme', value);
}
