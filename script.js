document.addEventListener('DOMContentLoaded', () => {

    function calculate() {
        const alatField = document.getElementById('pilihAlat');
        const hariField = document.querySelector('#haris input[type="number"]');

        const selectedAlat = alatField.value;
        const jumlahHari = parseInt(hariField.value);

        let hargaPerHari = 0;

        if (selectedAlat === 'tenda') {
            hargaPerHari = 100000;
        } else if (selectedAlat === 'sleeping') {
            hargaPerHari = 50000;
        } else if (selectedAlat === 'kompor') {
            hargaPerHari = 75000;
        }

        const totalBiaya = hargaPerHari * jumlahHari;

        const result = document.getElementById('totalBiayaResult');
        result.textContent = 'Total Biaya Sewa: Rp ' + totalBiaya;
    }

    document.getElementById('button').addEventListener('click', (event) => {
        event.preventDefault();
        calculate();
        if (confirm('Apakah Anda ingin melanjutkan dengan pembelian ini?')) {
            alert('Pembelian berhasil!');
        }
    });
});