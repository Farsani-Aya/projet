function time(){
    var form;
  date= new Date();
    hours= date.getHours();
 minute= date.getMinutes();
    sec= date.getSeconds;
 form =hours+':'+minute+':'+sec;
    document.getElementById("clock").innerText=form;
    setTimeout(time, 1000);

}
time();
