function ShowMessage(id, message) { 

    if(!!id && !!message) {
        document.getElementById(id).innerHTML = message;
    } else {
        console.log("ID or messag is null ");
    }
}