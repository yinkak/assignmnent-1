var i = 2;

function calculatePercentage(a,b)
{
    if (b === 0) {
        return NaN; // Avoid division by zero
    }
    return ((a/b)*100).toFixed(2);
}



var num = document.getElementById('grade');
var den = document.getElementById('divisor');
var percentage = document.getElementById('percent1');

num.addEventListener("input", ()=> eval(num,den,percentage));
den.addEventListener("input", ()=> eval(num, den, percentage));

function eval(num,den, percentage){
    var a = parseFloat(num.value) || 0;
    var b = parseFloat(den.value) || 0;
    var c = calculatePercentage(a,b);
    percentage.innerHTML = c + " %";
    //document.getElementById("percent1").appendChild(percentage);
}




function addRow(){
    var row = document.createElement('tr');
    var cell1 = document.createElement('td');
    cell1.innerHTML = `activity ${i}`;
    var cell2 = document.createElement('td');
    cell2.innerHTML = `a${i}`;
    var cell3 = document.createElement('td');
    cell3.innerHTML = ` <form action = "" id=" weight1" >
    <input type = "number" name = "weight" id ="weight${i}" class = "n"></form>`;
    var cell4 = document.createElement('td');
    cell4.innerHTML = `<form action ="#">
    <input type = "number" name = "grade" id = "grade${i}" class = "n" > / <form action = "#"><input type = "number" name= "divisor" id = "divisor${i}" class = "n"  ></form>`
    var cell5 = document.createElement('td');
    cell5.innerHTML = `<p id= "percent${i}" name = "percentages"> </p>`;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);

    let table = document.getElementById('myTable');
    /*var del = document.createElement('button');
    del.innerHTML = "<id = del> x";
    del.addEventListener("click", ()=> {
        table.removeChild(row);
        i--;
        });
    row.appendChild(del);*/
    table.appendChild(row);
    //functionality to dynamically calculate the percentage of the added row
    var top = document.getElementById(`grade${i}`);
    var bottom = document.getElementById(`divisor${i}`);
    console.log(top);
    var percentage = document.getElementById(`percent${i}`);

    top.addEventListener("input", ()=> eval(top,bottom,percentage));
    bottom.addEventListener("input", ()=> eval(top,bottom,percentage));
    i++;
}

function calculateMean(){
    var sum = 0;
    let topArray = document.getElementsByName('grade');
    let bottomArray = document.getElementsByName('divisor');
    for (j = 0; j< topArray.length; j++){
        sum += (parseFloat(topArray[j].value) / parseFloat(bottomArray[j].value));
    }
    //let bottoms = document.getElementsByName('divisor');
    /*if(topArray.length != bottomArray.length)
    {
        alert("Please make sure you have the same number of grades and divisors");
        return 0;
    }*/
    {
    var mean = (sum/(topArray.length)) * 100;
    return mean;
    }
    
}

function calculateWeightedMean(){
    var sum = 0;
    var WeightedSum = 0;
    let topArray = document.getElementsByName('grade');
    let bottomArray = document.getElementsByName('divisor');
    let weightArray = document.getElementsByName('weight');
    for (j = 0; j< topArray.length; j++){
        if (isNaN(parseFloat(weightArray[j].value)))
        {
            return "invalid input ensure that all weights are entered in "
        }
        sum += (parseFloat(topArray[j].value) * (parseFloat(weightArray[j].value) /parseFloat(bottomArray[j].value)));
    }
    for (j = 0; j< weightArray.length; j++)
    {
        WeightedSum += parseFloat(weightArray[j].value);
    }

    var WeightedMean = (sum / WeightedSum) * 100;
    return WeightedMean;
    }


window.onload = function() {
    // Initial input elements
    var num = document.getElementById('grade1');
    var den = document.getElementById('divisor1');
    var percentage = document.getElementById('percent1');

    // Add event listeners to initial inputs
    num.addEventListener('input', () => eval(num, den, percentage));
    den.addEventListener('input', () => eval(num, den, percentage));

    // Add event listener to the add row button
    document.getElementById('addRowButton').addEventListener('click', addRow);
}

function showMeanResult(){
    let newElement = document.createElement('p')
    let avg = calculateMean();
    newElement.innerHTML = `${avg}%`;
    let r = document.getElementById('result');
    r.innerHTML = '';
    r.appendChild(newElement);
}

function showWeightedResult(){
    let newElement = document.createElement('p');
    let avg = calculateWeightedMean();
    newElement.innerHTML = `${avg}%`;
    let r = document.getElementById('result');
    r.innerHTML = '';
    r.appendChild(newElement);
}

var but1 = document.getElementById('addrow');
but1.addEventListener('click', addRow);

/*window.addEventListener('click', addRow);*/



