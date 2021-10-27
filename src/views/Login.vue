<template>
  <div>
    <h2>ログイン</h2>
    <label for="email">Email:</label>
    <input id="email" type="text" v-model="email">
    <br>
    <label for="password">Password:</label>
    <input id="password" type="password" v-model="password">
    <br><br>
    <button @click="login">送信</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
      login() {
          alert("login!!!")
      }
  }
}
</script>


