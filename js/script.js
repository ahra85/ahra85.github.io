$(document).ready(function() {
    
//    skill 소개
    var val_count=[60,80,90,70];
    chart_event_1(val_count,'chart-area1');
    
    function chart_event_1(val_1,canvasId){
        var config = {
            type: 'polarArea',
            data: {
                datasets: [{
                    data: [val_1[0],val_1[1],val_1[2],val_1[3]],
                    backgroundColor: ["rgba(255,133,207,0.2)","rgba(60,194,60,0.2)","rgba(255,255,0,0.2)",
                        "rgba(0,150,255,0.2)"],
                    label: 'My dataset' // for legend
                }],
                labels: [
                    "Red",
                    "Orange",
                    "Yellow",
                    "Green"
                ]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Chart.js Polar Area Chart'
                },
                scale: {
                  ticks: {
                    beginAtZero: true
                  },
                  reverse: false
                },
                animation: {
                    animateRotate: false,
                    animateScale: true
                }
            }
        };
//          Chart.defaults.global.tooltips.titleFontSize = 14;
//          Chart.defaults.global.tooltips.bodyFontSize = 14;
//          Chart.defaults.global.tooltips.titleMarginBottom = 10;
//          Chart.defaults.global.elements.line.tension = .01;
//          Chart.defaults.global.elements.point.hoverRadius = 10;
//          Chart.defaults.global.elements.point.hitRadius = 3;
//          Chart.defaults.global.legend.display = false;
//          Chart.defaults.scale.lineArc = false;
//
//          Chart.defaults.scale.gridLines.color = "#e5e5e5";
//          Chart.defaults.scale.gridLines.zeroLineColor = "#e5e5e5";
        window.myPolarArea = new Chart(document.getElementById(canvasId), config);

    }
    
    
})
