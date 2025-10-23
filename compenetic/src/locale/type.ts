/**
 * Generic type for component locales
 */
export type ComponentLocale<T> = {
  [K in keyof T]: T[K];
};

/**
 * Combined locale type for all components
 */
export type Locale = ComponentLocale<unknown>;
