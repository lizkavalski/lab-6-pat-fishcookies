'use strict';

var hours =['6 am','7am','8am','9am','10am','11 am','12pm','1pm','2pm','3 pm','4pm','5pm','6pm','7pm','8pm']

var oneStaAndPikeUl= document.getElementById('pike');
var seaTacAirportUl= document.getElementById('airport');
var seattleCenterUl= document.getElementById('center');
var capitolHillUl= document.getElementById('hill')
var alkiBeachUl= document.getElementById('beach')

var market ={
    name: '1st and Pike',
    minSales:23,
    maxSales:65,
    render: function() {
        for (var i = 0; i < hours.length; i++) {
            var num= Math.floor((Math.random()*(this.maxSales-this.minSales))+this.minSales);
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}:${num} of customer`;
            console.log('Just created liEl', liEl)
            oneStaAndPikeUl.appendChild(liEl);
        }
    }   
}



var airplanes ={
    name: 'SeaTac Airport',
    minSales:3,
    maxSales:24,
    render: function() {
        for (var i = 0; i < hours.length; i++) {
            var num= Math.floor((Math.random()*(this.maxSales-this.minSales))+this.minSales);
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]};${num} of customer`;
            console.log('Just created liEl', liEl)
            seaTacAirportUl.appendChild(liEl);
            }
        }
    }



var spaceNettle ={
    name: 'Seattle Center',
    minSales:11,
    maxSales:38,
    render: function() {
        for (var i = 0; i < hours.length; i++) {
            var num= Math.floor((Math.random()*(this.maxSales-this.minSales))+this.minSales);
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]};${num} of customer`;
            console.log('Just created liEl', liEl)
            seattleCenterUl.appendChild(liEl);
            }
        }
    }



var capitolhill={
    name:'Capitol Hill',
    minSales: 20,
    maxSales:38,
    time: hours,
    render: function() {
        for (var i = 0; i < hours.length; i++) {
            var num= Math.floor((Math.random()*(this.maxSales-this.minSales))+this.minSales);
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}:${num} of customer`;
            console.log('Just created liEl', liEl)
            capitolHillUl.appendChild(liEl);
            }
        }
    }



var alki={
    name:'Alki Beach',
    minSales:2,
    maxSales:16,
    time: hours, render: function() {
        for (var i = 0; i < hours.length; i++) {
            var num= Math.floor((Math.random()*(this.maxSales-this.minSales))+this.minSales);
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}${num} of customer`;
            console.log('Just created liEl', liEl)
            alkiBeachUl.appendChild(liEl);
            }
        }
    }


market.render();
airplanes.render();
spaceNettle.render();
capitolhill.render();
alki.render();
