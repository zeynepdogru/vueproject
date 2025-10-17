<template>
  <h1>{{ title }}</h1>
  <form class="form">
    <slot name="header"></slot>
    <div class="form-container">
      <p>Giriş yapabilmek için lütfen formu doldurun.</p>
    </div>
    <div class="form-input">
      <label for="email">E-Posta</label>
      <input
        v-model="email"
        type="email"
        name="email"
        placeholder="E-posta adresinizi giriniz"
        required
      />
      <div class="form-input-description">Bu e-posta içeriği: {{ email }}</div>

      <label for="password">Şifre</label>
      <input
        v-model.lazy="password"
        type="password"
        name="password"
        placeholder="Şifrenizi giriniz"
        required
      />
    </div>
    <div class="form-input-description">Bu şifre içeriği: {{ password }}</div>

    <div class="form-button">
      <button type="submit">Giriş Yap</button>
    </div>
    <p>
      Hesap oluşturmak için
      <router-link to="/register">buraya tıklayın</router-link>.
    </p>
    <div class="footer">
      <p>© 2025 Vue Blog</p>
      <p>Tüm Hakları Saklıdır</p>
    </div>
  </form>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleClick() {
      this.$emit("submitForm", { email: this.email, password: this.password });
    },
  },
};
</script>
<style scoped>
h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #35495e;
}

:slotted(h2) {
  text-align: center;
  margin-bottom: 1rem;
  color: #42b983;
}

.form {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(50, 174, 108, 0.1);
}
.form-container {
  text-align: center;
  margin-bottom: 1rem;
}

.form-input label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-input input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}
.form-input-description {
  font-style: italic;
  color: #666;
  margin-bottom: 0.5rem;
}
.form-button button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin: 2px auto;
  display: block;
  width: 100%;
}
.footer {
  text-align: center;
  margin-top: 1rem;
  color: #888;
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
