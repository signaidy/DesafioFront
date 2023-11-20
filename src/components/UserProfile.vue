<template>
  <div class="user-profile">
    <div class="user-card">
      <div class="user-info">
        <div class="user-details">
          <div class="name">
            <img
              :src="userData.picture"
              :alt="`${userData.firstName} ${userData.lastName}`"
              class="profile-pic"
            />
            <h2>
              {{ userData.title }} {{ userData.firstName }}
              {{ userData.lastName }}
            </h2>
          </div>
          <div class="name-button">
            <button @click="goBack">Go Back</button>
          </div>
        </div>
      </div>
      <div class="user-card additional-details">
        <div class="other-info">
          <p><strong>Email:</strong> {{ userData.email }}</p>
          <p><strong>Gender:</strong> {{ userData.gender }}</p>
          <p>
            <strong>Date of Birth:</strong>
            {{ formatDate(userData.dateOfBirth) }}
          </p>
          <p><strong>Phone:</strong> {{ userData.phone }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiCall } from "./api";

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
      apiCall
        .get(`/user/${userId}`)
        .then((response) => {
          this.userData = response.data; // Assuming the response contains the user data
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    goBack() {
      this.$router.push("/"); // Navigate to the home route ('/')
    },
  },
};
</script>

<style scoped>
.user-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  background-color: #f9f9f9;
  text-align: left;
}

.profile-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}

.user-details {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.name-button {
  display: flex;
  align-items: center;
}

.name {
  display: flex;
  align-items: center;
}

.back-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
}

.additional-details {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ccc;
  text-align: left;
}

@media screen and (min-width: 768px) {
  .profile-pic {
    margin-left: 25px;
  }
  .name-button {
    margin-right: 20px;
  }
}
</style>
