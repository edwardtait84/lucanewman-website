document.addEventListener("DOMContentLoaded", function () {
    // Quote rotation
    const quotes = [
      { text: "An outstanding musician", author: "Heli Ignatius-Fleet" },
      { text: "Talanted young musician", author: "Florian Mitrea" },
      { text: "Lots of potential", author: "Andreas Flölich" },
    ];
  
    let quoteIndex = 0;
    const quoteContainer = document.getElementById("quote-container");
    const quoteDotsContainer = document.getElementById("quote-dots");
  
    function changeQuote() {
      quoteContainer.style.opacity = 0; // Start fading out
  
      setTimeout(() => {
        quoteIndex = (quoteIndex + 1) % quotes.length;
        const currentQuote = quotes[quoteIndex];
        quoteContainer.innerHTML = `
          <p>"${currentQuote.text}"</p>
          <p>- ${currentQuote.author}</p>
        `;
        quoteContainer.style.opacity = 1; // Fade in new quote
        updateQuoteDots();
      }, 600); // Match the transition duration
    }
  
    function updateQuoteDots() {
      quoteDotsContainer.innerHTML = "";
      quotes.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.className = "quote-dot" + (index === quoteIndex ? " active-dot" : "");
        dot.addEventListener("click", () => {
          quoteIndex = index;
          changeQuote();
        });
        quoteDotsContainer.appendChild(dot);
      });
    }
  
    changeQuote();
    setInterval(changeQuote, 6000);
  
    // Tabs functionality
    window.openTab = function (tabName) {
      document.querySelectorAll(".tab").forEach(tab => tab.style.display = "none");
      document.getElementById(tabName).style.display = "block";
      document.querySelectorAll(".tab-button").forEach(button => button.classList.remove("active-tab"));
      document.getElementById(`${tabName}-button`).classList.add("active-tab");
    };
  });
  