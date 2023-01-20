import Chart from 'chart.js/auto'
// import { getAquisitionsByYear } from './api'
// await getAquisitionsByYear();

(async function() {
  const data = [
    { month: 'january', count: 10 },
    { month: 'february', count: 20 },
    { month: 'march', count: 15 },
    { month: 'april', count: 25 },
    { month: 'may', count: 22 },
    { month: 'june', count: 45 },
    { month: 'july', count: 28 },
    { month: 'august', count: 65 },
    { month: 'september', count: 70 },
    { month: 'october', count: 60 },
    { month: 'november', count: 42 },
    { month: 'december', count: 12 }
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      options: {
        animation: true,
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            enabled: true
          }
        }
      },
      data: {
        labels: data.map(row => row.month),
        datasets: [
          {
            label: 'Yearly Expenses',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();


