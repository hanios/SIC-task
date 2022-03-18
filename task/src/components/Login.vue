<template>
  <div>
    <img class="logo" src="../assets/logo2.png" />
    <h2>Login</h2>
    <div class="register">
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />

      <button v-on:click="login">Login</button>
      <p>
        <router-link to="/signup"
          >Didnt have an account? Click to sign up</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      console.log(35, result);
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      }
    },
  },

  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style scoped>
.logo {
  height: 40vh;
  widows: 40vw;
}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid grey;
}

.register button {
  width: 325px;
  height: 40px;
  border: 1px solid lightgrey;
  background: rgb(0, 62, 143);
  color: white;
  cursor: pointer;
}
</style>
