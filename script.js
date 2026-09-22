document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (email && password) {
        message.textContent = "Login successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Please enter your details.";
        message.style.color = "red";
    }

});

document.getElementById("loginForm")?.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        window.location.href = "dashboard.html";
    }

});


function logout() {
    window.location.href = "index.html";
}


function showMessage(message) {
    const dashboardMessage = document.getElementById("dashboardMessage");

    dashboardMessage.textContent = message;
    dashboardMessage.style.color = "green";
}

function startCamera() {

    const video = document.getElementById("camera");

    navigator.mediaDevices.getUserMedia({
        video: true
    })
    .then(function(stream) {
        video.srcObject = stream;
    })
    .catch(function(error) {
        document.getElementById("faceMessage").textContent =
            "Camera permission was denied.";
    });

} 


function verifyFace() {

    const message = document.getElementById("faceMessage");

    message.textContent = "Face verified successfully!";
    message.style.color = "green";

}


function goDashboard() {
    window.location.href = "dashboard.html";
}