class SignUp{
	constructor(firstName, lastName, birthdayDate, inlineRadioOptions, emailAddress, phoneNumber, classNumber, random){
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthdayDate = birthdayDate;
		this.gender = inlineRadioOptions;
		this.emailAddress = emailAddress;
		this.phoneNumber = phoneNumber;
		this.class_check = classNumber;
		this.random = random;
	}
	
	get fullName(){
		return '${this.firstName} ${this.lastName}';
	}
	
	set fullName(fullName){
		const [firstName, lastName] = fullName.split(" ");
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	get contactInfo(){
		return '${this.emailAddress} ${this.phoneNumber} ${this.random}';
	}
	
	set contactInfo(contactInfo){
		const [emailAddress, phoneNumber, random] = contactInfo.split(" ");
		this.emailAddress = emailAddress;
		this.phoneNumber = phoneNumber;
		this.random = random;
	}
}

function join(){
	let form = document.querySelector("#form_main");
	let f_name = document.querySelector("#firstName");
	let l_name = document.querySelector("#lastName");
	let b_day = document.querySelector("#birthdayDate");
	let gender = document.querySelector("#inlineRadioOptions");
	let email = document.querySelector("#emailAddress");
	let p_number = document.querySelector("#phoneNumber");
	let class_check = document.querySelector(".select form-control-lg");
	
	form.action = "/index_join.html";
	form.method = "get";
	
	if(f_name.value.length === 0 || l_name.value.length === 0 || b_day.value.length === 0 || email.value.length === 0 || p_number.value.length === 0){
		alert("모든 항목을 입력해주세요.(성별, 분반 제외)");
	}else{
		session_join_set();	
		form.submit();
	}
}

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

function load_function(){
	session_join_get();
}