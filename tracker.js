(function() {
  // Use a public API to fetch the visitor's public IP address
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      var payload = {
        ip: data.ip,
        referrer: document.referrer || "Direct/None"
      };

      // Send the data to your Google Apps Script endpoint
      fetch('https://script.google.com/macros/s/AKfycbzPw6Thsi3sEckcZ4NjMp3J5tiuPKhhIdHjbsuBAyWe2NqxP0nQSAJggwGF5c3rFqapfw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
    })
    .catch(error => console.error('Tracking error:', error));
})();