const moonTrack = document.querySelector(".moon-carousel .carousel-track");
const moonImages = moonTrack.querySelectorAll("img");
const moonPrev = document.querySelector(".moon-carousel .carousel-btn.prev");
const moonNext = document.querySelector(".moon-carousel .carousel-btn.next");
let moonIndex = 0;

function updateMoonCarousel() {
  moonTrack.style.transform = `translateX(-${moonIndex * 340}px)`; // 320px + 20px margin
}

moonNext.addEventListener("click", () => {
  if (moonIndex < moonImages.length - 2) {
    moonIndex++;
  } else {
    moonIndex = 0; // Loop back to start
  }
  updateMoonCarousel();
});

moonPrev.addEventListener("click", () => {
  if (moonIndex > 0) {
    moonIndex--;
  } else {
    moonIndex = moonImages.length - 2; // Loop to end
  }
  updateMoonCarousel();
});

// Auto-play loop
setInterval(() => {
  moonNext.click();
}, 2500); // Change image every 2.5 seconds

// Initialize position
updateMoonCarousel();

document
  .querySelector(".booking-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const formData = {
      name: this.querySelector('input[type="text"]').value,
      email: this.querySelector('input[type="email"]').value,
      phone: this.querySelector('input[type="tel"]').value,
      package: this.querySelector("select").value,
      requests: this.querySelector("textarea").value,
      timestamp: new Date().toISOString(),
    };

    // Save to localStorage as array
    const bookings = JSON.parse(localStorage.getItem("moonBookings") || "[]");
    bookings.push(formData);
    localStorage.setItem("moonBookings", JSON.stringify(bookings));

    document.getElementById("form-toggle").checked = false;
    this.reset();
  });

function exportBookingsToCSV() {
  const bookings = JSON.parse(localStorage.getItem("moonBookings") || "[]");
  if (!bookings.length) {
    alert("No bookings to export.");
    return;
  }
  const headers = Object.keys(bookings[0]);
  const csvRows = [
    headers.join(","), // header row
    ...bookings.map((obj) =>
      headers.map((h) => `"${(obj[h] || "").replace(/"/g, '""')}"`).join(",")
    ),
  ];
  const csvData = csvRows.join("\n");
  const blob = new Blob([csvData], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  // Create a temporary link to download
  const a = document.createElement("a");
  a.href = url;
  a.download = "moon_bookings.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// --- AI Assistant JSON backend ---
let aiKnowledge = [];

fetch('responses.json')
  .then(response => response.json())
  .then(data => {
    aiKnowledge = data;
  })
  .catch(() => {
    // Fallback if fetch fails
    aiKnowledge = [];
  });

const aiFallbacks = [
  "Sorry, I don't have information on that. Please try asking about tours, bookings, or missions.",
  "I'm not sure about that. Can you rephrase or ask about our services, bookings, or schedules?",
  "That topic is outside my training data. Try asking about lunar tours, booking, or space travel tips!",
];

// --- AI Assistant Chat Logic ---
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const userMsg = chatInput.value.trim();
  if (!userMsg) return;

  // Display user message
  appendChatMessage("You", userMsg);

  // Find AI answer
  const answer = getAIAnswer(userMsg);
  setTimeout(() => appendChatMessage("Lunaria AI", answer), 400);

  chatInput.value = "";
});

function appendChatMessage(sender, text) {
  const msg = document.createElement("p");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAIAnswer(userMsg) {
  const msg = userMsg.toLowerCase();
  for (const entry of aiKnowledge) {
    if (entry.keywords.some((kw) => msg.includes(kw))) {
      // Replace {{time}} with current time if present
      return entry.answer.replace(
        "{{time}}",
        new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    }
  }
  // Fallback if no match
  return aiFallbacks[Math.floor(Math.random() * aiFallbacks.length)];
}

// Add popup effect to sections on scroll
document.addEventListener("DOMContentLoaded", function () {
  const popups = document.querySelectorAll(
    ".hero, .gallery, .about, .services, .booking"
  );
  popups.forEach((el) => el.classList.add("section-popup"));

  function revealOnScroll() {
  popups.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80 && rect.bottom > 0) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
}

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

document.getElementById('navbar-toggle').onclick = function() {
  document.querySelector('.navbar-links').classList.toggle('open');
};

