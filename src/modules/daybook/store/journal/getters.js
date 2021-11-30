// export const myGetter = (state) => {
//     return state.myGetter
// }
export const getEntriesByTerm = (state) => (term = '') => {
    if (term.length === 0) return state.entries;
    return state.entries.filter(entry => {
        return entry.text.toLowerCase().includes(term.toLowerCase());
    });
};
export const getEntryById = (state) => (id = '') => {
    const entry = state.entries.find(entry => entry.id === id);
    if (!entry) return null;
    return { ...entry };
};