const form = document.querySelector('form')

form.addEventListener('submit', function (event)
{
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height <= 0 || isNaN(height))
    {
        result.innerHTML = 'Please enter valid height values.'
    }

    else if(weight === '' || weight <= 0 || isNaN(weight))
    {
        result.innerHTML = 'Please enter valid weight values.'
    }

    else 
    {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2)
        result.innerHTML = '<span>Your BMI is: ' + bmi + '</span>'
        if(bmi < 18.5)
        {
            result.innerHTML += '<br><br><span class="text-danger" style="color: red;">You are underweight.</span>'
        }
        else if(bmi >= 18.5 && bmi < 24.9)
        {
            result.innerHTML += '<br><br><span class="text-success" style="color: green;">You have a normal weight.</span>'
        }
        if(bmi >= 25 && bmi < 29.9)
        {
            result.innerHTML += '<br><br><span class="text-warning" style="color: orange;">You are overweight.</span>'
        }
       
    }

})