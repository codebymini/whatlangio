const CHART = document.getElementById("chart");
console.log(CHART);


var options = {
    elements: {
        arc: {
            borderWidth: 0,
            borderColor:'#ffffff',

        }
    }
};

const chart = new Chart(CHART, {
    type: 'bar',
    options: options,
    data: {
        labels:['Ruby','Python','Javascript','R'],
        datasets: [{
            label: 'Top %',
            backgroundColor: [
                'rgb(255,222,60)',
                'rgb(255,126,60)',
                'rgb(255,74,57)',
                'rgb(255,0,221)',
            ],
            data: [3.3, 11, 4,12],
            hoverOffset: 14,}

        ]


}

});

