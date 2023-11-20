<template>
    <div class="user-profile">
      <img :src="userData.picture" :alt="`${userData.firstName} ${userData.lastName}`" />
      <h2>{{ userData.title }} {{ userData.firstName }} {{ userData.lastName }}</h2>
      <p><strong>Email:</strong> {{ userData.email }}</p>
      <p><strong>Gender:</strong> {{ userData.gender }}</p>
      <p><strong>Date of Birth:</strong> {{ userData.dateOfBirth }}</p>
      <p><strong>Phone:</strong> {{ userData.phone }}</p>
      <!-- Add more fields as needed -->
    </div>
  </template>
  
  <script>
    import { apiCall } from './api';
    
    export default {
        data() {
        return {
            userData: {},
        };
        },
        created() {
        const userId = this.$route.params.id; // Assuming the user ID is passed through the route parameter
        this.fetchUserData(userId);
        },
        methods: {
        fetchUserData(userId) {
            apiCall.get(`/user/${userId}`)
            .then(response => {
                this.userData = response.data; // Assuming the response contains the user data
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
        },
        },
    };
  </script>
  
  <style scoped>
  .user-profile {
    text-align: center;
    padding: 20px;
  }
  
  .user-profile img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  </style>
  