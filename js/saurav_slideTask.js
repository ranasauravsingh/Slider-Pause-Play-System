var imageList = [
	{ img: "./saurav_slideTaskImages/land1.jfif" },
	{
		video: "./saurav_slideTaskImages/video1.m4v",
	},
	{ img: "./saurav_slideTaskImages/land3.jfif" },
	{ img: "./saurav_slideTaskImages/land4.jfif" },
	{ img: "./saurav_slideTaskImages/land5.jfif" },
	{ img: "./saurav_slideTaskImages/land6.jfif" },
];

var imageCount1 = 0;
var imageCount2 = 0;

function left(count) {
	if (count == "cnt1") {
		imageCount = imageCount1;
		showImage = "showImage1";
		showVideo = "showVideo1";
		vidSrc = "vidSrc1";
		leftBtn = "leftBtn1";
		rightBtn = "rightBtn1";
	} else {
		imageCount = imageCount2;
		showImage = "showImage2";
		showVideo = "showVideo2";
		vidSrc = "vidSrc2";
		leftBtn = "leftBtn2";
		rightBtn = "rightBtn2";
	}

	$("#" + rightBtn + "").prop("disabled", false);

	if (imageCount != 0) {
		$("#" + leftBtn + "").prop("disabled", false);
		imageCount--;

		if (imageCount == 1) {
			$("#" + showImage + "").css("display", "none");

			$("#" + showVideo + "").css("display", "block");
			document.getElementById("" + showVideo + "").play();
		} else {
			document.getElementById("" + showVideo + "").pause();
			$("#" + showVideo + "").css("display", "none");

			$("#" + showImage + "").css("display", "block");

			$("#" + showImage + "").attr("src", imageList[imageCount].img);
		}

		if (imageCount == 0) {
			$("#" + leftBtn + "").prop("disabled", true);
		}
	}

	if (count == "cnt1") {
		imageCount1 = imageCount;
	} else {
		imageCount2 = imageCount;
	}
}

function right(count) {
	if (count == "cnt1") {
		imageCount = imageCount1;
		showImage = "showImage1";
		showVideo = "showVideo1";
		vidSrc = "vidSrc1";
		leftBtn = "leftBtn1";
		rightBtn = "rightBtn1";
	} else {
		imageCount = imageCount2;
		showImage = "showImage2";
		showVideo = "showVideo2";
		vidSrc = "vidSrc2";
		leftBtn = "leftBtn2";
		rightBtn = "rightBtn2";
	}

	$("#" + leftBtn + "").prop("disabled", false);

	if (imageCount != imageList.length - 1) {
		$("#" + rightBtn + "").prop("disabled", false);
		imageCount++;
		// console.log(imageCount);

		if (imageCount == 1) {
			$("#" + showImage + "").css("display", "none");

			$("#" + showVideo + "").css("display", "block");
			document.getElementById("" + showVideo + "").play();
		} else {
			document.getElementById("" + showVideo + "").pause();
			$("#" + showVideo + "").css("display", "none");

			$("#" + showImage + "").css("display", "block");

			$("#" + showImage + "").attr("src", imageList[imageCount].img);
		}

		if (imageCount == imageList.length - 1) {
			$("#" + rightBtn + "").prop("disabled", true);
		}
	}

	if (count == "cnt1") {
		imageCount1 = imageCount;
	} else {
		imageCount2 = imageCount;
	}
}

// controlslist="nodownload"
// 				poster="./saurav_slideTaskImages/land2.jfif"
// 				src="./saurav_slideTaskImages/video1.m4v"
// 				autoplay="autoplay"
// 				loop="loop"
// 				preload="auto"
// 				controls="true"
// 				muted
// 				playsinline

/*
		$("#" + showVideo + "").css("display", "block");
				$("#" + showImage + "").css("display", "none");
				$("#" + showVideo + "").attr({
					src: imageList[imageCount].video,
					controlslist: "nodownload",
					autoplay: "autoplay",
					loop: "loop",
					preload: "auto",
					controls: "true",
					muted: "muted",
					playsinline: "playsinline",
				});


				$("#" + showVideo + "").css("display", "none");
				$("#" + showImage + "").css("display", "block");


	
	
	*/
