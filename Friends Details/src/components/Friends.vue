<template>

<li>
  <h2>{{ name }} {{isFavorite ? '(Favorite)' : ''}}</h2>
  <button @click="toggleFav">Toggle Fav</button>
   <button @click="toggledet">Show Details</button>

<ul v-if="detailvisible">
  <li><strong>Phone:</strong> {{ phoneNumber }} </li>
  <li><strong>Email:</strong> {{ emailAddress }} </li>
</ul>
<button @click="$emit('delete', id)">Delete</button>
</li>
  </template>

  <script>

  export default {
   
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
     
    },
  },
  emits: ['toggle-fav', 'delete'],
   data() {
     return{
       detailvisible:false
       };
      },
     methods: {
       toggledet() {
         this.detailvisible = !this.detailvisible;
        
       },
      toggleFav() {
        this.$emit('toggle-fav', this.id);
      },
      
     },
  };
  </script>
  
    
  
