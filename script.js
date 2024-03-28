function convertMoolahToPounds() {
    const moolahAmount = parseFloat(document.getElementById('moolah').value);
    const exchangeRate = 0.02; // £0.02 = 1 Moolah
    const poundsAmount = moolahAmount * exchangeRate;
    document.getElementById('result').innerText = `£${poundsAmount.toFixed(2)}`;
}
