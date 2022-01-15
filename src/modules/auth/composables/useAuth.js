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
    }

    return {
        checkAuthStatus,
        createUser,
        loginUser,
        authStatus: computed(() => store.getters["auth/currentState"]),
    };
};

export default useAuth;