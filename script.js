var button = document.getElementById("b");
var header = document.getElementById("head");
var clicked = 1;

var dyn = d3.select("#c1");
var sector = ["Social Security","Medicare","Defense","Other"];
var spending1 = [907, 504, 411, 202];
var spending2 = [1216, 764, 661, 386];
var makeBars = function() {
    var counter1 = 0;
    
    dyn.selectAll("div")
	.data(spending1)
	.enter()
	.append("div")
	.style("width", function(d) {
	    return (d/2 + 0) + "px";
	})
	.text( function(d) {
	    return sector[counter1++]+": "+d+" billion";
	});
    
};
var transition = function() {
    var counter1 = 0;
    dyn.selectAll("div")
	.data(spending1)
	.transition()
	.duration(2000)
	.style("width", function(d) {
	    var scale = 0;
	    if(clicked > 0){
		scale = spending2[counter1]/spending1[counter1];
	    }
	    if(clicked < 0){
		scale = 1;
	    }
	    return ((d/2) * scale + 0) + "px";
	})
        .text( function(d) {
	    if(clicked > 0){
		t = spending2[counter1];
	    }
	    if(clicked < 0){
		t = spending1[counter1];
	    }
	    return sector[counter1++]+": "+t+" billion";
	});
    clicked *= -1;
};

var change = function(){
    if(clicked < 0){
	button.innerHTML = "Barry";
	header.innerHTML = "Dubya: 2002";
    }
    if(clicked > 0){
	button.innerHTML = "Dubya";
	header.innerHTML = "Barry: 2009";
    }
    transition();
    
}

button.addEventListener("click",change);
makeBars();
