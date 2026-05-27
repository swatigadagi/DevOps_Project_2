const API_URL = "http://localhost:8080/api/health";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    document.getElementById("message").innerText = data.message;
  })
  .catch(error => {
    console.error("Error:", error);
  });
