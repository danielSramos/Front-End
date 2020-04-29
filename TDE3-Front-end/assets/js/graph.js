var ctx = document.getElementsByName('line-chart');

var chartGraph = new Chart(ctx,{
    type: 'line',
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [{
            label:"Câmeras funcionando - 2020",
            data: [5,10,5,14,1,8],
            borderWidth: 6,
            borderColor: 'rgba(77,166,253,0.85)',
            backgroundColor: 'transparent'
        }]
    } 
});


//Função do gráfico de pizza.
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawPizza);

function drawPizza() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ]);

  var options = {
    title: 'My Daily Activities'
  };

  var chart = new google.visualization.PieChart(document.getElementById('pizzaGraph'));

  chart.draw(data, options);
}
//Fim gráfico pizza.

//Gráfico de pizza 3D
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawPizza3d);
function drawPizza3d() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ]);

  var options = {
    title: 'My Daily Activities',
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('pizza3d'));
  chart.draw(data, options);
}
//Fim gráfico pizza 3D

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Uso');

      data.addRows([
        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
        [24, 61], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
        [30, 55]
      ]);

      var options = {
        hAxis: {
          title: 'Dia'
        },
        vAxis: {
          title: 'KW'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }