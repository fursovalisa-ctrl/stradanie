export interface I18nConfig {
  [lang: string]: {
    [namespace: string]: {
      [key: string]: string;
    };
  };
}
