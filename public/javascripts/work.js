var ExampleApplication = React.createClass({
        render: function() {
          var elapsed = Math.round(this.props.elapsed  / 100);
          var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
          var message =
            'React has been successfully running for ' + seconds + ' seconds.';

          return React.DOM.p(null, message);
        }
      });

      // Call React.createFactory instead of directly call ExampleApplication({...}) in React.render
      var ExampleApplicationFactory = React.createFactory(ExampleApplication);

      var start = new Date().getTime();
      setInterval(function() {
        ReactDOM.render(
          ExampleApplicationFactory({elapsed: new Date().getTime() - start}),
          document.getElementById('example')
        );
      }, 50);
window.onload = function () {
  //for commit
  var CANV_GAUGE_FONTS_PATH ='/fonts'
  var gaugeSpeed2 = new Gauge({
            renderTo: 'speed',
            width: 400,
            height: 400,
            glow: false,
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
                majorTicks: '#f5f5f5',
                minorTicks: '#ddd',
                title: '#fff',
                units: '#ccc',
                numbers: '#eee',
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
                delay: 10,
                duration: 1500,
                fn: 'linear'
            },
            updateValueOnAnimation: true
        });

        gaugeSpeed2.onready = function () {
            setInterval(function () {
                gaugeSpeed2.setValue(Math.random() * (165 - 120) + 120);
            }, 1500);
        };

        gaugeSpeed2.draw();
}