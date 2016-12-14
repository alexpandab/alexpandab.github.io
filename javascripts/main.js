var selectedElement = "";
function documentLoad(){
	selectedElement = document.getElementById('works');
}

function selectItem(tab){
	console.log(selectedElement);
	selectedElement.className = "";
	selectedElement = document.getElementById(tab);
	selectedElement.className = "selectedTab";
	switch(tab){
		case('works'):

		break;
		case('s1'):

		break;
		case('s2'):

		break;
		case('s3'):

		break;
		case('s4'):

		break;
		case('s5'):

		break;
	}
	console.log(document.getElementById(tab).className);
}