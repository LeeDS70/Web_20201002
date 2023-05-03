function login(){
	var ID = ["qwer@example.com"];
	var PW = ["qwer"];
	
	let form = document.querySelector("#form_main");
	let id = document.querySelector("#floatingInput");
	let password = document.querySelector("#floatingPassword");

	form.action = "../index_login.html";
	form.method = "get";
	
	if(id.value.length === 0 || password.value.length === 0){
		alert("아이디와 비밀번호를 모두 입력해주세요.");
	}
	
	else if(login_check(id) == false){
		alert("이메일 주소를 입력하세요.")
	}
	
	for(var i = 0; i < ID.length; i++){
		if(id.value != ID[i]){
		alert("유효하지 않는 이메일입니다.");
		}
	
		else if(id.value == ID[i]){
			if(password.value != PW[i]){
				alert("비밀번호를 틀렸습니다.");
			}
			else{
				form.submit();
			}
		}
	}
}

function login_check(text){
	var pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	return (text.value.match(pattern) != null)
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