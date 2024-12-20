let rowCount = 0;
let mathTotal = 0;
let englishTotal = 0;

function addRow() {
    const mathInput = document.getElementById('math');
    const englishInput = document.getElementById('english');
    const math = parseFloat(mathInput.value);
    const english = parseFloat(englishInput.value);

    if (isNaN(math) || isNaN(english)) {
        alert('Please enter valid numbers for Math and English grades.');
        return;
    }

    rowCount++;
    mathTotal += math;
    englishTotal += english;

    const average = ((math + english) / 2).toFixed(2);
    const tableBody = document.querySelector('#gradeTable tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
    <td>${rowCount}</td>
    <td>${math}</td>
    <td>${english}</td>
    <td>${average}</td>
    `;

    tableBody.appendChild(newRow);
    updateAverages();

    mathInput.value = '';
    englishInput.value = '';
}

function updateAverages() {
    const mathAverage = (mathTotal / rowCount).toFixed(2);
    const englishAverage = (englishTotal / rowCount).toFixed(2);
    const overallAverage = ((mathTotal + englishTotal) / (rowCount * 2)).toFixed(2);

    document.getElementById('mathAverage').textContent = mathAverage;
    document.getElementById('englishAverage').textContent = englishAverage;
    document.getElementById('overallAverage').textContent = overallAverage;
}