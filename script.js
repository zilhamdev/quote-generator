//get Mew Quote Button
const newQuoteBtn = document.getElementById("new-quote");
newQuoteBtn.addEventListener("click", () => getQuote());

//get Quote Text
const quote = document.getElementById("quote");

//get Quote Author
const author = document.getElementById("author");

//get Twitter Button
const twitterBtn = document.getElementById("twitter");


// Get quote from API
async function getQuote() {
    const proxyUrl = "https://zildev-cors.herokuapp.com/";
    const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json()
        quote.innerText = data.quoteText;
        author.innerText = data.quoteAuthor;
        twitterBtn.setAttribute("href", `https://twitter.com/intent/tweet?text=${quote.innerText} - ${author.innerText}`);
    } catch (err) {
        getQuote();
    }
}

// On Load
getQuote();

