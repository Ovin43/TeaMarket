document.getElementById('fetchButton').addEventListener('click', function () {
    fetch('https://opuihic7ih.execute-api.eu-north-1.amazonaws.com/tea/product/1001')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const resultElement = document.getElementById('result');
            resultElement.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});