function shadowmuhiddin(options) {
  let imsges = document.querySelectorAll(".shadowcha");
  if (options.shadow_type == "hard") {
    options.shadow_type = "0px";
  } else {
    options.shadow_type = "15px";
  }
  images.forEach((image) => {
    image.style.boxShadow = `10px 10 px ${options.shadow_type} 1px #0004`;
    if (options.padding) {
      image.style.padding = "1em";
    }
  });
}

module.exports.shadowmuhiddin = shadowmuhiddin;
 