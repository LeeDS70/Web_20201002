var close_time; // 시간 정보
var close_time2 = 10;

clearTimeout(close_time) // 재호출 정지
close_time = setTimeout("close_window()", 10000); // 1/1000초 지정, 바로 시작
show_time();

function show_time(){
	let msg = "남은 시간은 " + close_time2 + "초 입니다.";
	let divClock = document.getElementById('Time');
	divClock.innerText = msg; // 10초 삽입 시작
	close_time2--; // 1초씩 감소
	setTimeout(show_time, 1000); // 1초마다 갱신
}

function close_window(){
	window.close(); // 창 단기
}

window.onload = showWindow;