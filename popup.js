const MIN_BREAK = 5;
const MIN_SESSION = 10;
const MAX_BREAK = 60;
const MAX_SESSION = 60;
const diffVal = 5;

function decreaseBreakFxn() {
    let breakLength = parseInt(break_length.innerHTML);
    if(breakLength - diffVal < MIN_BREAK){
        alert("Lowest Break value. Try the increment button");
        return;
    }
    breakLength -= diffVal;
    break_length.innerHTML = breakLength;
}

function increaseBreakFxn() {
    let breakLength = parseInt(break_length.innerHTML);
    if(breakLength + diffVal > MAX_BREAK){
        alert("Highest Break value. Try the decrement button");
        return;
    }
    breakLength += diffVal;
    break_length.innerHTML = breakLength;
}

function decreaseSessionFxn() {
    let sessionLength = parseInt(session_length.innerHTML);
    if(sessionLength - diffVal < MIN_SESSION){
        alert("Lowest Session value. Try the increment button");
        return;
    }
    sessionLength -= diffVal;
    session_length.innerHTML = sessionLength;
}

function increaseSessionFxn() {
    let sessionLength = parseInt(session_length.innerHTML);
    if(sessionLength + diffVal > MAX_SESSION){
        alert("Highest Session value. Try the decrement button");
        return;
    }
    sessionLength += diffVal;
    session_length.innerHTML = sessionLength;
}

function startTimer(){
    let sessionLength = parseInt(session_length.innerHTML);
    setInterval(() => {
        sessionLength -= 1;
        timer.innerHTML = sessionLength;
    }, 1000);
}

function stopTimer(){
    let sessionLength = parseInt(session_length.innerHTML);
    setInterval(() => {
        sessionLength -= 1;
        timer.innerHTML = sessionLength;
    }, 1000);
}

decrease_break.addEventListener('click', decreaseBreakFxn);

increase_break.addEventListener('click', increaseBreakFxn);

decrease_session.addEventListener('click', decreaseSessionFxn);

increase_session.addEventListener('click', increaseSessionFxn);

start_btn.addEventListener('click', startTimer);

stop_btn.addEventListener('click', stopTimer);