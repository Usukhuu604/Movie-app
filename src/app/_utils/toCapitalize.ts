export const toCapitalize = (text: string) => (text = text.slice(0, 1).toUpperCase() + text.slice(1).replace("_", " "));
