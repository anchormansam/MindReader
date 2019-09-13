var currentState = 0;
var states= [ 'page0', 'page1', 'page2', 'page3', 'page4', 'page5']
var insertSymbols = [ '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '?', '/', '='];
var insertNumbers = [];


//for(var i = 0; i < 100; i++){
    //  var symbol = randomSymbol();
    //  var obj = {"id": i, "symbol":symbol}
    //  if (i % 9 === 0 ){
        //     obj.symbol = selectedSymbol;
        // }
        // insertNumbers.push(obj);
        //}
        
        document.getElementById("myBtn").addEventListener("click", nextButtonClickHandler);
        document.getElementById('reset').innerHTML = "reset"; 
        document.getElementById("reset").addEventListener("click", resetButtonClickHandler);
        
        function randomSymbol(){
            return insertSymbols[Math.floor(Math.random() * 14) ]
        }
        
        var selectedSymbol = randomSymbol();

for(var i = 0; i < 100; i++){
    var symbol = randomSymbol();
    var obj = {"id": i, "symbol":symbol}
    if (i % 9 === 0 ){
        obj.symbol = selectedSymbol;

    }
    insertNumbers.push(obj.id + ':' + obj.symbol);
    
    
}

function nextButtonClickHandler(e){
    // increment state
    // render state
    currentState++;
    renderState();
}

function resetButtonClickHandler(e){
    currentState = 0;
    renderState();
}

//function numberSymbol(){
  //  var numberString = insertNumbers;
  //  var objString = insertSymbols;
  //  var result = numberString.concat(objString);
  //  document.getElementById('list').innerHTML = 'result';
//}


function renderState(){
    var text = "";
    // which state to render,
    // look at the currentState value
    // do a case switch based on the states[currentState]
        switch (states[currentState]) {
            case 'page0':
                text = "Can I read your mind?";
                document.getElementById('myBtn').innerHTML = "Go"; 
                document.getElementById('myBtn').style.visibility = "visible";
                document.getElementById('reset').style.visibility = "hidden";
                document.getElementById('reset').innerHTML = "reset"; 
                document.getElementById('result').style.visibility = "hidden";
                document.getElementById('options').style.display = "none";
                
            break;
            case 'page1': 
                text = "Pick a number 01 - 99";
                document.getElementById('myBtn').innerHTML = "Next"; 
                document.getElementById('reset').style.visibility = "visible";
            break;
            case 'page2':
                text = "Add your 2 numbers together. <span><br>(ex 24; 2+4=6)</span>";
                
            break;
            case 'page3':
                text = "Subtract new number from old number. <span><br>(ex 24-6=18)</span>"
            break;
            case 'page4':
                console.log(obj)
                text = "Find your number and remember symbol.<span><br>Scroll Down</span>";
                document.getElementById('options').style.visibility = "visible"
                document.getElementById('options').innerHTML = insertNumbers.join('<br>');
                document.getElementById('options').style.display = "block";
                
                
                
                
                break;
                case 'page5':
                    text = "IS THIS YOUR SYMBOL?";
                    document.getElementById('myBtn').innerHTML = "Go"; 
                    document.getElementById('myBtn').style.visibility = "hidden";
                    document.getElementById('reset').innerHTML = "reset";
                    document.getElementById('result').style.visibility = "visible";
                    document.getElementById('result').innerHTML = selectedSymbol;
                    document.getElementById('options').style.visibility = "hidden";
                    document.getElementById('options').innerHTML = insertNumbers.join('<br>');
                    document.getElementById('options').style.display = "none";
                    
                    break;
                    default:
                text = "Default page";
                
                
        }
        document.getElementById('big_text').innerHTML = text; 

    }


renderState();
