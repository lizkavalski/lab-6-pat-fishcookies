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
        
    for(var i=0; i<hours.length;i++){
        var hourCount=0;

        var totelTwo= hourCount+salesPerhr[i]+allPlaces[i];
        
        thEl.textContent= totelTwo[i];
        trEl.appendChild(thEl);
    }
    tdEl.textContent=(totalTwo);
    thEl =document.createElement('th');
    thEl.textContent='';//per location
    trEl.appendChild(thEl);

    //cookiesStand.appendChild(trEl);
    cookiesStand.appendChild(trEl);
}

function renderAllPlaces() {
    for(var i = 0; i < allPlaces.length; i++) {
      allPlaces[i].render();
    }
}

makeHeaderRow();
renderAllPlaces();

