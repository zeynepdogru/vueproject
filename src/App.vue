<template>
  <!-- <formLogin v-bind:title="title" v-on:submitForm="submitForm">
      <template #header>
        <h2>Vue Form Kullanımı</h2>
      </template>
    </formLogin>
    <formRegister v-bind:title="title" v-on:submitForm="submitForm"></formRegister> -->

  <!-- <router-view
    v-if-bind:is="Form"
    v-bind:title="title"
    v-on:submitForm="submitForm"
  >
  </router-view> -->
  <router-view v-slot="{ Component }">
    <component
      :is="Component"
      v-bind:title="title"
      v-on:submitForm="submitForm"
    >
      <template #header>
        <h2>Vue Form Kullanımı</h2>
      </template>
    </component>
  </router-view>
</template>

<script>
import Form from "./components/Form.vue";
import RegisterForm from "./components/RegisterForm.vue";

export default {
  components: {
    formLogin: Form,
    formRegister: RegisterForm,
  },

  data() {
    return {
      //props ile başlık gönderme
      title: "Giriş Formu",
    };
  },
  methods: {
    submitForm(formData) {
      alert(`E-posta: ${formData.email} Şifre: ${formData.password}`);
    },
  },
};
</script>

<style scoped></style>
