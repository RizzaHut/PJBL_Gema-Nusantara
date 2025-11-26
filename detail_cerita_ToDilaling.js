const openUlasan = document.getElementById('open_ulasan');
const closeUlasan = document.getElementById('close_ulasan');
const popup = document.getElementById('popup');

function openPopUpUlasan() {
    popup.classList.add('active');
}
function closePopUpUlasan() {
    popup.classList.remove('active');
}

openUlasan.addEventListener('click', openPopUpUlasan);
closeUlasan.addEventListener('click', closePopUpUlasan);

Chart.register(ChartDataLabels);
const jumlahRating = ['5', '4', '3', '2', '1'];
const rating = [127, 51, 3, 0, 0];
const ctx = document.getElementById('grafikRating').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: jumlahRating,
        datasets: [{
            label: 'Jumlah Rating',
            data: rating,
            backgroundColor: ['#FFD700'],
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            datalabels: {
                color: 'black',
                font: {
                    weight: '500',
                },
                align: 'end',
                anchor: 'end',
                display: true,
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 8
                }
            }
        }
    }
});
