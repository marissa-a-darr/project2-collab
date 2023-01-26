
var ctx = document.getElementById('expenses-chart').getContext('2d');
      var chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map(d => d.month),
          datasets: [{
            label: 'Expenses',
            data: data.map(d => d.amount),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      
console.log(data);