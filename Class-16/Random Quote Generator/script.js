const quotes = {
	"quotes": [

{
       "quote":"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse"},
{
       "quote":"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill"},
{
       "quote":"Strive not to be a success, but rather to be of value.","author":"Albert Einstein"},
{
       "quote":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.","author":"Robert Frost"},
{
       "quote":"I attribute my success to this: I never gave or took any excuse.","author":"Florence Nightingale"}]
};


const button = document.getElementById("button");
const quote = document.getElementById("quote");
button.addEventListener('click', ()=>{
   num = Math.floor(Math.random()*5);
   quote.textContent = quotes.quotes[num].quote;
   quote.style.visibility = "visible";
})