const express = require("express");
const router = express.Router();
const moment = require("moment");
const Payments = require("../../models/paymentsDue");

router.get("/", (req, res) => {
  Payments.findAll()
    .then(payments => {
      let data = {};
      payments.forEach(payment => {
        let month = moment(payment.payment_date).format("MMMM");
        if (!data[month]) {
          data[month] = payment.amount;
        } else {
          data[month] += payment.amount;
        }
      });
      res.render("chart", { data });
    })
    .catch(err => console.log(err));
});

module.exports = router;












// const express = require('express');
// const router = express.Router();
// const Payments = require('../../models/paymentsDue');
// const moment = require('moment');
// const sequelize = require('../../config/connection');


// router.get('/chart', (req, res) => {
//     Payments.findAll({
//         attributes: ['amount', [sequelize.fn('date_trunc', 'month', sequelize.col('payment_date')), 'month']],
//         group: ['month'],
//     })
//     .then(data => {
//         const chartData = {
//             labels: [],
//             datasets: [{
//                 label: 'Amount',
//                 data: []
//             }]
//         };
//         data.forEach(row => {
//             chartData.labels.push(moment(row.month).format('MMM YYYY'));
//             chartData.datasets[0].data.push(row.amount);
//         });
//         res.render('chart', { chartData });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json({ message: 'Error retrieving data' });
//     });
// });

// module.exports = router;










// const express = require('express');
// const router = express.Router();
// const db = require('../../models');
// const moment = require('moment');
// const Chart = require('chart.js');

// router.get('/chart', async (req, res) => {
//     try {
//         // Get current month
//         const currentMonth = moment().format('MM');

//         // Get payments data for current month
//         const payments = await db.query(`SELECT amount_id FROM Payments WHERE MONTH(payment_date) = ${currentMonth}`);

//         // Create bar chart using Chart.js
//         const ctx = document.getElementById('chart').getContext('2d');
//         const chart = new Chart(ctx, {
//             type: 'bar',
//             data: {
//                 labels: ['Payments'],
//                 datasets: [{
//                     label: 'Amounts',
//                     data: payments.map(p => p.amount_id),
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1
//                 }]
//             },
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true
//                     }
//                 }
//             }
//         });
//         res.render('chart', { chart });
//     } catch (err) {
//         console.log(err);
//         res.send('Error retrieving data for chart.');
//     }
// });

// module.exports = router;