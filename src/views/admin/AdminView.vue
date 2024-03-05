<script>
import CategoryChart from '../../components/Admin/CategoryChart.vue';
import MonthlyChart from '../../components/Admin/MonthlyChart.vue';
import OrderHistory from '../../components/Admin/OrderHistory.vue';

export default {
  data() {
    return {
      chart: null,
      fruits: null,
      vegetables: null,
      season: null,
    };
  },
  components: {
    CategoryChart,
    MonthlyChart,
    OrderHistory
  }
}
</script>
<template>
  <div class="admin_container">
    <nav class="admin_nav">
      <ul class="nav_list">
        <li>
          <router-link to="/admin"
            :class="{ active_admin: $route.path === '/admin' || $route.path === '/admin/' }">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/admin/orders"
            :class="{ active_admin: $route.path === '/admin/orders' || $route.path === '/admin/orders/' }">Ordrar</router-link>
        </li>
        <li>
          <router-link to="/admin/customers"
            :class="{ active_admin: $route.path === '/admin/customers' || $route.path === '/admin/customers/' }">Kunder</router-link>
        </li>
      </ul>
    </nav>
    <div v-if="$route.path === '/admin/' || $route.path === '/admin'" class="default_gap">
      <div class="stats_container">
        <div class="dashboard_stats">
          <div class="monthly_stats_left">
            <div>
              <h3>Dashboard</h3>
              <span class="small_text">Överblick utav nuvarande månad</span>
            </div>
            <div class="small_stats">
              <span class="dashboard_title">3000 SEK</span>
              <span class="small_text">Nuvarande månads intjänade pengar</span>
            </div>

            <div class="small_stats">
              <span class="dashboard_title">82</span>
              <span class="small_text">Nuvarande månads försäljning</span>
            </div>
            <div class="small_stats">
              <span class="dashboard_title">5</span>
              <span class="small_text">Nya kunder</span>
            </div>
          </div>
          <div class="monthly_stats_right">
            <MonthlyChart />
          </div>
        </div>
        <div class="category_stats">
          <CategoryChart />
        </div>
      </div>

      <div class="stats_container">
        <div class="dashboard_stats">
          <div class="last_orders">
            <div class="space-between">
              <div>
                <h3>Order status</h3>
                <span class="small_text">Överblick utav senaste ordrar</span>
              </div>
              <router-link to="/admin/orders" class="go-to"><i class="bi bi-arrow-right-circle-fill"></i></router-link>
            </div>
            <OrderHistory :amount="5" />
          </div>
        </div>
        <div class="category_stats">
          <div>
            <h3>Senaste aktivitet</h3>
          </div>
          <br>
          <ul class="recent_activity_list">
            <li>
              <div class="small_text activity_timestamp"> 42 minuter sedan </div>
              <div class="border_line">
                <i class="activity_item bi bi-heart-fill"></i>
              </div>
              <div>
                <h4>Gillar</h4>
                <div class="small_text">
                  <b>Adam Fischer</b>
                  gillar Äpple
                </div>
              </div>
            </li>
            <li>
              <div class="small_text activity_timestamp"> 2 dagar sedan </div>
              <div class="border_line">
                <i class="activity_item bi bi-heart-fill"></i>
              </div>
              <div>
                <h4>Gillar</h4>
                <div class="small_text">
                  <b>Adam</b>
                  gillar Äpple
                </div>
              </div>
            </li>
            <li>
              <div class="small_text activity_timestamp"> 1 vecka sedan </div>
              <div class="border_line">
                <i class="activity_item bi bi-cart-fill"></i>
              </div>
              <div>
                <h4>Gillar</h4>
                <div class="small_text">
                  <b>Anna</b>
                  har köpt ett Äpple
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <RouterView v-else />

  </div>
</template>
<style scoped>
.default_gap {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.dashboard_title {
  font-size: 1.2rem;
  font-weight: bold;
}

.go-to {
  font-size: 1.25rem;
}

.go-to:hover {
  color: #1e2215;
  transition: 0.3s;
}

.small_text {
  font-size: 0.8rem;
  color: grey;
}

.admin_container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 1rem;
}

.admin_nav {
  padding: 1rem;
  border-radius: 19px;
  background-color: var(--dark-beige);
}

.admin_nav .nav_list {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.admin_nav .nav_list li a:hover {
  text-decoration: underline;
}

.dashboard_stats {
  width: calc(70% - 1rem);
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 1rem;
  border-radius: 19px;
  background-color: var(--dark-beige);
}

.stats_container {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}


.monthly_stats_left {
  width: calc(20% - 2rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.small_stats {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.monthly_stats_right {
  width: calc(80% - 2rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.category_stats {
  width: calc(30% - 1rem);
  padding: 1rem;
  border-radius: 19px;
  background-color: var(--dark-beige);
}


.recent_activity_list {
  display: flex;
  flex-direction: column;
}

.recent_activity_list li {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.activity_timestamp {
  min-width: 102px;
}

.border_line {
  border-left: 2px solid #c8bdaf;
  position: relative;
  height: 50px;
}

.border_line .activity_item {
  position: absolute;
  right: -10px;
  top: -2px;
  font-size: 1.3rem;
}

@media screen and (max-width: 700px) {
  .dashboard_stats{
    flex-direction: column;
  }
  .monthly_stats_left{
    width: 100%;
  }
  .monthly_stats_right{
    width: 100%;
  }
  .category_stats{
    display: flex;
    justify-content: center;
  }
  .category_stats{
    flex-direction: column;
    gap: 1rem;
  }
}

@media screen and (max-width: 950px) {
  .stats_container {
    flex-direction: column;
    padding-right: 2rem;
  }

  .dashboard_stats {
    width: 100%;
  }

  .category_stats {
    width: 100%;
  }
}
</style>
