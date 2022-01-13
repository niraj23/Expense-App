import Chart from 'chart.js/auto';

export default function build(config) {
  const {
    ctx, chartType, labels, data, radius, backgroundColor,
  } = config;
  Chart.defaults.color = "orange";

  return new Chart(ctx, {
    
    type: chartType,
    radius,
    responsive: true,
    maintainAspectRatio: false,
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor,
          hoverOffset: 4,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: `Amounts in USD`,
          color: 'white',
          font: {
            size: 24,
          },
          labels: {
            color: 'white',
          },
        },
      },
    },
  });
}
