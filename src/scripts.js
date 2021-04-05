// let data = {
//  labels: ['United States', 'Russia', 'Italy', 'Germany', 'Other'],
//   datasets: [
//     {
//       data: [25, 20, 55,38, 42],
//       backgroundColor: ['#65b5c2','#23649e','#2e7bad','#63daed','#3993bb',],
//
//     }]
// };
//
// let promisedDeliveryChart = new Chart(document.getElementById('myChart'), {
//   type: 'doughnut',
//   data: data,
//   cutoutPercentage:100,
//   options: {
//   	responsive: true,
//     legend: {
//       display: false
//     }
//   }
//
// });
//let chart2=
// Chart.pluginService.register({
//   // beforeDraw: function(chart) {
//   //   var width = chart.chart.width,
//   //       height = chart.chart.height,
//   //       ctx = chart.chart.ctx;
//   //
//   //   ctx.restore();
//   //   var fontSize = (height / 250).toFixed(2);
//   //   ctx.font = fontSize + "em sans-serif";
//   //   ctx.textBaseline = "middle";
//   //   var text = "84.254 VISITS",
//   //       textX = Math.round((width - ctx.measureText(text).width)/2),
//   //       textY = height / 2;
//   //
//   //   ctx.fillText(text, textX, textY);
//   //   ctx.save();
//   // }
// });


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {

    // The type of chart we want to create
    type: 'doughnut',

    plugins: [
      {beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;

        ctx.restore();
        var fontSize = (height / 150).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        var text = "84.254 VISITS",
            textX = Math.round((width - ctx.measureText(text).width)/2),
            textY = height / 2;

        ctx.fillText(text, textX, textY);
        ctx.save();
      }}
    ],

    // The data for our dataset
    data: {
        labels: ['United States', 'Russia', 'Italy', 'Germany', 'Other'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#3993bb','#65b5c2','#23649e','#2e7bad','#63daed'],
            //borderColor: 'rgb(255, 99, 132)',
          borderWidth:'0',
            data: [24, 16, 10,30, 20]
        }]
    },

    // Configuration options go here
    options: {
        // plugins:{chart2},
      cutoutPercentage:60,
      title: { display: true,
        position: "center",
         text: 'Upcoming Meetings' },

      legend:{
      			display:false,
      		},
           centertext: "123",
      rotation:60,
      animation:{
        animateScale:true
      }
    }
});
