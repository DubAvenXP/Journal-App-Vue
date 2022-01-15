import { computed } from "vue";

const { useStore } = require("vuex");

const useAuth = () => {
    const store = useStore();

    const createUser = async (user) => {
        const response = await store.dispatch("auth/createUser", user);
        return response;
    };
    const loginUser = async (user) => {
        const response = await store.dispatch("auth/signInUser", user);
        return response;
    };

    const checkAuthStatus = async () => {
        const response = await store.dispatch("auth/checkAuthentication");
        return response;
    };

    const logout = () => {
        store.commit("auth/logout");
        store.commit("journal/clearEntries");
        
        //LImpiar entradas
    };

    return {
        checkAuthStatus,
        createUser,
        loginUser,
        logout,
        authStatus: computed(() => store.getters["auth/currentState"]),
        username: computed(() => store.getters["auth/username"]),
    };
};

export default useAuth;