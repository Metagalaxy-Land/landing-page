/*

Script  : Main JS
Version : 1.0
Author  : Surjith S M
URI     : http://themeforest.net/user/surjithctly

Copyright © All rights Reserved
Surjith S M / @surjithctly

*/
function createNewLegendAndAttach(chartInstance, legendOpts) {
    var legend = new Chart.NewLegend({
        ctx: chartInstance.chart.ctx,
        options: legendOpts,
        chart: chartInstance
    });
    
    if (chartInstance.legend) {
        Chart.layoutService.removeBox(chartInstance, chartInstance.legend);
        delete chartInstance.newLegend;
    }
    
    chartInstance.newLegend = legend;
    Chart.layoutService.addBox(chartInstance, legend);
}

$(function () {

    "use strict";

    // Video Scaling

    // reference
    // 2543 => 1 XXX
    // 3000 => 1
    // 1920 => ?

    const windowWidth = $(window).width();
    const referenceWidth = windowWidth > 2543 ? 3200 : 2543;

    // referenceWidth / window.width = scale;

    let scale = referenceWidth / windowWidth;

    $("#site-header-video").css({
        '-webkit-transform' : 'scale(' + scale + ')',
        '-moz-transform'    : 'scale(' + scale + ')',
        '-ms-transform'     : 'scale(' + scale + ')',
        '-o-transform'      : 'scale(' + scale + ')',
        'transform'         : 'scale(' + scale + ')'
    });

    /*---------------------------------------------------
      Countdown JS
    ---------------------------------------------------*/

    var $countdownClass = $('.countdown-clock');

    if ($countdownClass.length > 0) {
        var datetime = $countdownClass.data('datetime'); // Month Days, Year HH:MM:SS
        var date = new Date(datetime);
        var now = new Date();
        var diff;
        if (datetime == "" || datetime == null || date < now) {
            diff = 0;
        } else {
            diff = (date.getTime() / 1000) - (now.getTime() / 1000);
        }
        var clock = $countdownClass.FlipClock(diff, {
            // ... your options here
            clockFace: 'DailyCounter',
            countdown: true,
        });
    }

    /*---------------------------------------------------
      Donut Chart 01
    ---------------------------------------------------*/

    var ctx = $("#distChart");

    // And for a doughnut chart
    var distChart = new Chart(ctx, {
        type: 'doughnut',
        plugins: [
            {
                beforeInit: (chart, options) => {
                    chart.legend.afterFit = () => {
                        console.log("afterFit()" + chart.legend.margins);
                        if (chart.legend.margins) {
                            // Put some padding around the legend/labels
                            chart.legend.options.labels.padding = 200;
                            // Because you added 20px of padding around the whole legend,
                            // you will need to increase the height of the chart to fit it
                            chart.height += 140;
                        }
                    };
                }
            }
        ],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 1,
            legend: {
                title: "Test",
                display: true,
            },
            cutoutPercentage: 60
        },
        data: {
            labels: ["Seed", "Team", "Marketing", "Rewards", "Burn", "Airdrop", "Presale", "Liquidity"],
            datasets: [{
                label: "Galaxy Volume",
                //data: [8, 10, 15, 15, 10, 2, 25, 15],
                data: [110400000000000, 138000000000000, 207000000000000, 207000000000000, 138000000000000, 27600000000000, 345000000000000, 207000000000000],
                backgroundColor: ["#9D55C4", "#0C96C9", "#1BB5AA", "#16DC7F", "#1C1F23", "#AA1FFF", "#1CFF00", "#AA99FF"],
                borderWidth: 0
            }]
        }
    });

    var controller = new ScrollMagic.Controller();
    $(".js-scrollanim").each(function () {
        var ourScene2 = new ScrollMagic.Scene({
            triggerElement: this,
            reverse: false,
            triggerHook: 0.7,
        })
            .setClassToggle(this, "js-scrollanim-active")
            .addTo(controller);
    });

    Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
        get: function () {
            return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
        }
    });

    setTimeout(() => {
        const videoElement = document.getElementById('site-header-video');
        if (videoElement.playing) {
            // video is already playing so do nothing
            console.log("Video is already playing!");
        } else {
            // video is not playing
            // so play video now
            console.log("Video is not playing, so invoking it to play!");
            videoElement.play();
        }
    }, 1000);

    $("#play-game").hover(() => {
        $("#play-game").html("COMING SOON");
    }, () => {
        $("#play-game").html("PLAY GAME");
    });

    //$("#team").attr("src", "images/team.jpg");

});

/*---------------------------------------------------
     Owl Carousel
   ---------------------------------------------------*/

var $testimonalSlider = $('.testimonial-slider');

if ($testimonalSlider.length && $.fn.owlCarousel) {
    $testimonalSlider.owlCarousel({
        loop: false,
        autoplay: false,
        autoHeight: true,
        items: 1,
        navText: [
            "<img src=\"images/arrow-left.svg\" class=\"dark\"><img src=\"images/arrow-left-black.svg\" class=\"light\">",
            "<img src=\"images/arrow-right.svg\" class=\"dark\"><img src=\"images/arrow-right-black.svg\" class=\"light\">"
        ],
        responsive: {
            0: {
                dots: true,
                nav: false,
            },
            768: {
                dots: false,
                nav: true,
            }
        }
    });
}

function navigateToAirdrop() {
    window.open('https://form.jotform.com/213185240772958', 'blank', 'scrollbars=yes,toolbar=no,width=700,height=500');
}

/*
 * // End $ Strict Function
 * ------------------------ */