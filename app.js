'use strict';

var hours =['6','7','8','9','10','11','12','1','2','3','4','5','6','7','8']

var oneStaAndPikeUl= document.getElementById('pike');
var seaTacAirportUl= document.getElementById('airport');
var seattleCenterUl= document.getElementById('center');
var capitolHillUl= document.getElementById('hill')
var alkiBeachUl= document.getElementById('beach')

var market ={
    name: '1st and Pike',
    minSales:23,
    maxSales:65,
    time: hours,
   render: function(minSales,maxSales) {
        for (var i = 0; i < hours.length; i++) {
            var num= Math.floor((Math.random()*(this.maxSales-this.minSales))+this.minSales);
            var liEl = document.createElement('li');
            liEl.textContent = `${num} of customer`;
            console.log('Just created liEl', liEl)
            oneStaAndPikeUl.append(liEl);
        }
    }
    
}

var airplanes ={
    name: 'SeaTac Airport',
    minSales:3,
    maxSales:24,
    time:hours,
    render: function(minSales,maxSales) {
        for (var i = 0; i < hours.length; i++) {
            var num= Math.floor((Math.random()*(this.maxSales-this.minSales))+this.minSales);
            var liEl = document.createElement('li');
            liEl.textContent = `${num} of customer`;
            console.log('Just created liEl', liEl)
            seaTacAirportUl.append(liEl);
            }
        }
    }

var spaceNettle ={
    name: 'Seattle Center',
    minSales:11,
    maxSales:38,
    time:hours,
    render: function(minSales,maxSales) {
        for (var i = 0; i < hours.length; i++) {
            var num= Math.floor((Math.random()*(this.maxSales-this.minSales))+this.minSales);
            var liEl = document.createElement('li');
            liEl.textContent = `${num} of customer`;
            console.log('Just created liEl', liEl)
            seattleCenterUl.append(liEl);
            }
        }
    }



var capitolhill={
    name:'Capitol Hill',
    minSales: 20,
    maxSales:38,
    time: hours,
    render: function(minSales,maxSales) {
        for (var i = 0; i < hours.length; i++) {
            var num= Math.floor((Math.random()*(this.maxSales-this.minSales))+this.minSales);
            var liEl = document.createElement('li');
            liEl.textContent = `${num} of customer`;
            console.log('Just created liEl', liEl)
            capitolHillUl.append(liEl);
            }
        }
    }



var alki={
    name:'Alki Beach',
    minSales:2,
    maxSales:16,
    time: hours, render: function(minSales,maxSales) {
        for (var i = 0; i < hours.length; i++) {
            var num= Math.floor((Math.random()*(this.maxSales-this.minSales))+this.minSales);
            var liEl = document.createElement('li');
            liEl.textContent = `${num} of customer`;
            console.log('Just created liEl', liEl)
            alkiBeachUl.append(liEl);
            }
        }
    }


