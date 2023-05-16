let count = 0;

function login(){
	var ID = ["qwer@example.com"];
	var PW = ["qwer"];
	
	let form = document.querySelector("#form_main");
	let id = document.querySelector("#floatingInput");
	let password = document.querySelector("#floatingPassword");
	let check = document.querySelector("#idSaveCheck");
	count += 1;

	form.action = "../index_login.html";
	form.method = "get";
	
	var cookie_count = getCookie("login_cnt");	
	if(cookie_count == ""){
			setCookie("login_cnt", count, 1);
	}
	if (cookie_count >= "5"){
				alert("로그인 가능 횟수가 초과되었습니다.")
		}
	
	else{
		if(check.checked == true){
			alert("쿠키를 저장합니다.");
			setCookie("id", id.value, 1);
			alert("쿠키 값:" + id.value);
		}
	
		else{
			setCookie("id", id.value, 0);
		}
	
		if(id.value.length === 0 || password.value.length === 0){
			alert("아이디와 비밀번호를 모두 입력해주세요.");
			setCookie("login_cnt", count, 1);

		}	
	
	
		else if(login_check(id) == false){ //id.value가 패턴에 틀린 것이 있으면 
			alert("이메일 주소를 입력하세요.")
		}
	
		else{
			for(var i = 0; i < ID.length; i++){
				if(id.value != ID[i]){
					alert("유효하지 않는 이메일입니다.");
				}
	
				else if(id.value == ID[i]){
					if(password.value != PW[i]){
						alert("비밀번호를 틀렸습니다.");
					}
			
				}
				else{
					form.submit();
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
}

function login_check(text){
	var pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; 
	return (text.value.match(pattern) != null) // ( ) 안의 값을 리턴함 -> text.value가 패턴에 틀린것이 없으면 true
}


function logout(){
    location.href='../index.html';
}

function get_id(){
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