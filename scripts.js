document.addEventListener('DOMContentLoaded', function () {
    console.log('Document is ready!');
});

// chatbot.js

// Function to toggle the chatbot visibility
function toggleChatbot() {
    const chatbot = document.querySelector('.chatbot-container');
    const openButton = document.querySelector('.open-chatbot');
    if (chatbot.style.display === 'none' || chatbot.style.display === '') {
        chatbot.style.display = 'flex';
        openButton.style.display = 'none';
    } else {
        chatbot.style.display = 'none';
        openButton.style.display = 'block';
    }
}

// Function to handle sending messages
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const messageContainer = document.getElementById('messages-container');
    const userMessage = userInput.value;

    if (userMessage.trim() !== '') {
        // Create user message element
        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('message', 'user-message');
        userMessageElement.textContent = userMessage;
        messageContainer.appendChild(userMessageElement);

        // Clear input field
        userInput.value = '';

        // Auto scroll to the bottom of messages
        messageContainer.scrollTop = messageContainer.scrollHeight;

        // Simulate bot response
        setTimeout(() => {
            const botMessageElement = document.createElement('div');
            botMessageElement.classList.add('message', 'bot-message');
            botMessageElement.textContent = getBotResponse(userMessage);
            messageContainer.appendChild(botMessageElement);

            // Auto scroll to the bottom of messages
            messageContainer.scrollTop = messageContainer.scrollHeight;
        }, 1000);
    }
}

// Function to get a bot response (simple example)
function getBotResponse(userMessage) {
    // Here you can implement more complex logic or integrate with a chatbot API
    const responses = {
        'hello': 'Hello! How can I assist you today?',
        'hi': 'Hi there! How can I help you?',
        'how are you': 'I am a bot, but I am here to help you!'
    };

    return responses[userMessage.toLowerCase()] || 'Sorry, I am not sure how to respond to that.';
}

// Function to handle "Enter" key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
