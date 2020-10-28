lightbox.option({
    'resizeDuration': 600,
    'wrapAround': true,
    'showImageNumberLabel': false,
    'alwaysShowNavOnTouchDevices': true,
    positionFromTop: 100
   
  });

  function searchPhotos() {
      let input = document.getElementById("search-put").value
      input = input.toLowerCase();
      let images = document.querySelectorAll(".gallery a");

      for (let i = 0; i < images.length; i++) {
          let imagePut = images [i];
          let caption = imagePut.getAttribute("data-title");
          caption = caption.toLowerCase();

          if (caption.includes(input)) {
              imagePut.style.display = "block";
          } else {
              imagePut.style.display = "none";
          }
      }
  }
