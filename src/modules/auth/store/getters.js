export const currentState = (state) => {
    return state.status;
};
export const username = (state) => {
    return state.user?.name || '';
};

// export const getEntryById = (state) => (id = '') => {
//     const entry = state.entries.find(entry => entry.id === id);
//     if (!entry) return null;
//     return { ...entry };
// };