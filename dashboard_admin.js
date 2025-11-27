
Chart.register(ChartDataLabels);
const hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
const jumlahPengunjung = [529, 404, 374, 561, 398];
const cerita = ['To Dilaling', 'Bawang Merah dan Bawang Putih', 'Lutung Kasarung', 'Abo Mamongkuroit dan Tulap Si Raksasa'];
const jumlahPembaca = ['305', '239', '198', '83'];
const ctx1 = document.getElementById('grafikPengunjung').getContext('2d');
const ctx2 = document.getElementById('grafikTerpopuler').getContext('2d');
const gradient = ctx1.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgb(95, 169, 95)');
gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
const chart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: hari,
        datasets: [{
            label: 'Jumlah Pengunjung',
            data: jumlahPengunjung,
            fill: true,
            backgroundColor: gradient,

        }]
    },
    options: {
        indexAxis: 'x',
        responsive: true,
        plugins: {
            datalabels: {
                color: 'black',
                font: {
                    weight: '700',
                    
                },
                align: 'top',
                anchor: 'start',
                display: false,
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 100
                }
            },
        },
    }
});


const chart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: cerita,
        datasets: [{
            label: 'Jumlah Pembaca',
            data: jumlahPembaca,
            fill: true,
            backgroundColor: ['#8979FF', '#FF928A', '#3CC3DF', '#FFAE4C',],

        }]
    },
    options: {
        indexAxis: 'x',
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'right',
                align: 'center',
            },
            datalabels: {
                color: 'white',
                font: {
                    weight: '500',
                },
                align: 'center',
                anchor: 'center',
                display: true,
            },
        },
        scales: {
            y: {
                display: false,
                beginAtZero: true,
            },
            x: {
                display: false,

            }
        }
    }
});




