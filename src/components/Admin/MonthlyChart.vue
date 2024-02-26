<template>
  <canvas ref="monthlyChart"></canvas>
</template>
<script>
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      chart: null,
      days: [],
    };
  },
  async mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      this.generateMonths();

      const ctx = this.$refs.monthlyChart;

      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.days,
          datasets: [{
            label: 'Antal',
            data: [3, 7, 12, 18, 22, 31, 40, 45, 50, 57, 62, 71, 80, 85, 90, 99, 105, 110, 120, 130, 138, 145, 150, 160, 170, 179, 183, 192, 199],
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
              text: "Försäljningar nuvarande månad"
            }
          }
        },
      });
    },
    generateMonths() {
      const monthNames = [
        'januari', 'februari', 'mars', 'april', 'maj', 'juni',
        'juli', 'augusti', 'september', 'oktober', 'november', 'december'
      ];

      const currentDate = new Date();

      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      const datum = new Date(currentYear, currentMonth + 1, 0).getDate();

      for (let i = 1; i <= datum; i++) {
        this.days.push(`${monthNames[currentMonth]} ${i}`)
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
