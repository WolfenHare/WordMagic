// Random Disney quote generator that serves inspirational quotes at random with a Welcome message and interaction based of the word 'YES'

// Setting up the basics: User name, Welcome message, and, the YES to recieve a magical quote.  
const userName = `Friendo`;
const userReply = `yes`.toLowerCase();
const welcomeMessage = `Hello ${userName} . In need of a bit of magic today? Type YES! To recieve a little bit of magic~!`;

// A selection of Disney quotes from movies, Walt, and general Disney mindset.  
const beastsLibrary = {
    _quotes: [
        {quote: `Every day aspire to be the person your are at Disney. That person is gorsh darn happy.`},
        {quote: `In a world where you can be anything, be the weird Disney person.`},
        {quote: `I only need Disney related things on days that end in Y!`},
        {quote: `Thankful for all the different things to eat that are Mickey shaped.`},
        {quote: `You don't need to be magic like them. Be magic like you!.`},
        {quote: `Never look back darling. It distracts from the now.`},
        {quote: `A dream is a wish the heart makes.`},
        {quote: `If you can dream it you can do it.`},
        {quote: `Being normal is vastly overrated.`},
        {quote: `Dreams come true, if we wish hard enough.`},
        {quote: `Find your happily ever after.`},
        {quote: `If you do your best each and every day,good things are sure to come your way.`},
        {quote: `Just keep swimming.`},
        {quote: `Have a magical day.`},
        {quote: `Do the next right thing.`},
        {quote: `You must not let anyone define your limits because of where you come from. Your only limit is your soul.`},
        {quote: `In every job that must be done, there is an element of fun.`},
        {quote: `It's kind of fun to do the impossible.`},
        {quote: `It never hurts to keep looking for sunshine.`},
        {quote: `First: Think. Second: Dream. Third: Believe. And finally:Dare.`},
        {quote: `There's a great big beautiful tomorrow.`},
        {quote: `Don't just fly. Soar.`},
        {quote: `SILENZIO BRUNO!!!!`},
        {quote: `Our fate lies within us, you only have to be brave enought to see it.`},
    ],

// Grab a quote out of Beast's library:
get quote() {
    this._quotes;
},
set quote(value) {
    return this._quotes = value;
},

// Add a new quotes to Beast's library: 
addQuote (quote) {
    const newQuote = {
        quote: [],
    };
    this._quotes.push(newQuote);
},

// Function to return a random quote out of Beast's library to the user:
returnRandomQuote () {
    const totalQuotes = beastsLibrary._quotes.length; 
    const randomIndex = Math.floor(Math.random() * totalQuotes);
    const randomQuote = beastsLibrary._quotes[randomIndex].quote;
    return randomQuote;
},
}

// Greeting message to user:
console.log(welcomeMessage);

// Return random quote to user:
const serveRandomQuote = beastsLibrary.returnRandomQuote();

// Conditional logic based on user input:
if (userReply === `yes`) {
    console.log(`Here, ${userName}, enjoy this little bit of pixie dust  : "${serveRandomQuote}"`);
} else {
    console.log(`Hello ${userName}, please type 'YES' to get a little magic in your day!`);
};

