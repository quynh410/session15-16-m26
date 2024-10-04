<template>
  <nav>
    <router-link to="/" active-class="active-link">Home</router-link>
    <router-link to="/contact" active-class="active-link">Contact</router-link>
    <router-link to="/dashboard" active-class="active-link">DashBoard</router-link>
    <router-link to="/account" active-class="active-link">Account</router-link>
    <router-link to="/product" active-class="active-link">Product</router-link>

  </nav>
  <nav>
    <button @click="goToHome">Home</button>
    <button @click="goToContact">Contact</button>
  </nav>
  <router-view></router-view>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goToHome = () => {
  // dieu huong qua trang home
  router.push("/");
};

const goToContact = () => {
  // dieu huong qua trang contact
  router.push("/contact");
};
// setTimeout(() => {
//   router.push({ name: "contact" });
// });
</script>
<style scoped>
nav {
  display: flex;
  gap: 20px;
}
.active-link{
  color: #fff;
  background-color: blue;
  width: 70px;
  height: 30px;
  border-radius: 5px;
  font-weight: 700
}
</style>




