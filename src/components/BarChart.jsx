import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
const BarChart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

     const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
            },
        },
    };

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sept','Oct','Nov','Dec'];

     const data = {
        labels,
        datasets: [
            {
                label: 'Sales',
                data: [6.000, 19.000,2.500,28.000,9.000,45.000,9.000,20.000,31.000,4.000,30.000,26.000],
                // backgroundColor: '',
                backgroundColor: '#34CAA5'
            }
        ],
    };

    return <Bar data={data} options={options} />;
};

export default BarChart;
