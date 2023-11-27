const loxoneAddress = document.getElementById("loxoneAddress").value;
const iconUpload = document.getElementById("iconUpload").files[0];
const lightingController = document.getElementById("lightingController").value;
const lightIcon = document.getElementById("lightIcon");

function toggleLight() {
  // Send a request to the Loxone Miniserver to toggle the light
  localStorage.setItem("loxoneaddress", loxoneAddress);
  const xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    `http://${loxoneAddress}/api/v2/devices/${lightingController}/action/toggle`
  );
  xhr.send();
}

function uploadIcon() {
  const iconFile = iconUpload;
  if (iconFile) {
    // Read the icon file as a base64 encoded string
    const reader = new FileReader();
    reader.readAsDataURL(iconFile);
    reader.onload = function () {
      // Update the light icon with the uploaded icon
      lightIcon.src = reader.result;
    };
  }
}
