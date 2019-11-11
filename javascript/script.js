let apresentacao = $("#apresentacao").offset().top;
let idvisual = $("#idvisual").offset().top;
let icons = $("#icons").offset().top;
let app = $("#app").offset().top;
let downloads = $("#downloads").offset().top;
let cor2 = $("#cores2").offset().top;
let azul = document.getElementById("azul");

$(document).scroll(function() {
  let scrollPos = $(document).scrollTop() + 100;
  if (scrollPos >= apresentacao && scrollPos < idvisual) {
    $("header").css("background-color", "#4d9ecc");
    $(".btn").css("background-color", "#4d9ecc");
    $("h2").css("color", "#4d9ecc");
    $(".timeline .li").css("border-color", "#4d9ecc");
    $(".point").css("background-color", "#4d9ecc");
    $("#apr").css("border-bottom", "2px solid white");
    $("#idv").css("border-bottom", "2px solid transparent");
    $("#ico").css("border-bottom", "2px solid transparent");
    $("#ap").css("border-bottom", "2px solid transparent");
    $("#down").css("border-bottom", "2px solid transparent");
  } else if (scrollPos >= idvisual && scrollPos < icons) {
    $("header").css("background-color", "#ea5254");
    $(".btn").css("background-color", "#ea5254  ");
    $(".btn").css("border-color", "white  ");
    $(".btn").css("color", "white  ");
    $("a").css("color", "white");
    $("h2").css("color", "#ea5254  ");
    $(".timeline .li").css("border-color", "#ea5254");
    $(".point").css("background-color", "#ea5254");
    $("#apr").css("border-bottom", "2px solid transparent");
    $("#ico").css("border-bottom", "2px solid transparent");
    $("#ap").css("border-bottom", "2px solid transparent");
    $("#down").css("border-bottom", "2px solid transparent");
    $("#idv").css("border-bottom", "2px solid white");
    document.getElementById("marca").src = "../assets/logo.svg";
  } else if (scrollPos >= icons && scrollPos < app) {
    $("header").css("background-color", "#f6e72b");
    $("a").css("color", "#ea5254");
    $(".btn").css("background-color", "#f6e72b  ");
    $(".btn").css("border-color", "#ea5254  ");
    $(".btn").css("color", "#ea5254  ");
    $("h2").css("color", "#ea5254  ");
    $(".timeline .li").css("border-color", "#ea5254");
    $(".point").css("background-color", "#ea5254");
    document.getElementById("marca").src = "../assets/logovermelha.png";
    $("#apr").css("border-bottom", "2px solid transparent");
    $("#idv").css("border-bottom", "2px solid transparent");
    $("#ap").css("border-bottom", "2px solid transparent");
    $("#down").css("border-bottom", "2px solid transparent");
    $("#ico").css("border-bottom", "2px solid #ea5254");
  } else if (scrollPos >= app && scrollPos < downloads) {
    document.getElementById("marca").src = "../assets/logo.svg";
    $("header").css("background-color", "#a65494");
    $(".btn").css("background-color", "#a65494  ");
    $(".btn").css("border-color", "white  ");
    $(".btn").css("color", "white  ");
    $("a").css("color", "white");
    $("h2").css("color", "#a65494  ");
    $(".timeline .li").css("border-color", "#a65494");
    $(".point").css("background-color", "#a65494");

    $("#apr").css("border-bottom", "2px solid transparent");
    $("#idv").css("border-bottom", "2px solid transparent");
    $("#down").css("border-bottom", "2px solid transparent");
    $("#ico").css("border-bottom", "2px solid transparent");
    $("#ap").css("border-bottom", "2px solid white");
  } else if (scrollPos >= downloads) {
    $("#down").css("border-bottom", "2px solid white");
    $("#apr").css("border-bottom", "2px solid transparent");
    $("#idv").css("border-bottom", "2px solid transparent");
    $("#ap").css("border-bottom", "2px solid transparent");
    $("#ap").css("border-bottom", "2px solid transparent");
  } else {
    $("header").css("background-color", "#a65494");
    $(".btn").css("background-color", "#a65494  ");
    $("h2").css("color", "white  ");
    $(".timeline .li").css("border-color", "white");
    $(".point").css("background-color", "white");
    $("#apr").css("border-bottom", "2px solid transparent");
    $("#idv").css("border-bottom", "2px solid transparent");
    $("#down").css("border-bottom", "2px solid transparent");
    $("#ico").css("border-bottom", "2px solid transparent");
    $("#ap").css("border-bottom", "2px solid transparent");
  }
});
