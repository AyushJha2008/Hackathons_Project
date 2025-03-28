const trafficButton = document.querySelector('.traffic-button');
const weatherButton = document.querySelector('.weather-button');
const pollutionButton = document.querySelector('.pollution-button');
const alertSection = document.querySelector('.alert-section');
const driverMode = document.querySelector('.driver-mode');
const communityChat = document.querySelector('.community-chat');
const emergencyServices = document.querySelector('.emergency-services');


traffic.addEventListener('click', () => {
    window.location.href = './traffic.html';
});

weather.addEventListener('click', () => {
    window.location.href = './weather.html';
});

pollution.addEventListener('click', () => {
    window.location.href = './pollution.html';
});

alertSection.addEventListener('click', () => {
    window.location.href = './alert.html';
});


