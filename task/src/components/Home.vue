<template>
  <div>
    <h2>Homepage</h2>
    <h4>Welcome back, {{ name }}</h4>

    <div style="margin-left: 20px">
      <tr>
        <router-link to="/cat"> Cat </router-link>
      </tr>
      <tr>
        <router-link to="/makeup"> MakeUp </router-link>
      </tr>
    </div>

    <button class="logout-btn" v-on:click="logout">logout</button>
    <button class="logout-btn" style="margin-top: 40px" v-on:click="listings">
      List of Registered User
    </button>

    <div class="lists">
      <h5 v-for="(item, index) in listing" :key="index">
        {{ item.name }}
      </h5>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",

  data() {
    return {
      name: "",
      listing: "",
      pagination: [{ name: "cat" }, { name: "makeup" }],
    };
  },

  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("Login");
    },
    async listings() {
      let result = await axios.get("http://localhost:3000/users");
      console.log(34, result.data);
      this.listing = result.data;
    },
  },

  async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style scoped>
.logout-btn {
  position: fixed;
  right: 20px;
  top: 20px;
  width: 200px;
  height: 30px;
  border: 1px solid lightgrey;
  background: rgb(0, 62, 143);
  color: white;
  cursor: pointer;
}

.lists {
  position: fixed;
  right: 20px;
  top: 120px;

  width: 10vw;
}

.cat {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
}

.page {
  border: 2px solid red;
  display: inline-block;
  border: 2px dotted green;
  color: blue;
}
</style>
