window.onload = function () {
  //for commit
  var CANV_GAUGE_FONTS_PATH ='/fonts'
  var gaugeSpeed2 = new Gauge({
            renderTo: 'gauge-speed',
            width: 400,
            height: 400,
            glow: true,
            units: 'Km/h',
            title: false,
            minValue: 0,
            maxValue: 220,
            majorTicks: ['0', '20', '40', '60', '80', '100', '120', '140', '160', '180', '200', '220'],
            minorTicks: 2,
            strokeTicks: true,
            highlights: [{from: 160, to: 220, color: 'rgba(200, 50, 50, .75)'}],
            colors: {
                plate: '#222',
                majorTicks: '#20ddee',
                minorTicks: '#20ddee',
                title: '#fff',
                units: '#20ddee',
                numbers: '#20ddee',
                needle: {
                    start: 'rgba(200, 50, 50, .75)',
                    end: 'rgba(200, 50, 50, .75)',
                    circle: {
                        outerStart: 'rgba(200, 200, 200, 1)',
                        outerEnd: 'rgba(200, 200, 200, 1)'
                    },
                    shadowUp: true,
                    shadowDown: false
                },
                circle: {
                    shadow: false,
                    outerStart: '#333',
                    outerEnd: '#111',
                    middleStart: '#222',
                    middleEnd: '#111',
                    innerStart: '#111',
                    innerEnd: '#333'
                },
                valueBox: {
                    rectStart: '#222',
                    rectEnd: '#333',
                    background: '#babab2',
                    shadow: 'rgba(0, 0, 0, 1)'
                }
            },
            valueBox: {
                visible: true
            },
            valueText: {
                visible: true
            },
            needle: {
                type: 'arrow',
                width: 2,
                end: 72,
                circle: {
                    size: 7,
                    inner: false,
                    outer: true
                }
            },
            animation: {
                delay: 1000,
                duration: 5000,
                fn: 'linear'
            },
            updateValueOnAnimation: true
        });

        gaugeSpeed2.onready = function () {
            setInterval(function () {
                gaugeSpeed2.setValue(Math.random() * (165 - 120) + 120);
            }, 5000);
        };

        gaugeSpeed2.draw();

  var gaugespin = new Gauge({
            renderTo: 'gauge-spin',
            width: 250,
            height: 250,
            glow: false,
            units: 'r/min',
            title: false,
            minValue: 0,
            maxValue: 8,
            majorTicks: ['0', '2000', '4000', '6000', '8000'],
            minorTicks: 2,
            strokeTicks: true,
            highlights: [{from: 6, to: 8, color: 'rgba(200, 50, 50, .75)'}],
            colors: {
                plate: '#222',
                majorTicks: '#20ddee',
                minorTicks: '#20ddee',
                title: '#fff',
                units: '#20ddee',
                numbers: '#20ddee',
                needle: {
                    start: 'rgba(200, 50, 50, .75)',
                    end: 'rgba(200, 50, 50, .75)',
                    circle: {
                        outerStart: 'rgba(200, 200, 200, 1)',
                        outerEnd: 'rgba(200, 200, 200, 1)'
                    },
                    shadowUp: true,
                    shadowDown: false
                },
                circle: {
                    shadow: false,
                    outerStart: '#333',
                    outerEnd: '#111',
                    middleStart: '#222',
                    middleEnd: '#111',
                    innerStart: '#111',
                    innerEnd: '#333'
                },
                valueBox: {
                    rectStart: '#222',
                    rectEnd: '#333',
                    background: '#babab2',
                    shadow: 'rgba(0, 0, 0, 1)'
                }
            },
            valueBox: {
                visible: true
            },
            valueText: {
                visible: true
            },
            needle: {
                type: 'arrow',
                width: 2,
                end: 72,
                circle: {
                    size: 7,
                    inner: false,
                    outer: true
                }
            },
            animation: {
                delay: 0,
                duration: 5000,
                fn: 'linear'
            },
            updateValueOnAnimation: true
        });

        gaugespin.onready = function () {
            setInterval(function () {
                gaugespin.setValue(Math.random() * (165 - 120) + 120);
            }, 5000);
        };

        gaugespin.draw();
}