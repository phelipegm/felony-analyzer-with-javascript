
var map, heatmap;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {lat: 40.7142700, lng: -74.0059700},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var marker = new google.maps.Marker({
        position: {
            lat: 40.7142700,
            lng: -74.0059700
        },
        map: map,
        icon: 'bigcity.png'
    });

    var InfoWindow = new google.maps.InfoWindow({
        content: '<div style="color: #f00;">Bem vindo a Nova Iorque!'
    });

    InfoWindow.open(map,marker);

    var marker2 = new google.maps.Marker({
        position: {
            lat:  40.742054,
            lng: -73.769417
        },
        map: map,
        icon: 'borough.png'
    });

    var InfoWindow = new google.maps.InfoWindow({
        content: '<div style="color: #111;">Queens'
    });

    InfoWindow.open(map,marker2);


    var marker3 = new google.maps.Marker({
        position: {
            lat: 40.790278,
            lng:  -73.959722
        },
        map: map,
        icon: 'borough.png'
    });

    var InfoWindow = new google.maps.InfoWindow({
        content: '<div style="color: #111;">Manhattan'
    });

    InfoWindow.open(map,marker3);


    var marker4 = new google.maps.Marker({
        position: {
            lat: 40.650002,
            lng: -73.949997
        },
        map: map,
        icon: 'borough.png'
    });

    var InfoWindow = new google.maps.InfoWindow({
        content: '<div style="color: #111;">Brooklyn'
    });

    InfoWindow.open(map,marker4);

    var marker5 = new google.maps.Marker({
        position: {
            lat: 40.8515,
            lng: -73.8409
        },
        map: map,
        icon: 'borough.png'
    });

    var InfoWindow = new google.maps.InfoWindow({
        content: '<div style="color: #111;">Bronx'
    });

    InfoWindow.open(map,marker5);


    var marker6 = new google.maps.Marker({
        position: {
            lat: 40.579021,
            lng: -74.151535
        },
        map: map,
        icon: 'borough.png'
    });

    var InfoWindow = new google.maps.InfoWindow({
        content: '<div style="color: #111;">Staten Island'
    });

    InfoWindow.open(map,marker6);


    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map
    });
}

function toggleHeatmap() {
    initMap();
    heatmap.setMap(heatmap.getMap());
}

function changeGradient() {
    var gradient = [
        'rgba(0, 255, 255, 0)',
        'rgba(0, 255, 255, 1)',
        'rgba(0, 191, 255, 1)',
        'rgba(0, 127, 255, 1)',
        'rgba(0, 63, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 223, 1)',
        'rgba(0, 0, 191, 1)',
        'rgba(0, 0, 159, 1)',
        'rgba(0, 0, 127, 1)',
        'rgba(63, 0, 91, 1)',
        'rgba(127, 0, 63, 1)',
        'rgba(191, 0, 31, 1)',
        'rgba(255, 0, 0, 1)'
    ]
    heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
    heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
    heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {

    var i;
    var cont=0;
    var points={};
    var aux={};
    var x=extents;
    var contAux=0;
    if(x){
        if(actives[0]=="Dia_sem"){
            for(i=0;i<data.length;i++){
                if(data[i].Dia_sem>=x[0][0]&&data[i].Dia_sem<=x[0][1]){
                    points[cont]=data[i];
                    cont++;
                }
            }
        }else if(actives[0]=="Mes"){
            for(i=0;i<data.length;i++){
                if(data[i].Mes>=x[0][0]&&data[i].Mes<=x[0][1]){
                    points[cont]=data[i];
                    cont++;
                }
            }
        }else if(actives[0]=="Dia_ocor") {
            for (i = 0; i < data.length; i++) {
                if (data[i].Dia_ocor >= x[0][0] && data[i].Dia_ocor <= x[0][1]) {
                    points[cont] = data[i];
                    cont++;
                }
            }
        }else if(actives[0]=="Hora") {
            for (i = 0; i < data.length; i++) {
                if (data[i].Hora >= x[0][0] && data[i].Hora <= x[0][1]) {
                    points[cont] = data[i];
                    cont++;
                }
            }
        }else if(actives[0]=="Preco") {
            for (i = 0; i < data.length; i++) {
                if (data[i].Preco >= x[0][0] && data[i].Preco <= x[0][1]) {
                    points[cont] = data[i];
                    cont++;
                }
            }
        }
        if(actives[1]){
            if(actives[1]=="Dia_sem"){
                for(i=0;i<cont;i++){
                    if(points[i].Dia_sem>=x[1][0]&&points[i].Dia_sem<=x[1][1]){
                        aux[contAux]=points[i];
                        contAux++;
                    }
                }
            }else if(actives[1]=="Mes"){
                for(i=0;i<cont;i++){
                    if(points[i].Mes>=x[1][0]&&points[i].Mes<=x[1][1]){
                        aux[contAux]=points[i];
                        contAux++;
                    }
                }
            }else if(actives[1]=="Dia_ocor") {
                for (i = 0; i < cont; i++) {
                    if (points[i].Dia_ocor >= x[1][0] && points[i].Dia_ocor <= x[1][1]) {
                        aux[contAux] = points[i];
                        contAux++;
                    }
                }
            }else if(actives[1]=="Hora") {
                for (i = 0; i < cont; i++) {
                    if (points[i].Hora >= x[1][0] && points[i].Hora <= x[1][1]) {
                        aux[contAux] = data[i];
                        contAux++;
                    }
                }
            }else if(actives[1]=="Preco") {
                for (i = 0; i < cont; i++) {
                    if (points[i].Preco >= x[1][0] && points[i].Preco <= x[1][1]) {
                        aux[contAux] = data[i];
                        contAux++;
                    }
                }
            }
            cont=0;
            points={};
            for(var i=0;i<contAux;i++){
                points[cont]=aux[i];
                cont++;
            }
        }
        if(actives[2]){
            contAux=0;
            aux={};
            if(actives[2]=="Dia_sem"){
                for(i=0;i<cont;i++){
                    if(points[i].Dia_sem>=x[2][0]&&points[i].Dia_sem<=x[2][1]){
                        aux[contAux]=points[i];
                        contAux++;
                    }
                }
            }else if(actives[2]=="Mes"){
                for(i=0;i<cont;i++){
                    if(points[i].Mes>=x[2][0]&&points[i].Mes<=x[2][1]){
                        aux[contAux]=points[i];
                        contAux++;
                    }
                }
            }else if(actives[2]=="Dia_ocor") {
                for (i = 0; i < cont; i++) {
                    if (points[i].Dia_ocor >= x[2][0] && points[i].Dia_ocor <= x[2][1]) {
                        aux[contAux] = points[i];
                        contAux++;
                    }
                }
            }else if(actives[2]=="Hora") {
                for (i = 0; i < cont; i++) {
                    if (points[i].Hora >= x[2][0] && points[i].Hora <= x[2][1]) {
                        aux[contAux] = points[i];
                        contAux++;
                    }
                }
            }else if(actives[2]=="Preco") {
                for (i = 0; i < cont; i++) {
                    if (points[i].Preco >= x[2][0] && points[i].Preco <= x[2][1]) {
                        aux[contAux] = points[i];
                        contAux++;
                    }
                }
            }
            cont=0;
            points={};
            for(var i=0;i<contAux;i++){
                points[cont]=aux[i];
                cont++;
            }
        }
        if(actives[3]){
            contAux=0;
            aux={};
            if(actives[3]=="Dia_sem"){
                for(i=0;i<cont;i++){
                    if(points[i].Dia_sem>=x[3][0]&&points[i].Dia_sem<=x[3][1]){
                        aux[contAux]=points[i];
                        contAux++;
                    }
                }
            }else if(actives[3]=="Mes"){
                for(i=0;i<cont;i++){
                    if(points[i].Mes>=x[3][0]&&points[i].Mes<=x[3][1]){
                        aux[contAux]=points[i];
                        contAux++;
                    }
                }
            }else if(actives[3]=="Dia_ocor") {
                for (i = 0; i < cont; i++) {
                    if (points[i].Dia_ocor >= x[3][0] && points[i].Dia_ocor <= x[3][1]) {
                        aux[contAux] = points[i];
                        contAux++;
                    }
                }
            }else if(actives[3]=="Hora") {
                for (i = 0; i < cont; i++) {
                    if (points[i].Hora >= x[3][0] && points[i].Hora <= x[3][1]) {
                        aux[contAux] = points[i];
                        contAux++;
                    }
                }
            }else if(actives[3]=="Preco") {
                for (i = 0; i < cont; i++) {
                    if (points[i].Preco >= x[3][0] && points[i].Preco <= x[3][1]) {
                        aux[contAux] = points[i];
                        contAux++;
                    }
                }
            }
            cont=0;
            points={};
            for(var i=0;i<contAux;i++){
                points[cont]=aux[i];
                cont++;
            }
        }
        if(actives[4]){
            contAux=0;
            aux={};
            if(actives[4]=="Dia_sem"){
                for(i=0;i<cont;i++){
                    if(points[i].Dia_sem>=x[4][0]&&points[i].Dia_sem<=x[4][1]){
                        aux[contAux]=points[i];
                        contAux++;
                    }
                }
            }else if(actives[4]=="Mes"){
                for(i=0;i<cont;i++){
                    if(points[i].Mes>=x[4][0]&&points[i].Mes<=x[4][1]){
                        aux[contAux]=points[i];
                        contAux++;
                    }
                }
            }else if(actives[4]=="Dia_ocor") {
                for (i = 0; i < cont; i++) {
                    if (points[i].Dia_ocor >= x[4][0] && points[i].Dia_ocor <= x[4][1]) {
                        aux[contAux] = points[i];
                        contAux++;
                    }
                }
            }else if(actives[4]=="Hora") {
                for (i = 0; i < cont; i++) {
                    if (points[i].Hora >= x[4][0] && points[i].Hora <= x[4][1]) {
                        aux[contAux] = points[i];
                        contAux++;
                    }
                }
            }else if(actives[4]=="Preco") {
                for (i = 0; i < cont; i++) {
                    if (points[i].Preco >= x[4][0] && points[i].Preco <= x[4][1]) {
                        aux[contAux] = points[i];
                        contAux++;
                    }
                }
            }
            cont=0;
            points={};
            for(var i=0;i<contAux;i++){
                points[cont]=aux[i];
                cont++;
            }
        }
        contAux=0;
        for(var i=0;i<cont;i++){
            aux[contAux]=points[i].Coord;
            contAux++;

        }
        var lin=0;
        var latlong=[];
        for(i=0;i<contAux;i++){
            var str= aux[i].split(", ");
            var res=str[0].split("(");
            var lat=res[1];
            res=str[1].split(")");
            var lng=res[0];

            latlong[lin]= new google.maps.LatLng(lat,lng);
            lin++;
        }
        return latlong;

    }
}