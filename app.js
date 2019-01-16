'use strict';
var hours =['6 am','7am','8am','9am','10am','11 am','12pm','1pm','2pm','3 pm','4pm','5pm','6pm','7pm','8pm'];
var allPlaces =[];

var cookiesStandTable= document.getElementById('cookiesStand'); 

function Places(name,minSales,maxSales, ranNum){
    this.name = name;
    this.minSales= minSales;
    this.maxSales= maxSales;
    this.salesArrary= this.sales();
    allPlaces.push(this);
    this.salesPerhr= ranNum;
    }

Places.prototype.sales=function() {
    var ranNum =[];
    for (var i = 0; i < hours.length; i++) {
        
        var num= Math.floor((Math.random()*(this.maxSales-this.minSales))+this.minSales);
        ranNum.push(num);
    }
    return ranNum;
}
new Places ('1st and Pike',23,26,);
new Places ('Sea-Tac Airport',3,24,);
new Places ('Seattle Center',11,38,);
new Places ('Capitol Hill',20,38,);
new Places ('Alki Beach',2,16);

console.table(allPlaces);

Places.prototype.render= function(){
    var trEl= document.createElement('tr');
    var tdEl= document.createElement('td');
    tdEl.textContent =this.name;
    trEl.appendChild(tdEl);
    var totalLocation = 0
    for(var i=0; i<this.salesArrary.length; i++){
        tdEl= document.createElement('td');
        tdEl.textContent=(this.salesArrary[i]);
        totalLocation += this.salesArrary[i];
        trEl.appendChild(tdEl);
    }    
    tdEl= document.createElement('td');
    tdEl.textContent=(totalLocation);
    trEl.appendChild(tdEl);

    cookiesStand.appendChild(trEl);

}

function makeHeaderRow(){
    var trEl = document.createElement('tr');
    var thEl =document.createElement('th');
        thEl.textContent=('');
        trEl.appendChild(thEl);

    for (var i=0; i< hours.length;i++){
        var thEl = document.createElement('th');
       //console.log(hours[i]);
        thEl.textContent= hours[i];
        trEl.appendChild(thEl);
    }
    thEl =document.createElement('th');
    thEl.textContent='Total 1';//per location
    trEl.appendChild(thEl);

    cookiesStand.appendChild(trEl);
}

function makeFooterRow(){
    var trEl = document.createElement('tr');
    var thEl =document.createElement('th');
        thEl.textContent= 'total 2';//per hour
        trEl.appendChild(thEl);
        
    for(var i=0; i<this.salesArrary.length;i++){
        var hourCount=0;
        var totelTwo= hourCount+salesPerhr[i];
        thEl.textContent= totelTwo[i];
        trEl.appendChild(thEl);
    }
    thEl =document.createElement('th');
    thEl.textContent='';//per location
    trEl.appendChild(thEl);

    cookiesStand.appendChild(trEl);
    cookiesStand.appendChild(trEl);
}

function renderAllPlaces() {
    for(var i = 0; i < allPlaces.length; i++) {
      allPlaces[i].render();
    }
}

makeHeaderRow();
renderAllPlaces();


// var oneStaAndPikeUl= document.getElementById('pike');
// var seaTacAirportUl= document.getElementById('airport');
// var seattleCenterUl= document.getElementById('center');
// var capitolHillUl= document.getElementById('hill')
// var alkiBeachUl= document.getElementById('beach')

// var market ={
//     name: '1st and Pike',
//     minSales:23,
//     maxSales:65,
//     render: function() {
//         for (var i = 0; i < hours.length; i++) {
//             var num= Math.floor((Math.random()*(this.maxSales-this.minSales))+this.minSales);
            
//             var liEl = document.createElement('li');
//             liEl.textContent = `${hours[i]}:${num} of customer`;
//             console.log('Just created liEl', liEl)
//             oneStaAndPikeUl.appendChild(liEl);
//         }
//     }   
// }


// var airplanes ={
//     name: 'SeaTac Airport',
//     minSales:3,
//     maxSales:24,
//     render: function() {
//         for (var i = 0; i < hours.length; i++) {
//             var num= Math.floor((Math.random()*(this.maxSales-this.minSales))+this.minSales);
//             var liEl = document.createElement('li');
//             liEl.textContent = `${hours[i]};${num} of customer`;
//             console.log('Just created liEl', liEl)
//             seaTacAirportUl.appendChild(liEl);
//             }
//         }
//     }



// var spaceNettle ={
//     name: 'Seattle Center',
//     minSales:11,
//     maxSales:38,
//     render: function() {
//         for (var i = 0; i < hours.length; i++) {
//             var num= Math.floor((Math.random()*(this.maxSales-this.minSales))+this.minSales);
//             var liEl = document.createElement('li');
//             liEl.textContent = `${hours[i]};${num} of customer`;
//             console.log('Just created liEl', liEl)
//             seattleCenterUl.appendChild(liEl);
//             }
//         }
//     }



// var capitolhill={
//     name:'Capitol Hill',
//     minSales: 20,
//     maxSales:38,
//     time: hours,
//     render: function() {
//         for (var i = 0; i < hours.length; i++) {
//             var num= Math.floor((Math.random()*(this.maxSales-this.minSales))+this.minSales);
//             var liEl = document.createElement('li');
//             liEl.textContent = `${hours[i]}:${num} of customer`;
//             console.log('Just created liEl', liEl)
//             capitolHillUl.appendChild(liEl);
//             }
//         }
//     }



// var alki={
//     name:'Alki Beach',
//     minSales:2,
//     maxSales:16,
//     time: hours, render: function() {
//         for (var i = 0; i < hours.length; i++) {
//             var num= Math.floor((Math.random()*(this.maxSales-this.minSales))+this.minSales);
//             var liEl = document.createElement('li');
//             liEl.textContent = `${hours[i]}${num} of customer`;
//             console.log('Just created liEl', liEl)
//             alkiBeachUl.appendChild(liEl);
//             }
//         }
//     }


// market.render();
// airplanes.render();
// spaceNettle.render();
// capitolhill.render();
// alki.render();
