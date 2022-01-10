// IsBrowser

// Během buildu Nodejs nemůže využít všechny v prohlížeči dostupné funkce a objekty (např window.document...blabla)
// Utilita v podmínce zajistí, že node bude během generování webu kód ignorovat a poběží až v prohlížeči

// Používat v krajním případě, ideální je použít výchozí react useEffect hook

export const isBrowser = () => typeof window !== "undefined";

// Příklad použití

// if (isBrowser) {
//     ...kód co běží jen v prohlížeči, ale ne na serveru nebo v Nodu během buildu
// }
