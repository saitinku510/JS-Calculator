let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    let data = document.getElementById('data');
                    data.innerHTML = display.innerText;
                    display.innerText = eval(display.innerText);
                    let result = document.getElementById('result');
                    result.innerHTML = display.innerText;
                }catch {
                    display.innerText = 'Error!';
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});

