/*
while(true){
	sleep(1000);
	('#appender').innerHTML = (moment().format())
}*/
$(document).ready(function () {
	
})
$('#appender').innerHTML = (moment().format());
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function demo() {
  console.log('Taking a break...');
  sleep(2000);
  console.log('Two second later');
}