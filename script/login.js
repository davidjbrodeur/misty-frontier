function passwordRequest(){
    // let password = prompt("Please enter the password", "");
    // let text;
    // if (password == null || password == "") {
    //     return false;
    // }
    // if (password != "bronze666!") {
    //     return false;
    // }
    return true; 
}

function hide_window() {
    if (!passwordRequest()) {
        var element = document.getElementById("dm-page");
        element.classList.add("hidden");
    }
  }

hide_window();