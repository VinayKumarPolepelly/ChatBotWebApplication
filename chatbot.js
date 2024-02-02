let chatbotMsgList = [
  "Hi",
  "Hey",
  "Good Morning",
  "Good Evening",
  "How can I help you?",
  "Thank You",
];

let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");
let sendMsgBtn = document.getElementById("sendMsgBtn");

sendMsgBtn.onclick = function sendMsgToBot() {
  let l = chatbotMsgList.length;
  let msg = chatbotMsgList[Math.ceil(Math.random() * l) - 1];
  let msgToChatbotContianer = document.createElement("div");
  msgToChatbotContianer.classList.add("msg-to-chatbot-container");
  chatContainer.appendChild(msgToChatbotContianer);

  let msgToBot = document.createElement("span");
  msgToBot.classList.add("msg-to-chatbot");
  let textToBot = userInput.value;
  msgToBot.textContent = textToBot;
  msgToChatbotContianer.appendChild(msgToBot);

  let msgFromChatbotContainer = document.createElement("div");
  msgFromChatbotContainer.classList.add("msg-from-chatbot-container");
  chatContainer.appendChild(msgFromChatbotContainer);

  let msgFromChatbot = document.createElement("span");
  msgFromChatbot.classList.add("msg-from-chatbot");

  msgFromChatbot.textContent = msg;
  msgFromChatbotContainer.appendChild(msgFromChatbot);

  userInput.value = "";
};
