function convertMoolahToPounds() {
    const moolahAmount = parseFloat(document.getElementById('moolah').value);
    const exchangeRate = 0.02; // £0.02 = 1 Moolah
    const poundsAmount = moolahAmount * exchangeRate;
    document.getElementById('resultMoolahToPounds').innerText = `£${poundsAmount.toFixed(2)}`;
}

function convertPoundsToMoolah() {
    const poundsAmount = parseFloat(document.getElementById('pounds').value);
    const exchangeRate = 0.02; // £0.02 = 1 Moolah
    const moolahAmount = poundsAmount / exchangeRate;
    document.getElementById('resultPoundsToMoolah').innerText = `${moolahAmount.toFixed(2)} Moolah`;
}

function multiplyByFactor() {
    const inputNumber = parseFloat(document.getElementById('multiply').value);
    const result = inputNumber * 1.25;
    document.getElementById('multiply').value = result.toFixed(2);
}

function divideByFactor() {
    const inputNumber = parseFloat(document.getElementById('divide').value);
    const result = inputNumber / 2;
    document.getElementById('divide').value = result.toFixed(2);
}
