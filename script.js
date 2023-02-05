$(document).ready(() => {
	var banner1 = $("#banner1");
	var banner2 = $("#banner2");

	var button1 = $("#button1");
	var button2 = $("#button2");

	button1.on("click", () => {
		banner1.toggleClass("alt");
		banner1.fadeOut(1000);
	});

	button2.on("click", () => {
		banner2.toggleClass("alt");
		banner2.fadeOut(1000);
	});


	//Hide | Show | Toggle Elements!
	$("#hideButton").click(() => {
		$("p").fadeOut(1000);
	});
	$("#showButton").click(() => {
		$("p").fadeIn(1000);
	});

	$(".hoverTextAppend").hover(function () {
		$(this).append($("<span> Hello! <span>"));
	});
	$(".hoverTextFade").hover(function () {
		$(this).fadeOut(1000);
		$(this).fadeIn(1000);
	});

	// Get and set attribute values | attr() sets or returns the value of attributes.
	$(() => {
		var value = $("a").attr("href");
		// alert(value);
	});
	// Change the href attr of <a> to provided value (http://www.jquery.com)
	$(() => {
		$("#a2").attr("href", "http://www.jquery.com");
	});

	//  Remove attr() removes the specified attribute
	$("#btnTable").click(() => {
		$("table").removeAttr("border");
		$("table").removeAttr("class");
	});
	// Get content html()
	$(() => {
		$("#btnGetHTML").click(() => {
			var valueHTML = $("#pGetHTMLContent").html();
			alert(valueHTML);
		});
	});
	// Get content text()
	$(() => {
		$("#btnGetTEXT").click(() => {
			var valueTEXT = $("#pGetTEXTContent").text();
			alert(valueTEXT);
		});
	});

	// Set content TEXT() Sets or returns the text content of selected element

	$(() => {
		$("#btnSetTEXT").click(() => {
			$("#testText").text("MY TEXT");
		});
	});
	// Set content HTML() sets or return the content of selected elements (including HTML markup)

	$(() => {
		$("#btnSetHTML").click(() => {
			$("#testHTML").html("MY HTML");
		});
	});
	// Set Values val() sets or returns the value of form fields
	$(() => {
		$("#btnSetVal").click(() => {
			alert($("#name").val());
		});
	});

	// append() inserts content AT THE END of the selected HTML elemnt
	$(() => {
		$("#btnAppend").click(() => {
			$("#demoAppend").append("David");
		});
	});

	// prepend() inserts content AT THE END of the selected HTML elemnt
	$(() => {
		$("#btnPrepend").click(() => {
			$("#demoPrepend").prepend("David");
		});
	});
	// after() inserts content AT THE END of the selected HTML elemnt
	$(() => {
		$("#btnAddAfter").click(() => {
			$("#demoAddAfter").after("<b> David </b>");
		});
	});
	// before() inserts content AT THE END of the selected HTML elemnt
	$(() => {
		$("#btnAddBefore").click(() => {
			$("#demoAddBefore").before("David");
		});
	});

	$(() => {
		var text1 = $("<p></p>").text("I'm Alex Fernandes");
		var text2 = $("<h3></h3>").text("Welcome!");

		$("#addNewEleBtn").click(() => {
			$("#addNewElement").after(text1, text2);
		});
	});

	// Add Class
	// Separate classes by commas to insert multiple classes
	$(() => {
		$("#addClassBtn").click(() => {
			$("#h1AddClass").addClass("header");
		});
	});

	// Toggle Class

	$(() => {
		$("#toggleClassBtn").click(() => {
			$("#h1toggleClass").toggleClass("changeStyle");
		});
	});
	// Remove Class

	$(() => {
		$("#removelassBtn").click(() => {
			$("#h1text").removeClass("RemoveClassStyle");
		});
	});

	// CSS properties
	$(() => {
		$("#cssPropertieBtn").click(() => {
			// alerts current background color property and then sets it to blue
			alert($("#pCssProperty").css("background-color"));
			$("#pCssProperty").css("background-color", "green");
		});
	});
	// Multiple CSS properties (use JSON syntax)

	$(() => {
		$("#multiplepropBtn").click(() => {
			$(".multiplepropertiesCSS").css({
				"background-color": "red",
				"font-size": "200%",
			});
		});
	});

	// Dimensions CSS properties width() / height()

	$(() => {
		$("#dimensionsCssBtn").click(() => {
			$("#dimensionsCSS").css("background-color", "yellow");
			$("#dimensionsCSS").width(100);
			$("#dimensionsCSS").height(100);
		});
	});

	$(() => {
		$("#dimenBtn").click(() => {
			var txt = "";
			txt += "width: " + $("dimensions").width() + " ";
			txt += "height: " + $("dimensions").height() + "<br/>";
			txt += "innerWidth: " + $("dimensions").innerWidth() + " ";
			txt += "innerHeight: " + $("dimensions").innerHeight() + "<br/>";
			txt += "outerWidth: " + $("dimensions").outerWidth() + " ";
			txt += "outerHeight: " + $("dimensions").outerHeight();

			$("dimensions").html(txt);
		});
	});

	// Events on()
	var $box = $(".box");
	var $next = $("#next");
	var $prev = $("#prev");

	$next.click(function () {
		$box.animate(
			{
				left: "500",
			},
			1000
		);
	});

	$prev.click(function () {
		$(".box").animate(
			{
				left: "0",
			},
			1000
		);
	});

	// ****************************************** LOOPS
	// For loop (Run on a HTML collection)
	$js = $(".js");
	for (let i = 0; i < $js.length; i++) {
		// console.log(i);
		// console.log($js[i]);
		let text = $js[i].innerHTML;
		$js[i].innerHTML = "Course " + text + " JS";
	}
	// For Each (Run on a Array Collection)

	// let $js = $(".jsForEach");
	let array = [
		1,
		// prompt("enter somenthing inside the array?", ""),
		"Can be a string",
		4,
	];

	array.forEach((element, index) => {
		// console.log(element, index)
		if (element === 2) {
			array[index] = "Another Item";
		}
	});
	$(() => {
		$(".jsForEach").html(
			"Displaying Object Array: " +
				"  " +
				array[0] +
				"  " +
				array[1] +
				"  " +
				array[2] +
				"  " +
				array[3]
		);
	});

	//  Map (Run on a Array Collection also) returns a new element
	var arrayMap = [1, 2, 3, 4];

	var newElement = arrayMap.map(function (element, index) {
		if (element === 3) {
			element = "other thing";
		}
		return element;
	});
	$(() => {
		$(".jsMap").html("Displaying Object Array: " + newElement);
	});

	// While
	var arrayMap = [1, 2, "hi", 4];
	var i = 0;
	while (i < 5) {
		console.log("hi");
		i++;
	}
	$(() => {
		$(".jswhile").html("Displaying Object Array: " + i);
	});

	// 	Handling Events

	$(() => {
		$("#handlingEventsBtn").click(() => {
			$("#dataDisplay").html(Date);
		});
	});
});
