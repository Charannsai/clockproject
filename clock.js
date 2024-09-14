function Clock() {
    const Time = new Date();
    let Hours = Time.getHours().toString().padStart(2,0);
    const Hour = Hours >= 12 ? "PM" : "AM";
    const Minutes = Time.getMinutes().toString().padStart(2,0);
    const Seconds = Time.getSeconds().toString().padStart(2,0);;   
    const Meridian = Hour
    const TimeSeries = `${Hours}:${Minutes}:${Seconds} ${Meridian}`;
    document.getElementById('clock').textContent = TimeSeries;
}
Clock();
setInterval(Clock,1000);
