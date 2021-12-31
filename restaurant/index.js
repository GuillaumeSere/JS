const getValue = () =>{
    let search = document.getElementById("search").value;

    let result = document.getElementById("result")
    result.textContent = search;
    console.log(search)
}

getValue();

