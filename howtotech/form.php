<!DOCTYPE html>
<html>
	<head>
		<link style="text/css" rel="stylesheet" href="style.css"/>
		<link style="image/png" rel="icon" href="images/logo.png"/>
		<link href='https://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'>
		<title>How To Tech</title>
        <?php 
			$to = "alex.baird@mtchs.org";
			$subject = $_REQUEST["subject"];
			$from = $_REQUEST["emailAddress"];
			$honeypot = $_REQUEST["honeypot"];
			$message = "Name: ".$_REQUEST["fullName"]."\nPhone: ".$_REQUEST["phoneNumber"]."\nMessage: ".$_REQUEST["comments"];
			if($honeypot){

			}else{
				mail($to,$subject,$message,$from);
			}
		?>
	</head>
	<body>
		<div id="header">
			<img src="images/logo.png"/>
			<p>How To Tech</p>
		</div>
		<div id="nav">
			<ul>
				<a href="index.html" class="blue"><li>Home</li></a>
				<a href="library/mediapage.html" class="green"><li>Media Arts</li></a>
				<a href="library/programpage.html" class="yellow"><li>Programming</li></a>
				<a href="library/videogamepage.html" class="red"><li>Video Games</li></a>
				<a href="library/about.html" class="purple-active"><li>About Us</li></a>
			</ul>
		</div>
		<div id="main">
			<p class="mainTitle">Thanks a lot!</p>
			<p class="mainDesc">To return to the website, just click on any of the buttons above!</p>
		</div>
	</body>
</html>