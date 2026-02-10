
const quotes = [
    {
        text: "Discipline is choosing between what you want now and what you want most.",
        author: "Abraham Lincoln"
    },
    {
        text: "Suffer the pain of discipline or suffer the pain of regret.",
        author: "Jim Rohn"
    },
    {
        text: "The man who moves a mountain begins by carrying away small stones.",
        author: "Confucius"
    },
    {
        text: "Success is not built on motivation, it is built on consistency.",
        author: "Unknown"
    },
    {
        text: "You do not rise to the level of your goals. You fall to the level of your systems.",
        author: "James Clear"
    },
    {
        text: "Hard choices, easy life. Easy choices, hard life.",
        author: "Jerzy Gregorek"
    },
    {
        text: "Work in silence. Let success make the noise.",
        author: "Frank Ocean"
    }
];


const quoteText = document.querySelector("blockquote");
const authorText = document.querySelector("span");
const newQuoteBtn = document.querySelector(".cont button");
const tweetBtn = document.querySelectorAll(".cont button")[1];

let currentQuoteIndex = 0;


function showQuote() {
    const currentQuote = quotes[currentQuoteIndex];
    quoteText.innerHTML = currentQuote.text;
    authorText.innerHTML = currentQuote.author;
}


newQuoteBtn.addEventListener("click", () => {
    currentQuoteIndex++;

    if (currentQuoteIndex >= quotes.length) {
        currentQuoteIndex = 0; 
    }

    showQuote();
});


tweetBtn.addEventListener("click", () => {
    const quote = quotes[currentQuoteIndex];
    const tweetUrl = `https://twitter.com/intent/tweet?text="${quote.text}" — ${quote.author}`;
    window.open(tweetUrl, "_blank");
});


showQuote();
