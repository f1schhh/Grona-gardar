<script>
export default {
  data() {
    return {
      orderHistoryData: null,
    }
  },
  props: {
    amount: {
      type: Number
    }
  },
  methods: {
    async getOrders() {
      try {
        const response = await fetch('/src/database.json');
        const data = await response.json();

        if (this.amount > 7) {
          this.orderHistoryData = data.order_history;
        } else {
          this.orderHistoryData = data.order_history.slice(0, 7);
        }
      } catch {

      }
    }
  },
  async created() {
    await this.getOrders();
  },

}
</script>

<template>
  <div style="overflow-x: auto;">
    <table class="orders_table">
      <tr>
        <th>Order id</th>
        <th>Kund</th>
        <th>Pris</th>
        <th>Status</th>
      </tr>
      <tr v-for="items in orderHistoryData">
        <td>{{ items.id }}</td>
        <td>{{ items.delivery_name }}</td>
        <td>{{ items.cost }} SEK</td>
        <td v-if="items.order_status === 'ongoing'">Pågående</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.orders_container {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 1rem;
  border-radius: 19px;
  background-color: var(--dark-beige);
}
</style>
