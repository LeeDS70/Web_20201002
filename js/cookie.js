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