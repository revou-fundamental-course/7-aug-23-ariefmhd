function calculatetriangle() {
  let alasInput = document.getElementById('alas-segitiga');
  let tinggiInput = document.getElementById('tinggi-segitiga');
  let errorMessage = document.getElementById('error-message-luas');

  let alas = parseFloat(alasInput.value);
  let tinggi = parseFloat(tinggiInput.value);

  if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
    errorMessage.textContent = 'Masukkan Dulu Input Kamu Ya!!!';
    return;
  }

  errorMessage.textContent = '';

  // Menghitung luas segitiga
  let luas = 0.5 * alas * tinggi;

  let calculationSteps =
    'L = 1/2 x a x t<br>' +
    'L = 1/2 x ' +
    alas +
    ' x ' +
    tinggi +
    '<br>' +
    'L = ' +
    luas;

  // Menampilkan langkah-langkah perhitungan dan hasil, di dalam kotak hasil
  document.getElementById('result-text').innerHTML = calculationSteps;
}

function resetForm() {
  document.getElementById('alas-segitiga').value = '';
  document.getElementById('tinggi-segitiga').value = '';
  document.getElementById('result-text').textContent = '';
  document.getElementById('error-message-luas').textContent = '';

  document.getElementById('side-a').value = '';
  document.getElementById('side-b').value = '';
  document.getElementById('side-c').value = '';
  document.getElementById('keliling-result-text').textContent = '';
  document.getElementById('error-message-keliling').textContent = '';
}

function showLuasSection() {
  document.querySelector('.luas').style.display = 'block';
  document.querySelector('.keliling').style.display = 'none';

  document.getElementById('luasButton').classList.add('active');
  document.getElementById('kelilingButton').classList.remove('active');
}

function showKelilingSection() {
  document.querySelector('.luas').style.display = 'none';
  document.querySelector('.keliling').style.display = 'block';

  document.getElementById('kelilingButton').classList.add('active');
  document.getElementById('luasButton').classList.remove('active');
}

showLuasSection();

function calculateKeliling() {
  let sisiAInput = document.getElementById('side-a');
  let sisiBInput = document.getElementById('side-b');
  let sisiCInput = document.getElementById('side-c');
  let errorMessage = document.getElementById('error-message-keliling');
  let resultText = document.getElementById('keliling-result-text');

  let sisiA = parseFloat(sisiAInput.value);
  let sisiB = parseFloat(sisiBInput.value);
  let sisiC = parseFloat(sisiCInput.value);

  if (
    isNaN(sisiA) ||
    isNaN(sisiB) ||
    isNaN(sisiC) ||
    sisiA <= 0 ||
    sisiB <= 0 ||
    sisiC <= 0
  ) {
    errorMessage.textContent = 'Masukkan Dulu Input Kamu Ya!!!';
    resultText.innerHTML = '';
    return;
  }

  errorMessage.textContent = '';

  let keliling = sisiA + sisiB + sisiC;

  let calculationSteps =
    'K = S1 + S2 + S3<br>' +
    'K = ' +
    sisiA +
    ' + ' +
    sisiB +
    ' + ' +
    sisiC +
    '<br>' +
    'K = ' +
    keliling;

  // Menampilkan langkah-langkah perhitungan dan hasil, di dalam kotak hasil
  resultText.innerHTML = calculationSteps;
}

// Logic ketika menekan tombol "Enter" pada salah satu input, fokus akan pindah ke input berikutnya
document.addEventListener('DOMContentLoaded', function () {
  let inputElements = document.querySelectorAll('input[type="number"]');

  for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        let currentIndex = Array.from(inputElements).indexOf(event.target);
        let nextIndex = currentIndex + 1;

        if (nextIndex < inputElements.length) {
          inputElements[nextIndex].focus();
        }
      }
    });
  }
});
