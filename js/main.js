$( document ).ready(function() {
  var scatterChart = new Chartist.Line('.scatter-chart', {
  labels: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
  series: [
    [null,
    {meta: "MongoDB", value: 0.5},
    {meta: "Python", value: 3},
    {meta: "Chef", value: 1.2},
    {meta: "AngularJS", value: 1.5},
    null,
    {meta: "Java", value: 5},
    {meta: "jQuery/JS", value: 9},
    {meta: "PHP/Frameworks", value: 8}, null],
    [null,
    null,
    {meta: "Karma/Jasmine", value: 1.75},
    {meta: "AWS (S3, EC2, Lambda)", value: 0.45},
    {meta: "Rails", value: 2.2},
    {meta: "Ruby", value: 3.5},
    {meta: "Gulp/Grunt/Webpack", value: 1.2},
    {meta: "SQL/MySQL", value: 6},
    {meta: "Bower/NPM", value: 4}, null],
    [null,
    null,
    null,
    {meta: "CoffeeScript", value: 2.4},
    {meta: "C#", value: 5},
    {meta: "CMSs", value: 2.5},
    {meta: "Backbone", value: 3},
    {meta: "Sass", value: 3},
    null, null],
    [null,
    null,
    null,
    null,
    {meta: "C++", value: 3.7},
    {meta: "Capistrano", value: 0.7},
    null,
    {meta: "Jenkins", value: 0.6},
    null, null]

  ]
  }, {
    height: '400px',
    fullWidth: true,
    showLine: false,
    axisX: {
      offset: 100
    },
    axisY: {
      offset: 100
    },
    plugins: [
      Chartist.plugins.ctPointLabels({
        textAnchor: 'middle'
      }),
      Chartist.plugins.ctAxisTitle({
          axisX: {
              axisTitle: 'Level of Competency',
              axisClass: 'ct-axis-title',
              offset: {
                  x: 0,
                  y: 60
              },
              textAnchor: 'middle'
          },
          axisY: {
              axisTitle: 'Years of Experience',
              axisClass: 'ct-axis-title',
              offset: {
                  x: -50,
                  y: 60
              },
              flipTitle: true
          }
      })
    ]
  });

var barChart = new Chartist.Bar('.bar-chart', {
  labels: ['Testing', 'Debugging', 'Documentation', 'Teamwork', 'Design', 'Architecture', 'Continuous Integration', 'Fundamentals', 'Backend', 'Frontend', 'Ingenuity', 'Passion'],
  series: [
    [65, 90, 57, 82, 80, 70, 83, 89, 92, 85, 68, 95]
  ]
}, {
  height: '400px',
  axisX: {
    offset: 0
  },
  reverseData: true,
  seriesBarDistance: 100,
  horizontalBars: true,
  axisY: {
    offset: 100
  }
});
});