<template>
    <span class="login100-form-title p-b-41"> Ingresar </span>
    <form
        @submit.prevent="onSubmit"
        class="login100-form validate-form p-b-33 p-t-5"
    >
        <div
            class="wrap-input100 validate-input"
            data-validate="Enter username"
        >
            <input
                v-model="user.email"
                class="input100"
                type="text"
                placeholder="Correo"
                required
            />
            <span class="focus-input100" data-placeholder="&#xe82a;"></span>
        </div>

        <div
            class="wrap-input100 validate-input"
            data-validate="Enter password"
        >
            <input
                v-model="user.password"
                class="input100"
                type="password"
                placeholder="Contraseña"
                required
            />
            <span class="focus-input100" data-placeholder="&#xe80f;"></span>
        </div>

        <div class="container-login100-form-btn m-t-32">
            <button type="submit" class="login100-form-btn">Login</button>
        </div>

        <div class="container-login100-form-btn m-t-32">
            <router-link :to="{ name: 'register' }"
                >¿No tienes cuenta?</router-link
            >
        </div>
    </form>
</template>

<script>
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
import { ref } from "vue";
import useAuth from "../composables/useAuth";
export default {
    setup() {
        const router = useRouter();
        const user = ref({
            email: "",
            password: "",
        });
        const { loginUser } = useAuth();
        return {
            loginUser,
            user,
            onSubmit: async () => {
                const { ok, message } = await loginUser(user.value);
				if(!ok) Swal.fire({ title: 'Error', text: message, icon: 'error' });
				else router.push({ name: 'no-entry' });
            },
        };
    },
};
</script>

<style></style>
