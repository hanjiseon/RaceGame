$(document).ready(function() {

	
	// 말 4마리 animate() 메소드로 움직이는 함수
	$.moveHorse = function(id, effect) {
		
		// 랜덤으로 시간 지정
		var time = parseInt(Math.random() * 10000 + 5000); // 10000ms = 10초
		
		// animate() : 애니메이션 효과를 만드는 메소드
		// 인자 4개 들어감 - 1. 속성(애니메이션 효과), 
		//              2. 시간(애니메이션 종료때까지 걸리는 시간, ms단위:1초=1000), 
		//              3. 방식(애니메이션 효과 방식 - swing 처음과 끝에서만 빠르고 중간에서는 느리게 움직임/leaner 일정한 속도로 움직임),
		//              4. 요소가 사라진 후 수행할 작업
		$(id).animate({
			// 왼쪽에서 100%만큼 이동한다
			left: "100%",
		}, time, effect, function() {
			// 콘솔창에 결과 출력
			console.log(id.substr(1, id.length) + " Goal!!");
			
			// 정지한 이미지로 변경
			$(id).attr("src", "../images/horse.png");
			
			// 화면에 리스트로 결과 출력
			$("#rank").append("<li>  " + id.substr(1, id.length) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "Time : " + time + " ms" + "</li>");
		});
		
	} // moveHorse()
	
 	// 시작 버튼 클릭 시
 	$("#start").click(function() {
		// 달리는 말로 이미지 변경
		$(".imgClass").attr("src", "../images/horsemove.gif");
		
		// 버튼의 텍스트를 RESTART로 변경
		$("#start").text("RESTART");
		
		// 버튼의 텍스트가 RESTART일 때
		if ($("#start").text() == "RESTART") {
			// 버튼을 클릭하면
			$("#start").click(function() {
				// 해당 브라우저를 새로고침한다
				location.reload();
			});
		}

		// 말을 움직이는 메소드 호출
		$.moveHorse('#horse1', 'linear');
		$.moveHorse('#horse2', 'swing');
		$.moveHorse('#horse3', 'linear');
		$.moveHorse('#horse4', 'swing');

	}); // click()
	
});