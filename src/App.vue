<template>
  <formOne v-bind:title="title" v-on:submitForm="submitForm">
    <template #header>
      <h2>Vue Form Kullanımı</h2>
    </template>
  </formOne>
</template>

<script>
import Form from "./components/Form.vue";

export default {
  components: {
    formOne: Form,
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
