
const dataType = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'Monthly Sales',
        backgroundColor: 'red',
        borderColor: 'yellow',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
    }],
};


const config = {
    type: 'line',
    data: dataType,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Monthly Sales Data',
            },
        },
    },
};


const ctx = document.getElementById('Chart').getContext('2d');
const myChart = new Chart(ctx, config);

myChart.options.plugins.tooltip = {
    callbacks: {
        label: function (context) {
            return `Sales: ${context.parsed.y}`;
        },
    },
};


const chartAnimation = anime({
    targets: myChart.data.datasets[0].data,
    easing: 'linear',
    delay: anime.stagger(800),
    duration: 1000,
    loop: true,
    direction: 'alternate',
    update: function (anime) {
        myChart.update();
    },
});
