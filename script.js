function togglePanel(id) {
  var panel = document.getElementById(id);
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}

function requestQuote() {
  let service = document.getElementById("service").value;
  let days = document.getElementById("days").value;
  let phone = document.getElementById("phone").value;
  
  if (service === "" || days === "" || phone === "") {
    alert("Please fill in all fields so we can send your quote");
    return;
  }
  
  let message = `Hi Mavis Cares, I'd like a quote for: %0A%0AService: ${service}%0ADays per week: ${days}%0AMy number: ${phone}%0A%0APlease send me pricing details.`;
  
  let whatsappNumber = "27603429454"; // Change to your real WhatsApp number
  
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}