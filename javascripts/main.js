var selectedElement = "";
function documentLoad(){
	selectedElement = document.getElementById('works');
}

function selectItem(tab){
	selectedElement.className = "";
	selectedElement = document.getElementById(tab);
	selectedElement.className = "selectedTab";
	switch(tab){
		case('works'):
			$('#worksBody').animate({marginLeft: "0"});
			$('#s1Body').animate({marginLeft: "100%"});
			$('#s2Body').animate({marginLeft: "100%"});
			$('#s3Body').animate({marginLeft: "100%"});
			$('#s4Body').animate({marginLeft: "100%"});
			$('#s5Body').animate({marginLeft: "100%"});
		break;
		case('s1'):
			$('#worksBody').animate({marginLeft: "-100%"});
			$('#s1Body').animate({marginLeft: "0%"});
			$('#s2Body').animate({marginLeft: "100%"});
			$('#s3Body').animate({marginLeft: "100%"});
			$('#s4Body').animate({marginLeft: "100%"});
			$('#s5Body').animate({marginLeft: "100%"});
		break;
		case('s2'):
			$('#worksBody').animate({marginLeft: "-100%"});
			$('#s1Body').animate({marginLeft: "-100%"});
			$('#s2Body').animate({marginLeft: "0%"});
			$('#s3Body').animate({marginLeft: "100%"});
			$('#s4Body').animate({marginLeft: "100%"});
			$('#s5Body').animate({marginLeft: "100%"});
		break;
		case('s3'):
			$('#worksBody').animate({marginLeft: "-100%"});
			$('#s1Body').animate({marginLeft: "-100%"});
			$('#s2Body').animate({marginLeft: "-100%"});
			$('#s3Body').animate({marginLeft: "0%"});
			$('#s4Body').animate({marginLeft: "100%"});
			$('#s5Body').animate({marginLeft: "100%"});
		break;
		case('s4'):
			$('#worksBody').animate({marginLeft: "-100%"});
			$('#s1Body').animate({marginLeft: "-100%"});
			$('#s2Body').animate({marginLeft: "-100%"});
			$('#s3Body').animate({marginLeft: "-100%"});
			$('#s4Body').animate({marginLeft: "0%"});
			$('#s5Body').animate({marginLeft: "100%"});
		break;
		case('s5'):
			$('#worksBody').animate({marginLeft: "-100%"});
			$('#s1Body').animate({marginLeft: "-100%"});
			$('#s2Body').animate({marginLeft: "-100%"});
			$('#s3Body').animate({marginLeft: "-100%"});
			$('#s4Body').animate({marginLeft: "-100%"});
			$('#s5Body').animate({marginLeft: "0%"});
		break;
	}
}