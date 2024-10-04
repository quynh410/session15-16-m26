<template>
  <br />
  <div v-if="user">
    <h1>Thong tin chi tiet</h1>
    <p><strong>Id:</strong> {{ user.id }}</p>
    <p><strong>UserName:</strong> {{ user.name }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <p><strong>Address:</strong> {{ user.address }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const { id } = route.params;
const users = [
  { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
  { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
  { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" },
];

const user = users.find((u) => u.id === parseInt(id));
</script>

<style scoped>
h1 {
  color: #333;
  margin-bottom: 16px;
}
p {
  margin: 8px 0;
  font-size: 16px;
}
strong {
  font-weight: bold;
}
div {
  border: 1px solid #ddd;
  padding: 20px;
  max-width: 400px;
}
</style>
