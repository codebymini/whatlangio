const CHART = document.getElementById("chart");
console.log(CHART);

let chart = new Chart(CHART, {
    type: 'doughnut',
    data: {
        labels:['Ruby', 'Python','Javascript','R'],
        datasets: [{
            label: 'My First Dataset',
            backgroundColor: [
                'rgb(99,255,242)',
                'rgb(54,235,157)',
                'rgb(156,255,86)',
                'rgb(41,45,53)',
            ],
            data: [30, 11, 4,12],
            hoverOffset: 4,}
        ]
}
});

