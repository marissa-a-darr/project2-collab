import Chart from 'chart.js/auto'


fetch('/api/payments')
  .then(response => response.json())
  .then(data => {
    let labels = [];
    let expenses = [];
    data.forEach(expense => {
      labels.push(expense.month);
      expenses.push(expense.amount);
    });
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Expenses',
                data: expenses,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
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
  });






















import Chart from 'chart.js/auto'
const express = require('express');
const router = express.Router();
const Sales = require('../models/expenses');


router.get('/chart', (req, res) => {
  Sales.findAll().then(sales => {
    // map the sales data to the format required by Chart.js
    const data = sales.map(sale => ({
      x: sale.month,
      y: sale.value
    }));

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.x),
            datasets: [{
                label: 'Sales',
                data: data.map(d => d.y),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
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
    res.json({ chart });
  });
});








import Chart from 'chart.js/auto'
import { getDimensions } from './api'

(async function() {
  const data = await getDimensions();

  new Chart(
    document.getElementById('dimensions'),
    {
      type: 'bubble',
      options: {
        aspectRatio: 1,
        scales: {
            x: {
              max: 500,
              ticks: {
                callback: value => `${value / 100} m`
              }
            },
            y: {
              max: 500,
              ticks: {
                callback: value => `${value / 100} m`
              }
            }
          }
      },
      data: {
        labels: data.map(x => x.year),
        datasets: [
          {
            label: 'Dimensions',
            data: data.map(row => ({
              x: row.width,
              y: row.height,
              r: row.count
            }))
          }
        ]
      }
    }
  );
})();