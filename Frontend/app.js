const API_URL = "http://localhost:8080/api/health";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {

    document.getElementById("message").innerHTML = `
      <h3>Application Status</h3>
      <p><strong>Status:</strong> ${data.status}</p>
      <p><strong>Message:</strong> ${data.message}</p>
      <p><strong>Time:</strong> ${data.timestamp}</p>
    `;
  })
  .catch(error => {
    console.error(error);

    document.getElementById("message").innerHTML = `
      <p>Backend connection failed</p>
    `;
  });
