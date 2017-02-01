google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Bronx', 'Brooklyn','Manhattan','Queens','Staten Island'],
        ['Jan',  pricesBronx[0],pricesBrooklyn[0],pricesManhattan[0],pricesQueens[0],pricesStatenIsland[0]],
        ['Feb',  pricesBronx[1],pricesBrooklyn[1],pricesManhattan[1],pricesQueens[1],pricesStatenIsland[1]],
        ['Mar',  pricesBronx[2],pricesBrooklyn[2],pricesManhattan[2],pricesQueens[2],pricesStatenIsland[2]],
        ['Apr',  pricesBronx[3],pricesBrooklyn[3],pricesManhattan[3],pricesQueens[3],pricesStatenIsland[3]],
        ['May',  pricesBronx[4],pricesBrooklyn[4],pricesManhattan[4],pricesQueens[4],pricesStatenIsland[4]],
        ['Jun',  pricesBronx[5],pricesBrooklyn[5],pricesManhattan[5],pricesQueens[5],pricesStatenIsland[5]],
        ['Jul',  pricesBronx[6],pricesBrooklyn[6],pricesManhattan[6],pricesQueens[6],pricesStatenIsland[6]],
        ['Aug',  pricesBronx[7],pricesBrooklyn[7],pricesManhattan[7],pricesQueens[7],pricesStatenIsland[7]],
        ['Sep',  pricesBronx[8],pricesBrooklyn[8],pricesManhattan[8],pricesQueens[8],pricesStatenIsland[8]],
        ['Oct',  pricesBronx[9],pricesBrooklyn[9],pricesManhattan[9],pricesQueens[9],pricesStatenIsland[9]],
        ['Nov',  pricesBronx[10],pricesBrooklyn[10],pricesManhattan[10],pricesQueens[10],pricesStatenIsland[10]],
        ['Dec',  pricesBronx[11],pricesBrooklyn[11],pricesManhattan[11],pricesQueens[11],pricesStatenIsland[11]]

    ]);

    var options = {
        title: 'Variedade do Preço do Imóvel',

        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}