/* Created By Mirza Mohibul Hasan*/
// For Blog page open
document.getElementById('blog').addEventListener('click', function () {
    window.location.href = "blog.html";
});
/*Area calculation section start here*/

/*function for Rectangle and Triangle area*/
function inputFieldArea(firstField, secondField) {
    const valueFirstField = document.getElementById(firstField).value;
    const valueFirst = parseFloat(valueFirstField);
    const valueSecondField = document.getElementById(secondField).value;
    const valueSecond = parseFloat(valueSecondField);
    const mulltiply = valueFirst * valueSecond;
    return mulltiply;
}
// function for area of others
function inputElementArea(firstField, secondField) {
    const valueFirstField = document.getElementById(firstField).innerText;
    const valueFirst = parseFloat(valueFirstField);
    const valueSecondField = document.getElementById(secondField).innerText;
    const valueSecond = parseFloat(valueSecondField);
    const mulltiply = valueFirst * valueSecond;
    return mulltiply;
}
let count = 0;
// For Triangle
document.getElementById('calculate-triangle').addEventListener('click', function () {
    const triangleArea = (.5 * inputFieldArea('triangle-b', 'triangle-h')).toFixed(2);
    if (isNaN(triangleArea) == false && triangleArea > 0) {
        const areaContainer = document.getElementById('area-container');
        const newTr = document.createElement('tr');
        count += 1;
        newTr.innerHTML = `
        <td class="text-left">${count}.Triangle</td>
        <td>${triangleArea}cm<sup>2</sup></td>
        <td><button class="bg-blue-500 px-2 py-1 rounded text-white text-sm">Convert to m<sup>2</sup></button></td>

    `;
        areaContainer.appendChild(newTr);
    }
    else {
        alert('Enter Valid Number');
    }
});
// For rectangle
document.getElementById('calculate-rectangle').addEventListener('click', function () {
    const rectangleArea = inputFieldArea('rectangle-w', 'rectangle-l').toFixed(2);
    if (isNaN(rectangleArea) == false && rectangleArea > 0) {
        const areaContainer = document.getElementById('area-container');
        const newTr = document.createElement('tr');
        count += 1;
        newTr.innerHTML = `
        <td class="text-left">${count}.Rectangle</td>
        <td>${rectangleArea}cm<sup>2</sup></td>
        <td><button class="bg-blue-500 px-2 py-1 rounded text-white text-sm">Convert to m<sup>2</sup></button></td>

    `;
        areaContainer.appendChild(newTr);
    }
    else {
        alert('Enter Valid Number');
    }
});
// For Parallelogram
document.getElementById('calculate-parallelogram').addEventListener('click', function () {
    const parallelogramArea = inputElementArea('parallelogram-b', 'parallelogram-h').toFixed(2);
    const areaContainer = document.getElementById('area-container');
    const newTr = document.createElement('tr');
    count += 1;
    newTr.innerHTML = `
        <td class="text-left">${count}.Parallelogram</td>
        <td>${parallelogramArea}cm<sup>2</sup></td>
        <td><button class="bg-blue-500 px-2 py-1 rounded text-white text-sm">Convert to m<sup>2</sup></button></td>

    `;
    areaContainer.appendChild(newTr);
});
// For Rhombus
document.getElementById('calculate-rhombus').addEventListener('click', function () {
    const rhombusArea = (.5 * inputElementArea('rhombus-d1', 'rhombus-d2')).toFixed(2);
    const areaContainer = document.getElementById('area-container');
    const newTr = document.createElement('tr');
    count += 1;
    newTr.innerHTML = `
        <td class="text-left">${count}.Rhombus</td>
        <td>${rhombusArea}cm<sup>2</sup></td>
        <td><button class="bg-blue-500 px-2 py-1 rounded text-white text-sm">Convert to m<sup>2</sup></button></td>

    `;
    areaContainer.appendChild(newTr);

});
// For Pentagon
document.getElementById('calculate-pentagon').addEventListener('click', function () {
    const pentagonArea = (.5 * inputElementArea('pentagon-p', 'pentagon-b')).toFixed(2);
    const areaContainer = document.getElementById('area-container');
    const newTr = document.createElement('tr');
    count += 1;
    newTr.innerHTML = `
        <td class="text-left">${count}.Pentagon</td>
        <td>${pentagonArea}cm<sup>2</sup></td>
        <td><button class="bg-blue-500 px-2 py-1 rounded text-white text-sm">Convert to m<sup>2</sup></button></td>

    `;
    areaContainer.appendChild(newTr);
});
// For Ellipse
document.getElementById('calculate-ellipse').addEventListener('click', function () {
    let ellipseArea = (Math.PI * inputElementArea('ellipse-a', 'ellipse-b')).toFixed(2);
    const areaContainer = document.getElementById('area-container');
    const newTr = document.createElement('tr');
    count += 1;
    newTr.innerHTML = `
        <td class="text-left">${count}.Ellipse</td>
        <td>${ellipseArea}cm<sup>2</sup></td>
        <td><button class="bg-blue-500 px-2 py-1 rounded text-white text-sm">Convert to m<sup>2</sup></button></td>

    `;
    areaContainer.appendChild(newTr);
});
/*Area calculation section end here*/

/*Set random background color on mouse over start here*/
function getNewColor() {
    var symbols;
    var color;
    symbols = "0123456789ABCDEF";
    color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    return color;
}
function setBackground(divID) {
    document.getElementById(divID).addEventListener('mouseenter', function (event) {
        document.getElementById(divID).style.background = getNewColor();
    })
}
// Trinagle
setBackground('triangleBackground');
// Rectangle
setBackground('rectangleBackground');
// Parallelogram
setBackground('parallelogramBackground');
// Rhombus
setBackground('rhombusBackground');
// Pentagon
setBackground('pentagonBackground');
// Ellipse
setBackground('ellipseBackground');
/*Set random background color on mouse over end here*/

/*additional custom value added section start here*/
function setElemntValue(editBtn, editMenu, checkBtn, previousFirstValue, previousSecondValue, firstInput, secondinput) {
    document.getElementById(editBtn).addEventListener('click', function () {
        document.getElementById(editMenu).style.display = 'block';

        document.getElementById(checkBtn).addEventListener('click', function () {
            const num1 = parseFloat(document.getElementById(firstInput).value);
            const num2 = parseFloat(document.getElementById(secondinput).value);
            if (isNaN(num1) == true || isNaN(num2) == true || num1 <= 0 || num2 <= 0) {
                document.getElementById(firstInput).value = '';
                document.getElementById(secondinput).value = '';
                return alert('Enter valid number');
            }
            else {
                document.getElementById(previousFirstValue).innerText = num1;
                document.getElementById(previousSecondValue).innerText = num2;
                document.getElementById(editMenu).style.display = 'none';
                document.getElementById(firstInput).value = '';
                document.getElementById(secondinput).value = '';
            }
        });

    });

}
// Parallelogram
setElemntValue('parallelogram-edit-btn', 'parallelogram-edit-menu', 'parallelogram-check-btn', 'parallelogram-b', 'parallelogram-h', 'parallelogram-input-b', 'parallelogram-input-h')
// Rhombus
setElemntValue('rhombus-edit-btn', 'rhombus-edit-menu', 'rhombus-check-btn', 'rhombus-d1', 'rhombus-d2', 'rhombus-input-d1', 'rhombus-input-d2');
// Pentagon
setElemntValue('pentagon-edit-btn', 'pentagon-edit-menu', 'pentagon-check-btn', 'pentagon-p', 'pentagon-b', 'pentagon-input-p', 'pentagon-input-b');
// Ellipse
setElemntValue('ellipse-edit-btn', 'ellipse-edit-menu', 'ellipse-check-btn', 'ellipse-a', 'ellipse-b', 'ellipse-input-a', 'ellipse-input-b');
/*additional custom value added section end here*/