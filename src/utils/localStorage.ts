export const getLocalStorage = <T, >(key: string, init: T): T => {
    const result = localStorage.getItem(key);
    if (result) {
        const json = JSON.parse(result);
        if (json && typeof init === typeof json) {
            return json;
        }
    }
    return init;
};
export const setLocalStorage = (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
};
