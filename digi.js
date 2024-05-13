function updateclock(){
    const now=new Date();
    let hours=now.getHours();
    const meridiem = hours>=12 ? "PM" : "AM";
    hours = hours%12 || 12;
    hours=hours.toString().padStart(2,0);
    const mins=now.getMinutes().toString().padStart(2,0);
    const secs=now.getSeconds().toString().padStart(2,0);
    const timestring=`${hours}:${mins}:${secs} ${meridiem}`;
    document.getElementById("d2").textContent=timestring;
}
updateclock();
setInterval(updateclock,1000);