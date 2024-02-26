<script>
</script>
<template>
  <div class="orders_container">
    <div class="last_orders">
      <div>
        <h3>Alla ordrar</h3>
        <span class="small_text">Överblick</span>
      </div>
      <table class="orders_table">
        <tr>
          <th>Order id</th>
          <th>Kund</th>
          <th>Pris</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>3399393</td>
          <td>Adam Fischer</td>
          <td>199 SEK</td>
          <td>Pågående</td>
        </tr>
        <tr>
          <td>3399393</td>
          <td>Adam Fischer</td>
          <td>199 SEK</td>
          <td>Pågående</td>
        </tr>
      </table>
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
