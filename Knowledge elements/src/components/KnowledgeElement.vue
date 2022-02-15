<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTop(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject: ['selectTop'],
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
};
</script>