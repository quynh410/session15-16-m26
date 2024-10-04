<template>
    <div>
      <div v-for="user in users" :key="user.id" class="user-card">
        <p>Id: {{ user.id }}</p>
        <p>UserName: {{ user.name }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Address: {{ user.address }}</p>
        <button @click="viewDetails(user)">Xem chi tiết</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
    const users = [
    { id: 1, name: 'Nguyễn Văn A', email: 'nva@gmail.com', address: 'Hà Nội' },
    { id: 2, name: 'Nguyễn Văn B', email: 'nvb@gmail.com', address: 'Hà Nam' },
    { id: 3, name: 'Nguyễn Văn C', email: 'nvc@gmail.com', address: 'Ninh Bình' }
  ];
    const viewDetails = (user) => {
    router.push({ name: 'UserDetail', params: { id:user.id } });
  };
  </script>
  
  <style scoped>
  .user-card {
    border: 1px solid #ccc;
    padding: 16px;
    margin: 10px;
    width: 200px;
    display: inline-block;
    vertical-align: top;
  }
  button {
    margin-top: 10px;
    border-radius: 5px;
  }
  </style>
  