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
                    let data = document.getElementById('data');
                    data = display.innerText;
                    display.innerText = eval(display.innerText);
                    let result = document.getElementById('result');
                    result = display.innerText;
                    let obj = {
                        data : data,
                        result : result,
                    }
                    dataCapture.push(obj);
                    console.log(dataCapture);	
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
    dataCapture.forEach(function(s,i){
    var nr=document.createElement("tr")
    nr.innerHTML=i+1
                                            
    for(var k in s){
        var nd=document.createElement("td")
        nd.innerHTML=s[k]
        nr.appendChild(nd);															
        }
                    
    document.getElementById("tablebody").appendChild(nr)											
    });
    
}
