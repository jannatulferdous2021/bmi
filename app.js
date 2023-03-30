const calculateBtn = document.getElementById('calculateBtn');
const weightInput = document.getElementById('weightInput');
const heightInput = document.getElementById('heightInput');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', function() {
  const weight = weightInput.value;
  const height = heightInput.value;
  
  if (weight && height) {
    const bmi = weight / (height * height);
    result.innerHTML = `Your BMI is ${bmi.toFixed(2)}.`;
  } else {
    result.innerHTML = 'Please enter both weight and height values.';
  }
});