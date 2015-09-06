//Start chapter navigation functionality

//display the hidden li elements by adding an event listener for clicks
document.getElementsByTagName("li")[0].addEventListener("click", function() {
	//if this nav is inactive
	if(!this.parentNode.getAttribute("class")) {
		//apply a subtle slideup transition and dislplay content
		this.parentNode.setAttribute ("class", "slideUp");
	}
	//otherwise remove the class 
	else {
		this.parentNode.removeAttribute("class");
	}
})

//when the user clicks on the "chapter" title (h4 #chapter_title)
$("#chapter_title").click(function(){

	//display the nav containing chapter options by changing the class to active
	$("#chapter_list nav").toggleClass('active');

})

//Start image slider
$(window).load(function(){
  $(".twentytwenty-container").twentytwenty({
    default_offset_pct: 0.3, // How much of the before image is visible when the page loads
    orientation: 'horizontal' // Orientation of the before and after images ('horizontal' or 'vertical')
  });
});


//Start charts and graphs
if(!!(window.addEventListener)) window.addEventListener('DOMContentLoaded', main);
else window.attachEvent('onload', main);

function main() {
    mdDoughnutChart();
    osDoughnutChart();
    lineChart()
}

function mdDoughnutChart() {

	var mdDoughnutData = [
		{
			value: 36,
			label: "Mobile",
			color: "rgba(245, 185, 98, 1)",
			highlight: "rgba(245, 185, 98, 0.8)"
		},
		{
			value: 64,
			label: "Desktop",
			color: "rgba(21, 145, 143, 1)",
			hightlight: "rgba(21, 145, 143, 0.8)"
		}
	];

    var ctx = document.getElementById("mdDoughnutChart").getContext("2d");
    var mdDoughnutChart = new Chart(ctx).Doughnut(mdDoughnutData,{tooltipTemplate:"<%=label%>: <%=value%>%",
responsive: true,});

    legend(document.getElementById("mdDoughnutLegend"), mdDoughnutData, mdDoughnutChart, "<%=label%>: <%=value%>%");
}

function osDoughnutChart() {

	var osDoughnutData = [
		{
			value: 32,
			label: "Windows 7",
			color: "rgba(245, 185, 98, 1)",
			highlight: "rgba(245, 185, 98, 0.8)"
		},
		{
			value: 24,
			label: "iPhone",
			color: "rgba(21, 145, 143, 1)",
			hightlight: "rgba(21, 145, 143, 0.8)"
		},
		{
			value: 16,
			label: "Windows XP",
			color: "rgba(221, 72, 64, 1)",
			hightlight: "rgba(21, 145, 143, 0.8)"
		},
		{
			value: 10,
			label: "Mac OS",
			color: "rgba(85, 40, 132, 1)",
			hightlight: "rgba(85, 40, 132, 0.8)"
		},
		{
			value: 7,
			label: "iPad",
			color: "rgba(68, 68, 68, 1)",
			hightlight: "rgba(68, 68, 68, 0.8)"
		},
		{
			value: 5,
			label: "Android",
			color: "rgba(0, 184, 188, 1)",
			hightlight: "rgba(0, 184, 188, 0.8)"
		},
		{
			value: 3,
			label: "Windows 8",
			color: "rgba(236, 220, 195, 1)",
			hightlight: "rgba(236, 220, 195, 0.8)"
		},
		{
			value: 3,
			label: "Windows Other",
			color: "rgba(200, 189, 212, 1)",
			hightlight: "rgba(200, 189, 212, 0.8)"
		},

	];

	var ctx = document.getElementById("osDoughnutChart").getContext("2d");
    var osDoughnutChart = new Chart(ctx).Doughnut(osDoughnutData,{tooltipTemplate:"<%=label%>: <%=value%>%",
	responsive: true,});

    legend(document.getElementById("osDoughnutLegend"), osDoughnutData, osDoughnutChart, "<%=label%>: <%=value%>%");
}

function lineChart() {
    var data = {
        labels : ["Jan '12","July '12","Jan '13","July '13","Jan '14","July '14","Jan '15"],
        datasets : [
        {
            label: 'Mobile',
            fillColor : "rgba(245, 185, 98, 0.7",
            strokeColor : "rgba(245, 185, 98, 1)",
            pointColor : "rgba(245, 185, 98, 1)",
            pointStrokeColor : "#fff",
            data : [21,27,31,38,38,43,43,44,48,51,49,50,49,49,48],
        },
        {
        	label: 'Webmail',
            fillColor : "rgba(221, 72, 64, 0.7)",
            strokeColor : "rgba(221, 72, 64, 1)",
            pointColor : "rgba(221, 72, 64, 1)",
            pointStrokeColor : "#fff",
            data : [50,39,38,33,29,32,32,33,33,31,27,25,26,27,30],
        },
        {
        	label: 'Desktop',
            fillColor : "rgba(21, 145, 143, 0.7)",
            strokeColor : "rgba(21, 145, 143, 1)",
            pointColor : "rgba(21, 145, 143, 1)",
            pointStrokeColor : "#fff",
            data : [29,34,31,29,29,25,25,26,25,24,24,23,23,23,22],
        }
        ]
    };

    var ctx = document.getElementById("lineChart").getContext("2d");
	new Chart(ctx).Line(data, {tooltipTemplate:"<%=label%>: <%=value%>%",
responsive: true,});

     legend(document.getElementById("lineLegend"), data);

    // testing adding twice (should get same result)
    legend(document.getElementById("lineLegend"), data);
}
