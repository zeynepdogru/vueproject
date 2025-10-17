import { createRouter, createWebHistory } from "vue-router";
import Form from "./components/Form.vue";
import RegisterForm from "./components/RegisterForm.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Form,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterForm,
    },
  ],
});

export default router;
