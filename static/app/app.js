let barCtx = document.getElementById('myChart').getContext('2d');

async function getData() {
    const response = await fetch('http://localhost:8080/getWord');
    const data = await response.json();
    return dataName = data;
}

async function goldNuggets(key) { //-- Extract what is important for us from the data horde
    let rawData = await getData();
    let nuggets = [];

    for (let i = 0; i < rawData.length; i++) {
        nuggets.push(rawData[i][key]);
    }

    return nuggets;
}

async function handleNuggets(key) {
    let nugget = await goldNuggets(key);
    let data = [];

    let unique = _.uniq(_.map(nugget))
    let occurance = _.values(_.countBy(nugget))

    data.push(unique)
    data.push(occurance);

    return data;
}

handleNuggets();

async function drawChart() {
    data = await handleNuggets('word');
    console.log(data);

    var myChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: data[0],
            datasets: [{
                label: 'Occurance Of Each Word',
                data: data[1],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
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

drawChart();