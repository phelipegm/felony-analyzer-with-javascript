var actives;
var extents;
var data;
var bronx=0;
var brooklyn=0;
var manhattan=0;
var queens=0;
var staten=0;
var pricesBronx={};
var pricesBrooklyn={};
var pricesManhattan={};
var pricesQueens={};
var pricesStatenIsland={};
iniciaVetPreco(pricesBronx);
iniciaVetPreco(pricesBrooklyn);
iniciaVetPreco(pricesManhattan);
iniciaVetPreco(pricesQueens);
iniciaVetPreco(pricesStatenIsland);
var crimesBronx={};
var crimesBrooklyn={};
var crimesManhattan={};
var crimesQueens={};
var crimesStatenIsland={};
iniciaVetPreco(crimesBronx);
iniciaVetPreco(crimesBrooklyn);
iniciaVetPreco(crimesManhattan);
iniciaVetPreco(crimesQueens);
iniciaVetPreco(crimesStatenIsland);

var margin = {top: 30, right: 100, bottom: 10, left: 5},
    width = 800 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal().rangePoints([0, width], 1),
    y = {};

var line = d3.svg.line(),
    axis = d3.svg.axis().orient("left"),
    background,
    foreground;

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("crimes_random.csv", function(error, felony) {
    data=felony;
    for(var i=0;i<data.length;i++){
        if(data[i].Distrito=="BRONX"){
            bronx++;
            if(data[i].Mes==1){
               pricesBronx[0]=parseInt(data[i].Preco);
               crimesBronx[0]++;
            }else if(data[i].Mes==2){
                pricesBronx[1]=parseInt(data[i].Preco);
                crimesBronx[1]++;
            }else if(data[i].Mes==3){
                pricesBronx[2]=parseInt(data[i].Preco);
                crimesBronx[2]++;
            }else if(data[i].Mes==4){
                pricesBronx[3]=parseInt(data[i].Preco);
                crimesBronx[3]++;
            }else if(data[i].Mes==5){
                pricesBronx[4]=parseInt(data[i].Preco);
                crimesBronx[4]++;
            }else if(data[i].Mes==6){
                pricesBronx[5]=parseInt(data[i].Preco);
                crimesBronx[5]++;
            }else if(data[i].Mes==7){
                pricesBronx[6]=parseInt(data[i].Preco);
                crimesBronx[6]++;
            }else if(data[i].Mes==8){
                pricesBronx[7]=parseInt(data[i].Preco);
                crimesBronx[7]++;
            }else if(data[i].Mes==9){
                pricesBronx[8]=parseInt(data[i].Preco);
                crimesBronx[8]++;
            }else if(data[i].Mes==10){
                pricesBronx[9]=parseInt(data[i].Preco);
                crimesBronx[9]++;
            }else if(data[i].Mes==11){
                pricesBronx[10]=parseInt(data[i].Preco);
                crimesBronx[10]++;
            }else if(data[i].Mes==12){
                pricesBronx[11]=parseInt(data[i].Preco);
                crimesBronx[11]++;
            }
        }else if(data[i].Distrito=="BROOKLYN"){
            brooklyn++;
            if(data[i].Mes==1){
                pricesBrooklyn[0]=parseInt(data[i].Preco);
                crimesBrooklyn[0]++;
            }else if(data[i].Mes==2){
                pricesBrooklyn[1]=parseInt(data[i].Preco);
                crimesBrooklyn[1]++;
            }else if(data[i].Mes==3){
                pricesBrooklyn[2]=parseInt(data[i].Preco);
                crimesBrooklyn[2]++;
            }else if(data[i].Mes==4){
                pricesBrooklyn[3]=parseInt(data[i].Preco);
                crimesBrooklyn[3]++;
            }else if(data[i].Mes==5){
                pricesBrooklyn[4]=parseInt(data[i].Preco);
                crimesBrooklyn[4]++;
            }else if(data[i].Mes==6){
                pricesBrooklyn[5]=parseInt(data[i].Preco);
                crimesBrooklyn[5]++;
            }else if(data[i].Mes==7){
                pricesBrooklyn[6]=parseInt(data[i].Preco);
                crimesBrooklyn[6]++;
            }else if(data[i].Mes==8){
                pricesBrooklyn[7]=parseInt(data[i].Preco);
                crimesBrooklyn[7]++;
            }else if(data[i].Mes==9){
                pricesBrooklyn[8]=parseInt(data[i].Preco);
                crimesBrooklyn[8]++;
            }else if(data[i].Mes==10){
                pricesBrooklyn[9]=parseInt(data[i].Preco);
                crimesBrooklyn[9]++;
            }else if(data[i].Mes==11){
                pricesBrooklyn[10]=parseInt(data[i].Preco);
                crimesBrooklyn[10]++;
            }else if(data[i].Mes==12){
                pricesBrooklyn[11]=parseInt(data[i].Preco);
                crimesBrooklyn[11]++;
            }
        }else if(data[i].Distrito=="MANHATTAN"){
            manhattan++;
            if(data[i].Mes==1){
                pricesManhattan[0]=parseInt(data[i].Preco);
                crimesManhattan[0]++;
            }else if(data[i].Mes==2){
                pricesManhattan[1]=parseInt(data[i].Preco);
                crimesManhattan[1]++;
            }else if(data[i].Mes==3){
                pricesManhattan[2]=parseInt(data[i].Preco);
                crimesManhattan[2]++;
            }else if(data[i].Mes==4){
                pricesManhattan[3]=parseInt(data[i].Preco);
                crimesManhattan[3]++;
            }else if(data[i].Mes==5){
                pricesManhattan[4]=parseInt(data[i].Preco);
                crimesManhattan[4]++;
            }else if(data[i].Mes==6){
                pricesManhattan[5]=parseInt(data[i].Preco);
                crimesManhattan[5]++;
            }else if(data[i].Mes==7){
                pricesManhattan[6]=parseInt(data[i].Preco);
                crimesManhattan[6]++;
            }else if(data[i].Mes==8){
                pricesManhattan[7]=parseInt(data[i].Preco);
                crimesManhattan[7]++;
            }else if(data[i].Mes==9){
                pricesManhattan[8]=parseInt(data[i].Preco);
                crimesManhattan[8]++;
            }else if(data[i].Mes==10){
                pricesManhattan[9]=parseInt(data[i].Preco);
                crimesManhattan[9]++;
            }else if(data[i].Mes==11){
                pricesManhattan[10]=parseInt(data[i].Preco);
                crimesManhattan[10]++;
            }else if(data[i].Mes==12){
                pricesManhattan[11]=parseInt(data[i].Preco);
                crimesManhattan[11]++;
            }
        }else if(data[i].Distrito=="QUEENS"){
            queens++;
            if(data[i].Mes==1){
                pricesQueens[0]=parseInt(data[i].Preco);
                crimesQueens[0]++;
            }else if(data[i].Mes==2){
                pricesQueens[1]=parseInt(data[i].Preco);
                crimesQueens[1]++;
            }else if(data[i].Mes==3){
                pricesQueens[2]=parseInt(data[i].Preco);
                crimesQueens[2]++;
            }else if(data[i].Mes==4){
                pricesQueens[3]=parseInt(data[i].Preco);
                crimesQueens[3]++;
            }else if(data[i].Mes==5){
                pricesQueens[4]=parseInt(data[i].Preco);
                crimesQueens[4]++;
            }else if(data[i].Mes==6){
                pricesQueens[5]=parseInt(data[i].Preco);
                crimesQueens[5]++;
            }else if(data[i].Mes==7){
                pricesQueens[6]=parseInt(data[i].Preco);
                crimesQueens[6]++;
            }else if(data[i].Mes==8){
                pricesQueens[7]=parseInt(data[i].Preco);
                crimesQueens[7]++;
            }else if(data[i].Mes==9){
                pricesQueens[8]=parseInt(data[i].Preco);
                crimesQueens[8]++;
            }else if(data[i].Mes==10){
                pricesQueens[9]=parseInt(data[i].Preco);
                crimesQueens[9]++;
            }else if(data[i].Mes==11){
                pricesQueens[10]=parseInt(data[i].Preco);
                crimesQueens[10]++;
            }else if(data[i].Mes==12){
                pricesQueens[11]=parseInt(data[i].Preco);
                crimesQueens[11]++;
            }
        }else{
            staten++;
            if(data[i].Mes==1){
                pricesStatenIsland[0]=parseInt(data[i].Preco);
                crimesStatenIsland[0]++;
            }else if(data[i].Mes==2){
                pricesStatenIsland[1]=parseInt(data[i].Preco);
                crimesStatenIsland[1]++;
            }else if(data[i].Mes==3){
                pricesStatenIsland[2]=parseInt(data[i].Preco);
                crimesStatenIsland[2]++;
            }else if(data[i].Mes==4){
                pricesStatenIsland[3]=parseInt(data[i].Preco);
                crimesStatenIsland[3]++;
            }else if(data[i].Mes==5){
                pricesStatenIsland[4]=parseInt(data[i].Preco);
                crimesStatenIsland[4]++;
            }else if(data[i].Mes==6){
                pricesStatenIsland[5]=parseInt(data[i].Preco);
                crimesStatenIsland[5]++;
            }else if(data[i].Mes==7){
                pricesStatenIsland[6]=parseInt(data[i].Preco);
                crimesStatenIsland[6]++;
            }else if(data[i].Mes==8){
                pricesStatenIsland[7]=parseInt(data[i].Preco);
                crimesStatenIsland[7]++;
            }else if(data[i].Mes==9){
                pricesStatenIsland[8]=parseInt(data[i].Preco);
                crimesStatenIsland[8]++;
            }else if(data[i].Mes==10){
                pricesStatenIsland[9]=parseInt(data[i].Preco);
                crimesStatenIsland[9]++;
            }else if(data[i].Mes==11){
                pricesStatenIsland[10]=parseInt(data[i].Preco);
                crimesStatenIsland[10]++;
            }else if(data[i].Mes==12){
                pricesStatenIsland[11]=parseInt(data[i].Preco);
                crimesStatenIsland[11]++;
            }
        }
    }
    console.log(crimesBronx);
    // Extract the list of dimensions and create a scale for each.
    x.domain(dimensions = d3.keys(felony[0]).filter(function(d) {

        return d!= "ID" && d!="Coord" && d!="Distrito" && (y[d] = d3.scale.linear()
                .domain(d3.extent(felony, function(p) { return +p[d]; }))
                .range([height, 0]));
    }));

    // Add grey background lines for context.
    background = svg.append("g")
        .attr("class", "background")
        .selectAll("path")
        .data(felony)
        .enter().append("path")
        .attr("d", path);

    // Add blue foreground lines for focus.
    foreground = svg.append("g")
        .attr("class", "foreground")
        .selectAll("path")
        .data(felony)
        .enter().append("path")
        .attr("d", path);

    // Add a group element for each dimension.
    var g = svg.selectAll(".dimension")
        .data(dimensions)
        .enter().append("g")
        .attr("class", "dimension")
        .attr("transform", function(d) { return "translate(" + x(d) + ")"; });

    // Add an axis and title.
    g.append("g")
        .attr("class", "axis")
        .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
        .append("text")
        .style("text-anchor", "middle")
        .attr("y", -9)
        .text(function(d) { return d; });

    // Add and store a brush for each axis.
    g.append("g")
        .attr("class", "brush")
        .each(function(d) { d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brush", brush)); })
        .selectAll("rect")
        .attr("x", -8)
        .attr("width", 16);
});

// Returns the path for a given data point.
function path(d) {
    return line(dimensions.map(function(p) { return [x(p), y[p](d[p])]; }));
}

// Handles a brush event, toggling the display of foreground lines.
function brush() {
    actives = dimensions.filter(function(p) { return !y[p].brush.empty(); });
    extents = actives.map(function(p) { return y[p].brush.extent(); });
    foreground.style("display", function(d) {
        return actives.every(function(p, i) {
            return extents[i][0] <= d[p] && d[p] <= extents[i][1];
        }) ? null : "none";
    });
}



function iniciaVetPreco(vet){
    for(var i=0;i<12;i++){
        vet[i]=0;
    }
}