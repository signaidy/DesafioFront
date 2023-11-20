<template>
  <div class="container">
    <div class="search-card">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Buscar por nombre"
      />
    </div>

    <div v-for="user in filteredUsers" :key="user.id" class="user-card">
      <div class="card">
        <div class="user-info">
          <img :src="user.picture" alt="Icono de usuario" />
          <p>{{ user.firstName }} {{ user.lastName }}</p>
          <router-link :to="'/perfil/' + user.id">Ver perfil</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiCall } from "./api";

export default {
  name: "AllCards",
  data() {
    return {
      searchQuery: "", // To store the user's search query
      users: [], // To store the list of users retrieved from the API
    };
  },
  computed: {
    filteredUsers() {
      // Logic to filter users based on the search query
      return this.users.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        return fullName.includes(this.searchQuery.toLowerCase());
      });
    },
  },
  created() {
    // API call to fetch the list of users when the component is created
    apiCall
      .get("/user")
      .then((response) => {
        // Store the retrieved user data in the 'users' data property
        this.users = response.data.data;
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: white;
  padding: 20px;
}

.search-card {
  width: 100%;
  margin: 20px;
}

.user-card {
  flex: 0 0 100%; /* Set initial width to full width */
}

.card {
  width: 100%;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.user-info {
  display: flex;
  align-items: center;
}

.user-info img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

/* Media query for larger screens (desktops) */
@media screen and (min-width: 768px) {
  .user-card {
    flex: 0 0 calc(33.33% - 20px); /* Set width for 3 cards per row with margins */
  }
}
</style>
