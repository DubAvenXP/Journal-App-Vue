// export const myMutation = (state) => {
//     state.myProperty = 'myValue'
// }

export const setEntries = (state, entries) => {
    state.entries = [...state.entries, ...entries];
    state.isLoading = false;
};

export const updateEntry = (state, entry) => {

    const index = state.entries.findIndex(e => e.id === entry.id);
    state.entries[index] = entry;

};

export const addEntry = (state, entry) => {
    state.entries = [entry, ...state.entries];
};

export const deleteEntry = (state, id) => {
    const index = state.entries.findIndex(e => e.id === id);
    state.entries.splice(index, 1);
}