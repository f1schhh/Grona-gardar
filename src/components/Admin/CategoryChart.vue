<template>
  <canvas ref="categoryChart"></canvas>
</template>
<script>
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      chart: null,
      fruits: null,
      vegetables: null,
      season: null,
    };
  },
  async mounted() {
    await this.getCategoryStats();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.categoryChart;

      this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Frukt', 'Grönsaker', 'I säsong'],
          datasets: [{
            label: 'Antal',
            data: [this.fruits, this.vegetables, this.season],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            title: {
              display: true,
              text: "Kategorier"
            }
          }
        },
      });
    },
    async getCategoryStats() {
      try {
        const response = await fetch('/src/database.json');
        const data = await response.json();

        const getFruits = data.products.filter(item => item.category === "Frukt");
        const getVegetables = data.products.filter(item => item.category === "Grönsaker");
        const getSeason = data.products.filter(item => item.season === data.active_season);

        this.fruits = getFruits.length;
        this.vegetables = getVegetables.length;
        this.season = getSeason.length;
      } catch {

      } finally {
        this.renderChart();
      }
    }
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
};
</script>
