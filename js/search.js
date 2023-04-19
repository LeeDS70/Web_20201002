document.getElementById("search_btn").addEventListener('click', search_message);

var search_array = []; // 빈 배열 - 전역 변수

function search_message(){
	let search_str = document.querySelector("#search_txt"); //변수에 저장
	if(search_str.value.length === 0) // 문자 길이, 엄격 비교
	{
		alert("검색어가 비었습니다. 입력해주세요.")
	}
	else if (search_str.value.includes("123")||search_str.value.includes("456")||search_str.value.includes("789")) {
  		alert("비속어는 사용할 수 없습니다.");
	}
	else{
		alert("검색을 수행합니다!");
		search_array.push(search_str.value);
		document.getElementById("search_message").innerHTML = search_array.toString(); //태그에 값 추가
		//console.log(search_str.value);
		document.querySelector("#form_main").submit();
		if (search_array.length >= 10){
			search_array.shift();
		}
	}
}