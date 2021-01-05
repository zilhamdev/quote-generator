//get Mew Quote Button
const newQuoteBtn = document.getElementById("new-quote");
newQuoteBtn.addEventListener("click", () => getQuote());

//get Quote Container
const quoteContainer = document.getElementById("quote-container");

//get Quote Text
const quote = document.getElementById("quote");

//get Quote Author
const author = document.getElementById("author");

//get Twitter Button
const twitterBtn = document.getElementById("twitter");

//get loader
const loader = document.getElementById("loader");

function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function hideLoadingSpinner() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// Get quote from API
async function getQuote() {
    showLoadingSpinner();
    const proxyUrl = "https://zildev-cors.herokuapp.com/";
    const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json()
        const { quoteText, quoteAuthor } = data;
        quote.innerText = quoteText;
        
        if (quoteAuthor.length <= 1) {
            author.innerText = "Unknown";
        } else {
            author.innerText = quoteAuthor;
        }

        if (quoteText.length > 100) {
            quote.classList.add("long-quote");
        } else {
            quote.classList.remove("long-quote");
        }
        twitterBtn.setAttribute("href", `https://twitter.com/intent/tweet?text=${quote.innerText} - ${author.innerText}`);
        hideLoadingSpinner();
    } catch (err) {
        console.log(err);
    }
}

// On Load
getQuote();
