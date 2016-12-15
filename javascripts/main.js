var selectedElement = "";
var currentBody = "";
var currentBodyNumber = 0;
function documentLoad(){
	selectedElement = document.getElementById('works');
	currentBody = document.getElementById('worksBody');
}

function selectItem(tab){
	selectedElement.className = "";
	selectedElement = document.getElementById(tab);
	selectedElement.className = "selectedTab";
	switch(tab){
		case('works'):
			if(currentBodyNumber != 0){
				$(currentBody).animate({marginLeft: "100%"});
				$('#worksBody').animate({marginLeft: "0"});
				$('#s1Body').css('margin-left', '100%');
				$('#s2Body').css('margin-left', '100%');
				$('#s3Body').css('margin-left', '100%');
				$('#s4Body').css('margin-left', '100%');
				currentBody = document.getElementById('worksBody');
				currentBodyNumber = 0;
			}
		break;
		case('s1'):
			if(currentBodyNumber < 1){
				$(currentBody).animate({marginLeft: "-100%"});
			}else if(currentBodyNumber > 1){
				$(currentBody).animate({marginLeft: "100%"});
			}
			$('#s2Body').css('margin-left', '100%');
			$('#s3Body').css('margin-left', '100%');
			$('#s4Body').css('margin-left', '100%');
			$('#s1Body').animate({marginLeft: '0%'});
			currentBody = document.getElementById('s1Body');
			currentBodyNumber = 1;
		break;
		case('s2'):
			if(currentBodyNumber < 2){
				$(currentBody).animate({marginLeft: "-100%"});
			}else if(currentBodyNumber > 2){
				$(currentBody).animate({marginLeft: "100%"});
			}
			$('#s1Body').css('margin-left', '-100%');
			$('#s3Body').css('margin-left', '100%');
			$('#s4Body').css('margin-left', '100%');
			$('#s2Body').animate({marginLeft: '0%'});
			currentBody = document.getElementById('s2Body');
			currentBodyNumber = 2;
		break;
		case('s3'):
			if(currentBodyNumber < 3){
				$(currentBody).animate({marginLeft: "-100%"});
			}else if(currentBodyNumber > 3){
				$(currentBody).animate({marginLeft: "100%"});
			}
			$('#s1Body').css('margin-left', '-100%');
			$('#s2Body').css('margin-left', '-100%');
			$('#s4Body').css('margin-left', '100%');
			$('#s3Body').animate({marginLeft: '0%'});
			currentBody = document.getElementById('s3Body');
			currentBodyNumber = 3;
		break;
		case('s4'):
			if(currentBodyNumber < 4){
				$(currentBody).animate({marginLeft: "-100%"});
			}else if(currentBodyNumber > 4){
				$(currentBody).animate({marginLeft: "100%"});
			}
			$('#s1Body').css('margin-left', '-100%');
			$('#s2Body').css('margin-left', '-100%');
			$('#s3Body').css('margin-left', '-100%');
			$('#s4Body').animate({marginLeft: '0%'});
			currentBody = document.getElementById('s4Body');
			currentBodyNumber = 4;
		break;
		case('s5'):
			if(currentBodyNumber != 5){
				$(currentBody).animate({marginLeft: "-100%"});
				$('#s5Body').animate({marginLeft: "0"});
				$('#s1Body').css('margin-left', '-100%');
				$('#s2Body').css('margin-left', '-100%');
				$('#s3Body').css('margin-left', '-100%');
				$('#s4Body').css('margin-left', '-100%');
				currentBody = document.getElementById('s5Body');
				currentBodyNumber = 5;
			}
		break;
	}
}

function bodySelect(standard, sub) {
	switch(standard){
		case(1):
			document.getElementById('11').className = "";
			document.getElementById('12').className = "";
			document.getElementById('13').className = "";
			$('#subBody11').css("display", "none");
			$('#subBody12').css("display", "none");
			$('#subBody13').css("display", "none");
			if(sub == 1){
				document.getElementById('11').className = "bodySelectTab";
				$('#subBody11').css("display", "block");
			}else if(sub == 2){
				document.getElementById('12').className = "bodySelectTab";
				$('#subBody12').css("display", "block");
			}else if(sub == 3){
				document.getElementById('13').className = "bodySelectTab";
				$('#subBody13').css("display", "block");
			}
		break;
		case(2):
			document.getElementById('21').className = "";
			document.getElementById('22').className = "";
			document.getElementById('23').className = "";
			document.getElementById('24').className = "";
			$('#subBody21').css("display", "none");
			$('#subBody22').css("display", "none");
			$('#subBody23').css("display", "none");
			$('#subBody24').css("display", "none");
			if(sub == 1){
				document.getElementById('21').className = "bodySelectTab";
				$('#subBody21').css("display", "block");
			}else if(sub == 2){
				document.getElementById('22').className = "bodySelectTab";
				$('#subBody22').css("display", "block");
			}else if(sub == 3){
				document.getElementById('23').className = "bodySelectTab";
				$('#subBody23').css("display", "block");
			}else if(sub == 4){
				document.getElementById('24').className = "bodySelectTab";
				$('#subBody24').css("display", "block");
			}
		break;
		case(3):
			document.getElementById('31').className = "";
			document.getElementById('32').className = "";
			$('#subBody31').css("display", "none");
			$('#subBody32').css("display", "none");
			$('#subBody33').css("display", "none");
			if(sub == 1){
				document.getElementById('31').className = "bodySelectTab";
				$('#subBody31').css("display", "block");
			}else if(sub == 2){
				document.getElementById('32').className = "bodySelectTab";
				$('#subBody32').css("display", "block");
			}
		break;
		case(4):
			document.getElementById('41').className = "";
			document.getElementById('42').className = "";
			document.getElementById('43').className = "";
			$('#subBody41').css("display", "none");
			$('#subBody42').css("display", "none");
			$('#subBody43').css("display", "none");
			if(sub == 1){
				document.getElementById('41').className = "bodySelectTab";
				$('#subBody41').css("display", "block");
			}else if(sub == 2){
				document.getElementById('42').className = "bodySelectTab";
				$('#subBody42').css("display", "block");
			}else if(sub == 3){
				document.getElementById('43').className = "bodySelectTab";
				$('#subBody43').css("display", "block");
			}
		break;
		case(5):
			document.getElementById('51').className = "";
			document.getElementById('52').className = "";
			document.getElementById('53').className = "";
			$('#subBody51').css("display", "none");
			$('#subBody52').css("display", "none");
			$('#subBody53').css("display", "none");
			if(sub == 1){
				document.getElementById('51').className = "bodySelectTab";
				$('#subBody51').css("display", "block");
			}else if(sub == 2){
				document.getElementById('52').className = "bodySelectTab";
				$('#subBody52').css("display", "block");
			}else if(sub == 3){
				document.getElementById('53').className = "bodySelectTab";
				$('#subBody53').css("display", "block");
			}
		break;
	}
}