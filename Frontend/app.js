const API_URL = process.env.API_URL;
fetch(`${API_URL}/api/v1/health`)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("message").innerHTML = `
      <h3>Application Status</h3>
      <p><strong>Status:</strong> ${data.status}</p>
      <p><strong>Message:</strong> ${data.message}</p>
      <p><strong>Time:</strong> ${data.timestamp}</p>
    `;
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
    document.getElementById("message").innerHTML = `
      <p>Backend connection failed</p>
    `;
  });
