'use strict';

let canvasElem = document.getElementById('chart')


function renderChart() {
    
    
    let chartArray = new AppState();
    chartArray.instantiateProducts();
    chartArray.loadItems();
    let votesArray = [];
    let viewsArray = [];
    let namesArray = [];
    
    
    for (let i = 0; i < chartArray.allProducts.length; i++){
       votesArray.push(chartArray.allProducts[i].timesClicked);
       viewsArray.push(chartArray.allProducts[i].timesShown);
       namesArray.push(chartArray.allProducts[i].name);
    }



    new Chart(chart, {
        type: 'bar',
        data: {
          labels: namesArray,
          datasets: [{
            label: '# of Votes',
            data: votesArray,
            borderWidth: 1,
            backgroundColor: '#9EB384'
          },
          {
            label: 'Views',
            data: viewsArray,
            borderWidth: 1,
            backgroundColor: '#435334'
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
}

renderChart();
