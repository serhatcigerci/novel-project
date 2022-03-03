<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    },
  },
  computed: {
    ...mapState(['user']),
  },
}
</script>

<template lang="pug">
  #app
    .logo
        router-link(to="/")
          img(src="@/assets/mylogo.png" style="width: auto; height: auto; max-width: 100px; max-height: 100px;")
    #nav
      router-link(to="/write") Write
      router-link(to="/profile") Profile
      router-link(to="/login") Login
      router-link(to="/register") Register
      a(@click="doLogout" href="#") Logout
    router-view
</template>

<style lang="scss">
body {
  background: linear-gradient(to right, rgb(90, 90, 90), rgb(180, 173, 173))
}
.logo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  
  img {
    width: 3px;
    height: 3px;
    display: block;
    margin: 0;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 12%;
  display: flex;
  align-items: center;
}

#nav {
  padding: 30px;
  justify-content: flex-start;
  flex: 1;
  text-align: right;
 
  
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 1rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>