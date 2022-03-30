let val = document.querySelector("#in_value");
let input = document.querySelector("#input");
let output = document.querySelector("#output");
let convert = document.querySelector("#convert");
let res = document.querySelector("#result")

convert.addEventListener("click", (e) => {
    e.preventDefault();
    let inp = input.value;
    let out = output.value;
    if(inp === "celsius" && out === "fahrenheit"){
        let ans = val.value;
        res.value = (ans * 9/5) + 32;
    }
    else if(inp === "celsius" && out === "kelvin"){
        let ans = val.value;
        res.value = ans + 273.15;
    }
    else if(inp === "fahrenheit" && out === "celsius"){
        let ans = val.value;
        res.value = (ans - 32) * (5/9);
    }
    else if(inp === "fahrenheit" && out === "kelvin"){
        let ans = val.value;
        res.value = (ans - 32) * (5/9) + 273.15;
    }
    else if(inp === "kelvin" && out === "celsius"){
        let ans = val.value;
        res.value = ans - 273.15;
    }
    else if(inp === "kelvin" && out === "fahrenheit"){
        let ans = val.value;
        res.value = ((ans - 273.15) * 9/5) + 32;
    }
    else{
        res.value = val.value;
    }
})