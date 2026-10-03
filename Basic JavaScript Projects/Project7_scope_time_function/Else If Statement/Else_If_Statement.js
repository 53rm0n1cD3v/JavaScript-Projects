function Time_Function() {
    var Time = new Date().getHours();
    var Reply;

    if (Time > 0 && Time < 12) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }

    document.getElementById("Time_of_day").innerHTML = Reply;
}
