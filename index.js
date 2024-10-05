const yearInput = document.getElementById("year-input");
const monthInput = document.getElementById("month-input");
const dayInput = document.getElementById("day-input");
const icon = document.querySelector('.icon');

const dayResult = document.querySelector('.day-result');
const monthResult = document.querySelector('.month-result');
const yearResult = document.querySelector('.year-result');

const monthCalc = document.querySelector('.month-calc');
const dayCalc = document.querySelector('.day-calc');



icon.addEventListener('click', () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1; // Months are 0-indexed, so we add 1
    const currentDay = date.getDate();

    if (Number(yearInput.value) > currentYear)  {
        return;
    }

    if ( ((Number(yearInput.value)) && 
    (Number(monthInput.value)) && 
    (Number(dayInput.value))) == '') {
        alert("Input fields are required");
        return;
    }
    
    
    // Convert input values to numbers
    let year = currentYear - Number(yearInput.value);
    let month = currentMonth - Number(monthInput.value);
    let day = currentDay - Number(dayInput.value);

    
    if (currentDay < dayInput.value) {
        day = (30 - dayInput.value) + currentDay;
        month--;

        if (month < 0) {
            month = 12 + month;
            year--
        }
    }

    if (month < 0) {
        month = 12 + month;
        year--
    }
    
    // if (month < 0) {
    //     month = 11; // Set month to December (0-based index)
    //     year--; // Decrement the year
    // }
    


    // Check if any of the values are NaN
    if (
        !isNaN(year) &&
        !isNaN(month) &&
        !isNaN(day)
    ) {
        yearResult.innerHTML = year;
        monthResult.innerHTML = month;
        dayResult.innerHTML = day;
    } else {
        alert('Please enter a valid number');
    }

    // Calculate day of the week
    let days = day;
    if(days <= 1) {
        dayCalc.innerHTML = "day"
    } else {
        dayCalc.innerHTML = "days"
    }

    let months = month;
    if(months <= 1) {
        monthCalc.innerHTML = "month"
    } else {
        monthCalc.innerHTML = "months"
    }
});

console.log(currentMonth);





// icon.addEventListener('dblclick', () => {
//     yearInput.value = '';
//     monthInput.value = '';
//     dayInput.value = '';
//     dayResult.innerHTML = '--';
//     monthResult.innerHTML = '--';
//     yearResult.innerHTML = '--';
// });
