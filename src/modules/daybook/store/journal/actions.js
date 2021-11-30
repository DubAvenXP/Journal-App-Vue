import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json');

    if (!data) {
        commit('setEntries', []);
        return;
    }

    const entries = [];
    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntries', entries);
};
export const updateEntry = async ({ commit }, entry) => {
    const {date, text, picture} = entry;
    const payload = { date, text, picture };
    const response = await journalApi.put(`/entries/${entry.id}.json`, payload);
    console.log(response);
    commit('updateEntry', {...entry});
};
export const createEntry = async ({ commit }, entry) => {
    const {date, text, picture} = entry;
    const payload = { date, text, picture };
    const response = await journalApi.post('/entries.json', payload);
    console.log(response);
    commit('addEntry', {...entry, id: response.data.name});
    return response.data.name;
};

export const deleteEntry = async ({ commit }, id) => {
    const response = await journalApi.delete(`/entries/${id}.json`);
    console.log(response);
    commit('deleteEntry', id);
}

