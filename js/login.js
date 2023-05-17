function login(){
	var ID = ["qwer@example.com"];
	var PW = ["qwer"];
	
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
	
	if(cookie_login_fail_count == "NaN" || cookie_login_fail_count == "undefi" || cookie_login_fail_count == "undefined"){
		setCookie("login_fail_cnt", 0, 1);
	}
	
	else{
		setCookie("login_fail_cnt", 0, 1);
	}
	
	if(cookie_login_count == "NaN" || cookie_login_count == "undefi" || cookie_login_count == "undefined"){
		setCookie("login_cnt", 0, 1);
	}
	
	else {
		setCookie_log("login_cnt", login_count, 1);
	}
	
	if (login_fail_count >= 6){
		alert("5회 로그인에 실패하였습니다.")
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
			setCookie_log("login_fail_cnt", login_fail_count, 1);
		}	
	
		else if(login_check(id) == false){ //id.value가 패턴에 틀린 것이 있으면 
			alert("이메일 주소를 입력하세요.");
			setCookie_log("login_fail_cnt", login_fail_count, 1);
		}

		else{
			for(var i = 0; i < ID.length; i++){
				if(id.value != ID[i]){
					alert("유효하지 않는 이메일입니다.");
					setCookie_log("login_fail_cnt", login_fail_count, 1);
				}
	
				else if(id.value == ID[i]){
					if(password.value != PW[i]){
						alert("비밀번호를 틀렸습니다.");
						setCookie_log("login_fail_cnt", login_fail_count, 1);
					}
					
					else{
						session_set();
						form.submit();
					}
				}
			}
		}
	}
}

function setCookie(name, value, expiredays){
	var date = new Date();
	date.setDate(date.getDate() + expiredays);
	document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "SameSite=None; Secure";
}

function setCookie_log(name, value, expiredays){
	var date = new Date();
	date.setDate(date.getDate() + expiredays);
	value = parseInt(value) + parseInt(1);
	document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "SameSite=None; Secure";
}

function getCookie(name){
	var cookie = document.cookie;
	console.log("쿠키를 요청합니다.");
	if(cookie != ""){
		var cookie_array = cookie.split("; ");
		for(var index in cookie_array){
			var cookie_name = cookie_array[index].split("=")
			
			if(cookie_name[0] == name){
				return cookie_name[1];
			}
		}
	}
	return;
}

function deleteCookie(cookieName){
	var expireDate = new Date();
	expireDate.setDate(expireDate.getDate() - 1);
	document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString() + "SameSite=None; Secure";
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
	
}

function session_set(){
	let id = document.querySelector("#floatingInput");
	let password = document.querySelector("#floatingPassword");
	if(sessionStorage){
		let en_text = encrypt_text(password.value);
		sessionStorage.setItem("Session_Storage_test", en_text);
	}
	else{
		alert("로컬 스토리지 지원 X");
	}
}

function session_get(){
	if(sessionStorage){
		return sessionStorage.getItem("Session_Storage_test");
	}
	else{
		alert("세션 스토리지 지원 x");
	}
}

function session_check(){
	if(sessionStorage.getItem("Session_Storage_test")){
		alert("이미 로그인 되었습니다.");
		location.href = 'index_login.html';
	}
}

function session_del(){
	if(sessionStorage){
		sessionStorage.removeItem("Session_Storage_test");
		alert("로그아웃 입력을 확인 : 세션 스토리지를 삭제합니다.")
	}
	else{
		alert("세션 스토리지 지원 x");
	}
}

function encodeByAES256(key, data){
	const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
		iv: CryptoJS.enc.Utf8.parse(""),
		padding: CryptoJS.pad.Pkcs7,
		mode: CryptoJS.mode.CBC
	});
	return cipher.toString();
}

function decodeByAES256(key, data){
	const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
		iv: CryptoJS.enc.Utf8.parse(""),
		padding: CryptoJS.pad.Pkcs7,
		mode: CryptoJS.mode.CBC
	});
	return cipher.toString(CryptoJS.enc.Utf8);
}

function encrypt_text(password){
	const k = "key";
	const rk = k.padEnd(32, " ");
	const b = password;
	const eb = this.encodeByAES256(rk, b);
	return eb;
	console.log(eb);
}

function decrypt_text(){
	const k = "key";
	const rk = k.padEnd(32, " ");
	const eb = session_get();
	const b = this.decodeByAES256(rk, eb);
	console.log(b);
}