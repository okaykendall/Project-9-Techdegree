// alert banner
const alertBanner = document.getElementById('alert');
alertBanner.innerHTML = 
`
<div class="alert-banner">
<p><strong>Alert:</strong>  You have <strong>72</strong>  overdue tasks to complete
</p>
<p class="alert-banner-close">x</p>
</div>
`

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
        window.setTimeout(function(){
            alertBanner.style.opacity = 0;
            alertBanner.style.transform = 'scale(0)';
        }, 600);
    }
});


//daily bar chart

const dailyCanvas = document.getElementById('daily-chart');
const dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'w', 'T', 'F', 'S'], 
        datasets: [{
            label: '# of Hits',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: '#7477BF',
            borderColor: 'lightblue',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//donut chart

const mobileCanvas = document.getElementById('donut-chart');

const mobileData = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
        label: '# of Users',
        data: [1500, 500, 450],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

//messaging section

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if(user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`)
    }
});