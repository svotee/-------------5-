let time = (deadline) => {
    let dateNow = new Date();
    
    let timer = deadline - dateNow;
    let hours = Math.round(timer / (1000*60*60))
    timer = timer % (1000*60*60);
    let days =  (hours-(hours%24))/24
    hours = hours%24 

    let minutes = Math.round(timer/(1000*60))
    timer = timer % (1000*60)
    let seconds = Math.round(timer/(1000))
    if(minutes==60){
        minutes=0
    }
    if(seconds==60){
        seconds=0
    }
    if(String(minutes).length==1){
        minutes = '0'+String(minutes);
    }
    if(String(hours).length==1){
        hours = '0'+String(hours);
    }
    if(String(seconds).length==1){
        seconds = '0'+String(seconds);
    }
    if(hours>=0 && minutes>=0 && seconds>=0 ){
        let object = [days,hours,minutes,seconds]
    return object
    }
    else {
        document.getElementById('timer').innerHTML='00'+':'+'00'+':'+'00';
    }
}

const dateDeadLine = new Date(2022,1,5,0,0,0);

console.log(time(dateDeadLine))




let funcDays= function(curr){
    if (curr == 1){
        da = curr + 'день'
        return da
    }
    else if (curr == 2 || curr == 3 || curr == 4){
        da = curr + ' дня'
        return da
    }
    else{
        days= curr+'дней'
        return da
    }
}

let funcHours = function(currHour) {
    if (currHour == 1 || currHour == 21){
        hours= currHour + ' час'
        return hours
    }
    else if (currHour%10 == 2 || currHour%10 == 3 || currHour%10 == 4){
        hours= currHour + ' часа'
        return hours
    }
    else {
        hours= currHour + ' часов'
        return hours
    }
}
let funcMinutes = function(currMinute) {
    if (currMinute%10 == 1){
        min = currMinute + ' минута'
        return min
    }
    else if (currMinute%10 == 2 || currMinute%10 == 3 || currMinute%10 == 4){
        min = currMinute + ' минуты'
        return min
    }
    else {
        min = currMinute+ ' минут'
        return min
    }
}
let funcSeconds = function(currsec) {

    if (currsec%10 == 1){
        sec = currsec + ' секунда'
        return sec
    }
    else if (currsec%10 == 2 || currsec%10 == 3 || currsec%10 == 4 ){
        sec = currsec + ' секунды'
        return sec
    }
    else {
        sec = currsec + ' секунд'
        return sec
    }
}




let printer = function(){
    
    let a = time(dateDeadLine);
    let daysPr = funcDays(a[0]);
    let hoursPr = funcHours(a[1]);
    let minPr = funcMinutes(a[2]);
    let secPr = funcSeconds(a[3]);

    document.getElementById('timer').innerText= daysPr+' '+hoursPr+' '+minPr+' '+secPr
    
}



setInterval(printer,1000)