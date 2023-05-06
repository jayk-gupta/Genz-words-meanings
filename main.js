

const input = document.querySelector(".input");
const submitBtn = document.querySelector(".submit-btn");
const ans = document.querySelector(".meaning");
const form = document.querySelector("form");
const img = document.querySelector(".img");


const slangWords = {
  lit: "awesome or amazing",
  "GOAT ": "Greatest Of All Time                      ",
  "Thirsty ": " Desperate for attention or approval                ",
  "Lit AF": "Extremely awesome or amazing",
  "Woke ": " Being aware of current social and political issues ",
  "Squad ": " Group of friends                                     ",
  "Sus ": " Suspicious or shady behavior",
  "Vibes ": "Atmosphere or feeling of a situation                 ",
  "Extra ": "Over the top or excessive behavior                   ",
  "Savage ": "Ruthless or brutally honest                     ",
  "Stan ": " A superfan of a celebrity or musician                 ",
  "Shook ": "Surprised or in disbelief                            ",
  "Slayed ": " To look amazing or to have done something exceptionally well  ",
  "Flex ": "To show off or boast about something                  ",
  "Snatched ": "Looking good or having a good appearance          ",
  AF: "Short for 'as f**k', used to emphasize something        ",
  Lituation: "A situation that is exciting or fun              ",
  YOLO: "You Only Live Once ",
  Cray: "Crazy or wild",
  Litwick: "To be drunk or high",
  FOMO: "Fear Of Missing Out",
  Sus: "Suspicious or questionable",
  Snatched: "To look really good or be on point",
  Salty: "Bitter or angry about something",
  Bae: "A term of endearment for a significant other or crush",
  Slay: "To do something really well or to look amazing while doing it",
  Ghost: "To suddenly stop responding to someone's messages or calls",
  Basic: "Someone who is unoriginal or mainstream",
  "Clap back": "To respond to criticism with a witty comeback",
  Cray: "Crazy or wild",
  Extra: "Over the top or excessive behavior",
  Flex: "To show off or boast about something",
  Gucci: "Good or fine, can also refer to the luxury brand",
  "Lit AF": "Extremely awesome or amazing",
  "No cap": "No lie, or being honest",
  Squad: "Group of friends",
  Thicc: "Having a curvy or voluptuous body",
  TBT: "Throwback Thursday, a social media trend where people share old photos on Thursdays",
  Thirsty: "Desperate for attention or approval",
  Vibes: "Atmosphere or feeling of a situation",
  Woke: "Being aware of current social and political issues",
  Swole: "Muscular or buff",
  Bet: "Agreement or confirmation",
  Clout: "Influence or power, often gained through social media or fame",
  Finesse: "To maneuver or manipulate a situation to one's advantage",
  GOAT: "Greatest Of All Time",
  "Hundo P": "One hundred percent, or completely",
  IRL: "In Real Life",
  Key: "Important or essential",
  Mood: "Expression of current emotions or feelings",
  OTP: "One True Pairing, a term used to describe a favorite fictional couple",
  Peep: "To look or check out",
  Ratchet: "Unpleasant or low-class behavior",
  Receipts: "Evidence or proof",
  Savage: "Ruthless or brutally honest",
  Shade: "Insulting or disrespectful comments",
  Shook: "Surprised or in disbelief",
  Stan: "A superfan of a celebrity or musician",
  TMI: "Too Much Information",
  Turnt: "Excited or hyped up for something",
  Wavy: "Feeling good or having a good vibe",
  "Bye Felicia": "Used to dismiss someone or end a conversation",
  Lituation: "A situation that is exciting or fun",
  Ghosted: "To suddenly stop responding to someone's messages or calls",
  "Low-key": "Secret or low-profile",
  "High-key": "Obvious or strongly expressed",
  Salute: "To show respect or appreciation",
  Dope: "Cool or awesome",
  lmao: " laughing my ass off",
  lol: "laugh out loud",
};

// console.log(Object.keys(slangWords));



const translateSlang = (input) => {
  Object.keys(slangWords).forEach((word) => {
    const regex = new RegExp(word, "ig");
    const def = slangWords[word];
  if (def !== undefined) {
    // Only replace if word is found in slangWords
    input = input.replace(regex, def);
  }
  });
  return input;
};

//FORM
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value;
  const translated = translateSlang(text);
  if (text != translated) {
    ans.textContent = `" ${translated} "`;
  }
  else {
    ans.textContent = `"word not found"`;
  }
});



//////////////////////////////////////////////////


