google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Bronx', 'Brooklyn','Manhattan','Queens','Staten Island'],
        ['Jan',  crimesBronx[0],crimesBrooklyn[0],crimesManhattan[0],crimesQueens[0],crimesStatenIsland[0]],
        ['Feb',  crimesBronx[1],crimesBrooklyn[1],crimesManhattan[1],crimesQueens[1],crimesStatenIsland[1]],
        ['Mar',  crimesBronx[2],crimesBrooklyn[2],crimesManhattan[2],crimesQueens[2],crimesStatenIsland[2]],
        ['Apr',  crimesBronx[3],crimesBrooklyn[3],crimesManhattan[3],crimesQueens[3],crimesStatenIsland[3]],
        ['May',  crimesBronx[4],crimesBrooklyn[4],crimesManhattan[4],crimesQueens[4],crimesStatenIsland[4]],
        ['Jun',  crimesBronx[5],crimesBrooklyn[5],crimesManhattan[5],crimesQueens[5],crimesStatenIsland[5]],
        ['Jul',  crimesBronx[6],crimesBrooklyn[6],crimesManhattan[6],crimesQueens[6],crimesStatenIsland[6]],
        ['Aug',  crimesBronx[7],crimesBrooklyn[7],crimesManhattan[7],crimesQueens[7],crimesStatenIsland[7]],
        ['Sep',  crimesBronx[8],crimesBrooklyn[8],crimesManhattan[8],crimesQueens[8],crimesStatenIsland[8]],
        ['Oct',  crimesBronx[9],crimesBrooklyn[9],crimesManhattan[9],crimesQueens[9],crimesStatenIsland[9]],
        ['Nov',  crimesBronx[10],crimesBrooklyn[10],crimesManhattan[10],crimesQueens[10],crimesStatenIsland[10]],
        ['Dec',  crimesBronx[11],crimesBrooklyn[11],crimesManhattan[11],crimesQueens[11],crimesStatenIsland[11]]

    ]);

    var options = {
        title: 'Quantidade de Crimes por Distrito',

        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_div'));

    chart.draw(data, options);
}