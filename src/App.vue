<template>
  <div id="app">
    <header>
      <router-link to="/" class="header-item">掲示板</router-link>
      <router-link to="/login" class="header-item">ログイン</router-link>
      <router-link to="/register" class="header-item">登録</router-link>
    </header>
    <router-view />
  </div>
</template>

<style scoped>
header {
  line-height: 50px;
  background-color: #666;
}
.header-item {
  padding: 10px;
  color: #fff;
  text-decoration: none;
}
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
