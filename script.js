window.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button);

    let divContainer = document.createElement('div');
    divContainer.classList.add('div-container');
    document.body.appendChild(divContainer);

    function randomColor() {
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        return randomColor;
    }

    let squareCount = 1;

    button.addEventListener('click', function () {
        let newDiv = document.createElement('div');
        newDiv.classList.add('div-square');
        newDiv.id = `${squareCount++}`;

        divContainer.appendChild(newDiv);

        let divSpan = document.createElement('span')
        divSpan.classList.add('divSpanText');
        newDiv.appendChild(divSpan);
        
        idText = document.createTextNode(`${newDiv.id}`);
        divSpan.appendChild(idText);

        //Square Background Changer
        newDiv.addEventListener('click', function() {
            newDiv.style.backgroundColor = randomColor();
        });

        //If Square Number is Even
        newDiv.addEventListener('dblclick', function() {
            if (this.id % 2 == 0 & this.nextSibling === null) {
                alert('There is no square after me to delete!')
            } else if (this.id % 2 == 0) {
                this.nextSibling.remove();
            }
        });
        
        //If Square Number is Odd
        newDiv.addEventListener('dblclick', function() {
            if (this.id % 2 !== 0 & this.previousSibling === null) {
                alert('There is no square before me to delete!');
            } else if (this.id % 2 !== 0) {
                this.previousSibling.remove();
            }
        });
        
    });




});