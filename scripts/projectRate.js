window.addEventListener('DOMContentLoaded', () => {
    const hiborData = document.getElementById('hiborData');

    // Fetch the JSON data
    fetch('https://api.hkma.gov.hk/public/market-data-and-statistics/monthly-statistical-bulletin/er-ir/hk-interbank-ir-daily?segment=hibor.fixing')
        .then(response => response.json())
        .then(data => {
            // Extract the records from the JSON data
            const records = data.result.records;

            // Iterate over the records and create table rows
            records.forEach(record => {
                const row = document.createElement('tr');
                const dateCell = document.createElement('td');
                dateCell.textContent = record.end_of_day;
                row.appendChild(dateCell);

                // Iterate over the interest rates and create table cells
                for (const key in record) {
                    if (key.startsWith('ir_')) {
                        const rateCell = document.createElement('td');
                        rateCell.textContent = record[key] !== null ? record[key].toFixed(5) : 'N/A';
                        row.appendChild(rateCell);
                    }
                }

                hiborData.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching hibor data:', error);
        });
});