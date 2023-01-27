const express = require('express');
const router = express.Router();
const db = require('../../models');
const moment = require('moment');
const Chart = require('chart.js');

router.get('/chart', async (req, res) => {
    try {
        // Get current month
        const currentMonth = moment().format('MM');

        // Get payments data for current month
        const payments = await db.query(`SELECT amount_id FROM Payments WHERE MONTH(payment_date) = ${currentMonth}`);

        // Create bar chart using Chart.js
        const ctx = document.getElementById('chart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Payments'],
                datasets: [{
                    label: 'Amounts',
                    data: payments.map(p => p.amount_id),
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
        res.render('chart', { chart });
    } catch (err) {
        console.log(err);
        res.send('Error retrieving data for chart.');
    }
});

module.exports = router;