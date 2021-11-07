const CHART = document.getElementById("chart");
var data = $('chartdata').attr('data');
var listprobabilities = document.getElementById('chartdata').getAttribute('data');
listprobabilities = listprobabilities.split("'").join('"');
console.log(listprobabilities);

const obj = JSON.parse(listprobabilities)

var sortedArray = obj.sort(function(a, b) {
    return b[1] - a[1];
  });

var names = [];
var values = [];

for (let i = 0; i < 4; i++){
    names.push(sortedArray[i][0])
    values.push(sortedArray[i][1]*100)
}

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
        labels:names,
        datasets: [{
            label: 'Top %',
            backgroundColor: [
                'rgb(255,222,60)',
                'rgb(255,126,60)',
                'rgb(255,74,57)',
                'rgb(255,0,221)',
            ],
            data: values,
            hoverOffset: 14,}

        ]


}

});

