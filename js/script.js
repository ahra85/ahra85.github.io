$(document).ready(function() {
//    모바일 gnb 햄버거 아이콘
    var trigger = $('#hamburger'),
        isClosed = true;

    trigger.click(function () {
      burgerTime();
    });

    function burgerTime() {
      if (isClosed == true) {
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        $('.gnb').addClass('active');
        isClosed = false;
      } else {
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        $('.gnb').removeClass('active');
        isClosed = true;
      }
    };
    
//    skill 소개
    var val_count=[85,80,60,100];
    chart_event_1(val_count,'chart-area1');
    
    function chart_event_1(val_1,canvasId){
        var config = {
            type: 'polarArea',
            data: {
                datasets: [{
                    data: [val_1[0],val_1[1],val_1[2],val_1[3]],
                    backgroundColor: ["rgba(255,133,207,0.5)","rgba(60,194,60,0.3)","rgba(255,255,0,0.3)",
                        "rgba(0,150,255,0.3)"],
                    label: 'My dataset' // for legend
                }],
                labels: [
                    "HTML(5)/CSS(3)",
                    "JQuery",
                    "Photoshop",
                    "성실함"
                ]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    position: 'bottom',
                },
                layout: {
                    padding: {
                        top: 20,
                    }
                },
                scale: {
                    ticks: {
                        beginAtZero: true,
                        stepSize: 50,
                        backdropColor:'transparent',
                        fontColor:"transparent",
                   }
                },
                animation: {
                    animateRotate: false,
                    animateScale: true
                }
            }
        };
        Chart.defaults.scale.gridLines.color = "#eee";
        window.myPolarArea = new Chart(document.getElementById(canvasId), config);
    };

//    scroll 이벤트
    var section1_top=$('.section1').position().top;
    var section2_top=$('.section2').position().top;
    var section3_top=$('.section3').position().top;
    var pos=1;
    
    $(window).on('scroll',function(){
        var win_top=$(this).scrollTop();
        section2_top=$('.section2').offset().top-300;
        section3_top=$('.section3').offset().top-300;
//        console.log(win_top,section1_top,section2_top,section3_top)
        if(win_top<section2_top){
            pos=0;
        }else if(win_top>=section2_top && win_top<section3_top){
            pos=1;
        }else{
            pos=2;
        }
            gnb_event();
    });
    function gnb_event(){
        $('.gnb li').removeClass('on');
        $('.gnb li').eq(pos).addClass('on');
    };
    
    $('.gnb a').on('click',function(e){
        e.preventDefault();
        var $index=$(this).parent().index()+1;
//        console.log($index)
        var target=$('.section'+$index).position().top;

        $('html').animate({'scrollTop':target});
    });
})
