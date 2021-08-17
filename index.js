const inp1 = document.querySelector('.input1');
const inp2 = document.querySelector('.input2');
const out = document.querySelector('.output');

let allNotes = [2000, 500, 100, 50 , 20, 10, 5, 1]
function btn_onclick() {
    let val1 = Number (inp1.value);
    let val2 = Number (inp2.value);
    let note , noOfNote;
    let outputStr = "<tr> <td>2000</td> <td>500</td> <td>100</td> <td>50</td> <td>20</td> <td>10</td> <td>5</td> <td>1</td></tr> <tr>";
    if(val1 < val2){
        let amt = val2 - val1;
        for (let i = 0; i< allNotes.length; i++ )
        {
            note = allNotes[i]; 
            noOfNote = Math.trunc(amt/note);
            amt = amt - (noOfNote*note);
            console.log(note+'||'+noOfNote);

            outputStr += "<td>"+noOfNote+"</td>"

        }
        outputStr += "</tr>";
        out.innerHTML = outputStr;
    }
    else if (val1 > val2){
    let sum = val1 - val2;
    out.innerHTML = "The Cash amount is less then the Bill amount.<br>"+"You need to pay "+sum+"rs.  more";
    }
    else{
    out.innerHTML = "Enter the amount Bruh!!!";
    }
    
}