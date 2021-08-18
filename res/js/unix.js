function start() {
    unix();
    window.setInterval("unix()", 1000);
}
  var unix = Math.round(+new Date()/1000);
  document.write(unix);
  
