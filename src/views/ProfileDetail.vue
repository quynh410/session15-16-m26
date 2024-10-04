<template>
  <div>
    <p>Profile ID : {{ id }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const { id } = route.params;
</script>

<style></style>
