window.addEventListener("load", function () {
  var audioColumn = document.querySelector(".audio_column");
  var popupSection = document.getElementById("popup_section");

  function adjustPopupSectionHeight() {
    var audioColumnHeight = audioColumn.offsetHeight;
    var audioColumnOffsetTop = audioColumn.offsetTop;
    var targetHeight = audioColumnHeight + audioColumnOffsetTop + 30;
    popupSection.style.height = targetHeight + "px";
  }

  adjustPopupSectionHeight();
  window.addEventListener("resize", adjustPopupSectionHeight);
});
