<template>
  <div class="form">
    <slot name="header"></slot>
    <div class="form-container">
      <p>Kayıt olabilmek için lütfen formu doldurun.</p>
    </div>
    <div class="form-input">
      <div class="form-row">
        <div class="form-column">
          <label for="name" v-bind:class="{ red: showError && !name }"
            >Ad *</label
          >
          <input
            v-model="name"
            type="text"
            name="name"
            placeholder="Adınızı giriniz"
            required
          />

          <div v-if="name" class="form-input-description">
            Bu ad içeriği: {{ name }}
          </div>
        </div>
        <div class="form-column">
          <label for="surname" v-bind:class="{ red: showError && !surname }"
            >Soyad *</label
          >
          <input
            v-model="surname"
            type="text"
            name="surname"
            placeholder="Soyadınızı giriniz"
            required
          />

          <div v-if="surname" class="form-input-description">
            Bu soyad içeriği: {{ surname }}
          </div>
        </div>
      </div>
      <label for="birthday">Doğum Tarihi</label>
      <input
        v-model="birthday"
        type="date"
        name="birthday"
        placeholder="Doğum tarihinizi giriniz"
      />
      <div class="form-input-description">
        Bu doğum tarihi içeriği: {{ birthday }}
      </div>
      <div>
        <label for="email" v-bind:class="{ red: showError && !email }"
          >E-Posta *</label
        >
        <input
          v-model="email"
          type="email"
          name="email"
          placeholder="E-posta adresinizi giriniz"
          required
        />
        <div v-if="email" class="form-input-description">
          Bu e-posta içeriği: {{ email }}
        </div>
      </div>
      <label for="password" v-bind:class="{ red: showError && !password }"
        >Şifre *</label
      >
      <input
        v-model.lazy="password"
        type="password"
        name="password"
        placeholder="Şifrenizi giriniz"
        required
      />
    </div>

    <div class="check">
      <input type="checkbox" id="terms" />
      <label for="terms">Kullanım Şartlarını kabul ediyorum *</label>
    </div>
    <div class="form-button">
      <button v-on:click="handleClick">Kayıt Ol</button>
    </div>
    <div class="error-message" v-if="showError">
      {{ errorMessage }}
    </div>
    <div class="footer">
      <p>© 2025 Vue Blog</p>
      <p>Tüm Hakları Saklıdır</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      email: "",
      password: "",
      name: "",
      surname: "",
      birthday: "",
      errorMessage: "",
      showError: false,
    };
  },
  methods: {
    handleClick() {
      this.showError = true;

      const emptyFields = [];
      if (!this.name) emptyFields.push("Ad");
      if (!this.surname) emptyFields.push("Soyad");
      if (!this.email) emptyFields.push("E-posta");
      if (!this.password) emptyFields.push("Şifre");

      // Dinamik hata mesajı oluştur
      if (emptyFields.length > 0) {
        this.errorMessage = " Lütfen tüm zorunlu alanları doldurun.";
        return;
      }

      this.$emit("submitForm", {
        name: this.name,
        surname: this.surname,
        birthday: this.birthday,
        email: this.email,
        password: this.password,
      });
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
.red {
  color: red;
}
.form {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(50, 174, 108, 0.1);
}

.form-column {
  display: flex;
  flex-direction: column;
}

.form-row {
  display: flex;
  gap: 1rem;
}
.form-container {
  text-align: center;
  margin-bottom: 1rem;
}

.form-input label {
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
.error-message {
  color: red;
  text-align: center;
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
