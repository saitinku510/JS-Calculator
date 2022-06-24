let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName('button'));
let dataCapture = [];


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
                    var data = document.getElementById('data');
                    data = display.innerText;
                    display.innerText = eval(display.innerText);
                    var result = document.getElementById('result');
                    result = display.innerText;
                    
                    let obj = {
                        data : data,
                        result : result,
                    }
                    dataCapture.push(obj);
                    genUI();
                }catch {
                    display.innerText = 'Error!';
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});


function genUI(){
    document.getElementById("tablebody").innerHTML="";
    dataCapture.forEach(function(s ,i){
    var tableRow = document.createElement("tr");
    tableRow.innerHTML = i+1;
    
    for(var key in s){
        var tableStructure = document.createElement("td");
        tableStructure.innerHTML = s[key];
        tableRow.appendChild(tableStructure);
        }
        var btn = document.createElement("td");
        btn.innerHTML = '<button>Del</button>';
        tableRow.appendChild(btn);
        document.getElementById("tablebody").appendChild(tableRow);
        
        btn.addEventListener('click', () => {
        delRow(i);
        });
    });

}

function delRow(i){
    dataCapture.splice(i,1)
    genUI();
}
