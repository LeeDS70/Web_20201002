function addJavascript(jsname){
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type', 'text/javascript');
	s.setAttribute('src', jsname);
	th.appendChild(s);
}

addJavascript('/js/security.js');
addJavascript('/js/session.js');
addJavascript('/js/cookie.js');

function login(){
	
	let form = document.querySelector("#form_main");
	let id = document.querySelector("#floatingInput");
	let password = document.querySelector("#floatingPassword");
	let check = document.querySelector("#idSaveCheck");

	form.action = "/index_login.html";
	form.method = "get";
	
	/*if(check.checked == true){
		alert("쿠키를 저장합니다.");
		setCookie("id", id.value, 1);
		alert("쿠키 값:" + id.value);
	}
	
	else{
		deleteCookie("id");
	}
	
	if(id.value.length === 0 || password.value.length === 0){
		alert("아이디와 비밀번호를 모두 입력해주세요.");
	}	
	else{
		session_set();
		form.submit();
	}*/
	let login_count = 0;
	let login_fail_count = 0;
	var cookie_login_count = getCookie("login_cnt");
	login_count = parseInt(cookie_login_count);
	var cookie_login_fail_count = getCookie("login_fail_cnt");
	
	if(cookie_login_fail_count == "NaN" || cookie_login_fail_count == "undefi" || cookie_login_fail_count == "undefined" || cookie_login_fail_count == ""){
		setCookie("login_fail_cnt", 1, 1);
		var cookie_login_fail_count = getCookie("login_fail_cnt");
	}
	
	if(typeof cookie_login_fail_count == "int"){
		var cookie_login_fail_count = parseInt(cookie_login_fail_count);
	}
	
	if(cookie_login_count == "NaN" || cookie_login_count == "undefi" || cookie_login_count == "undefined" || cookie_login_count == ""){
		setCookie("login_cnt", 1, 1);
	}
	
	else {
		setCookie_log("login_cnt", login_count, 1);
	}
	
	if (cookie_login_fail_count >= 3){
		alert("3회 로그인에 실패하였습니다.")
	}
	
	else{
		if(check.checked == true){
			alert("쿠키를 저장합니다.");
			setCookie("id", id.value, 1);
			alert("쿠키 값:" + id.value);
		}
	
		else{
			deleteCookie("id");
		}
	
		if(id.value.length === 0 || password.value.length === 0){
			alert("아이디와 비밀번호를 모두 입력해주세요.");
			setCookie_log("login_fail_cnt", cookie_login_fail_count , 1);
		}	
	
		else if(login_check(id) == false){ //id.value가 패턴에 틀린 것이 있으면 
			alert("형식에 맞지 않은 이메일 주소입니다..");
			setCookie_log("login_fail_cnt", cookie_login_fail_count , 1);
		}

		else{
			session_set();
			form.submit();
		}
	}
}



function init(){
	let id = document.querySelector("#floatingInput");
	let check = document.querySelector("#idSaveCheck");
	let get_id = getCookie("id");
	
	if(get_id){
		id.value = get_id;
		check.checked = true;
	}
	session_check();
}

function login_check(text){
	var pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; 
	return (text.value.match(pattern) != null) // ( ) 안의 값을 리턴함 -> text.value가 패턴에 틀린것이 없으면 true
}


function logout(){
	session_del();
	let logout_count = 1;
	var cookie_logout_count = getCookie("logout_cnt");
	if(typeof getCookie("logout_cnt") != "number"){
		setCookie("logout_cnt", logout_count, 1);
	}
	else{
		setCookie_log("logout_cnt", cookie_logout_count, 1);	
	}
    location.href='../index.html';
}

function get_id(){
	if(true){
		decrypt_text();
	}
	else{
		var getParameters = function(paramName){
		var returnValue;
		var url = location.href;
		var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&'); //?을 기준으로 slice한 후에 split으로 나눔
			for(var i = 0; i < parameters.length; i++){
				var varName = parameters[i].split('=')[0];
		
				if(varName.toUpperCase() == paramName.toUpperCase()){
					returnValue = parameters[i].split('=')[1];
					return decodeURIComponent(returnValue); //나누어진 값의 비교를 통해 paramName으로 요청된 데이터 값만 리턴
				}
			};
		}
		alert(getParameters('id') + "님 반갑습니다.");
	}
	setTimeout(logout, 300000);
}