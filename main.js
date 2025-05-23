// quote generator
var quotes = [
  "“Be yourself; everyone else is already taken.”\n-- Oscar Wilde",
  "“I`m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell don`t deserve me at my best.\n-- Marilyn Monroe”",
  "“So many books, so little time.”\n-- Frank Zappa",
  "“Two things are infinite: the universe and human stupidity; and I`m not sure about the universe.”\n-- Albert Einstein",
  "“A room without books is like a body without a soul.”\n-- Marcus Tullius Cicero",
  "“Be who you are and say what you feel, because those who mind don`t matter, and those who matter don`t mind.”\n-- Bernard M. Baruch",
  "“You`ve gotta dance like theres nobody watching,\nLove like you`ll never be hurt,\nSing like theres nobody listening,\nAnd live like it`s heaven on earth.”\n-- William W. Purkey",
  "“Watch the quotes fall like snow, may it bring you happiness and a little smile!”\n-- Bassem Al-Abyad",
  "“Only one Nino, the loveliest and prettiest of all”\n-- Nino",
];

var quoteBtn = document.getElementById("quoteBtn");
var quoteDisplay = document.getElementById("quoteDisplay");

quoteBtn.addEventListener("click", () => {
  quoteDisplay.style.transition = "opacity 0.6s";
  quoteDisplay.style.opacity = 0;
  setTimeout(() => {
    var randomIndex, newQuote;
    var attempts = 0;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
      newQuote = quotes[randomIndex];
      attempts++;
    } while (
      quotes.length > 1 &&
      quoteDisplay.innerHTML.replace(/<br>/g, "\n") === newQuote &&
      attempts < 10
    );
    quoteDisplay.innerHTML = newQuote.replace(/\n/g, "<br>");
    quoteDisplay.style.opacity = 1;
  }, 300);
});

// snowflake generator (falling quotes)
function createSnowflake() {
  var snowflake = document.createElement("span");
  var icons = [
    '<i class="fa fa-quote-right"></i>',
    '<i class="fa fa-quote-left"></i>',
  ];
  snowflake.innerHTML = icons[Math.floor(Math.random() * icons.length)];
  snowflake.style.position = "fixed";
  snowflake.style.top = "-2em";
  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.fontSize = Math.random() * 20 + 10 + "px";
  snowflake.style.color = "white";
  snowflake.style.opacity = Math.random() * 0.5 + 0.5;
  snowflake.style.pointerEvents = "none";
  snowflake.style.zIndex = 9999;
  document.body.appendChild(snowflake);

  var fallDuration = Math.random() * 5 + 5;
  var horizontalDrift = (Math.random() - 0.5) * 40;

  snowflake.animate(
    [
      { transform: `translateY(0) translateX(0)` },
      { transform: `translateY(100vh) translateX(${horizontalDrift}vw)` },
    ],
    {
      duration: fallDuration * 1000,
      easing: "linear",
    }
  );

  setTimeout(() => {
    snowflake.remove();
  }, fallDuration * 1000);
}

setInterval(createSnowflake, 200);
