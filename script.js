
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years)

    // Principal input box validation
    var principalBox = document.getElementById("principal")
    if(principal < 0 || principal == 0){
        alert("Enter a positive number")
        var result = document.getElementById("result")
        result.innerHTML = `` // reset result to not display anything
        principalBox.focus()
        return false
    }

    // Print the text to span id = result
    var result = document.getElementById("result")
    result.innerHTML = `
    If you deposit <mark>${principal},</mark><br>
    at an interest rate of <mark>${rate}%,</mark><br>
    You will receive an amount of <mark>${interest},</mark><br>
    in the year <mark>${year}</mark>
    `
    return true
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = `${rateval}%`
}
        