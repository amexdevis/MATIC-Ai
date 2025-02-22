// Select DOM elements
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Function to add a message to the chat box
function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}

// Function to handle bot responses
function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();

    if (userMessage.includes("who are you")) {
        return "I am MATIC AI.";
    } else if (userMessage.includes("who made you")) {
        return "I am built by Keshav Khandelwal.";
    } else if (userMessage.includes("who trained you")) {
        return "I am trained by Google.";
    } else {
        return "I'm sorry, I didn't understand that. Could you rephrase?";
    }
}

// Event listener for the send button
sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    // Add user message to chat
    addMessage('user', userMessage);

    // Get bot response
    const botResponse = getBotResponse(userMessage);

    // Add bot response to chat after a short delay
    setTimeout(() => {
        addMessage('bot', botResponse);
    }, 500);

    // Clear input field
    userInput.value = "";
});

// Optional: Allow pressing Enter to send a message
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});
