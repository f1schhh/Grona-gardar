<script>
import OrderHistory from '../../components/Admin/OrderHistory.vue';
export default {
  components: {
    OrderHistory
  }
}
</script>
<template>
  <div class="orders_container">
    <div class="last_orders">
      <div>
        <h3>Alla ordrar</h3>
        <span class="small_text">Överblick</span>
      </div>
      <OrderHistory :amount="50" />
    </div>
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
