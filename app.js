'use strict';
var hours =['6 am','7am','8am','9am','10am','11 am','12pm','1pm','2pm','3 pm','4pm','5pm','6pm','7pm','8pm'];
var allPlaces =[];//example for a globle varable
var totalPerHour=[]
var cookiesStandTable= document.getElementById('cookiesStand'); 

function Places(name,minSales,maxSales,avgCookies){
    this.name = name;
    this.minSales= minSales;
    this.maxSales= maxSales;
    this.salesArrary= this.sales();
    this.avgCookies= avgCookies;
    this.avgCookiesArrary=this.calCookies();
    allPlaces.push(this);
    }

Places.prototype.sales=function() {
    var ranNum =[];//local function because it inside of a function
    for (var i = 0; i < hours.length; i++) {
        
        var num= Math.floor((Math.random()*(this.maxSales-this.minSales))+this.minSales);
        ranNum.push(num);
    }
    return ranNum;
}
Places.prototype.calCookies=function() {
    var cookieNum= [];
    for( var i = 0; i<hours.length; i++ ){

        var avgNum = Math.floor(this.avgCookies*this.salesArrary[i]);
        cookieNum.push(avgNum);
        
    }
    return cookieNum;

}

new Places ('1st and Pike',23,65,6.3);
new Places ('Sea-Tac Airport',3,24,1.2);
new Places ('Seattle Center',11,38,3.7);
new Places ('Capitol Hill',20,38,2.3);
new Places ('Alki Beach',2,16,4.6);

console.table(allPlaces);

Places.prototype.render= function(){
    var trEl= document.createElement('tr');
    var tdEl= document.createElement('td');
    tdEl.textContent =this.name;
    trEl.appendChild(tdEl);
    var totalLocation = 0
    for(var i=0; i<this.salesArrary.length; i++){
        tdEl= document.createElement('td');
        tdEl.textContent=(this.avgCookiesArrary[i]);
        totalLocation += this.avgCookiesArrary[i];
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
        thEl.textContent= hours[i];
        trEl.appendChild(thEl);
    }
    thEl =document.createElement('th');
    thEl.textContent=('Total per location');//per location
    trEl.appendChild(thEl);

    cookiesStand.appendChild(trEl);
}
//need a nested 'for'loop (a loop within a loop)
function makeFooterRow(){
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
        thEl.textContent=('Total Cookies sold per hour');//per hour
        trEl.appendChild(thEl);
       
    for(var i=0; i<hours.length;i++){
       // tdEl=document.createElement('td');
        var hrTotal = 0; 

        for(var j=0; j<allPlaces.length;j++){
           // console.log(hrTotal,"hour of total")
           hrTotal += allPlaces[j].avgCookiesArrary[i]; 
        }//console.log('avg cookies', hrTotal);

        var thEl= document.createElement('th');
        thEl.textContent=(hrTotal);
        trEl.appendChild(thEl);
    }

    thEl =document.createElement('th');
    thEl.textContent=('');//per location
    trEl.appendChild(thEl);
    cookiesStand.appendChild(trEl);
}

function renderAllPlaces() {
    for(var i = 0; i < allPlaces.length; i++) {
      allPlaces[i].render();
    }
}

makeHeaderRow();

renderAllPlaces();

makeFooterRow();