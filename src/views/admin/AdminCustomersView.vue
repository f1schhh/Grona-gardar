<script>
export default {
  data() {
    return {
      customerData: null,
    }
  },
  methods: {
    async getCustomers() {
      try {
        const response = await fetch('/src/database.json');
        const data = await response.json();
        this.customerData = data.users;
      } catch {

      }
    }
  },
  async created() {
    await this.getCustomers();
  }
}
</script>

<template>
  <div class="customers_container">
    <div>
      <h3>Alla kundar</h3>
      <span class="small_text">Lista över alla våra kunder</span>
    </div>
    <table class="orders_table">
      <tr>
        <th>Id </th>
        <th>Email</th>
        <th>Förnamn</th>
        <th>Efternamn</th>
        <th>Telefonnummer</th>
        <th>Adress</th>
        <th>Postnummer</th>
      </tr>
      <tr v-for="items in customerData">
        <td>{{ items.id }}</td>
        <td>{{ items.email }}</td>
        <td>{{ items.first_name }}</td>
        <td>{{ items.last_name }}</td>
        <td>+46{{ items.phone }}</td>
        <td>{{ items.adress }}</td>
        <td>{{ items.zipcode }}</td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
.customers_container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 19px;
  background-color: var(--dark-beige);
}
</style>
