document.addEventListener('DOMContentLoaded', () => {
    const traffic = document.querySelector('.traffic-button');
    const weather = document.querySelector('.weather-button');
    const pollution = document.querySelector('.pollution-button');

    if (traffic) {
        traffic.addEventListener('click', () => {
            window.location.href = 'traffic.html';
        });
    }

    if (weather) {
        weather.addEventListener('click', () => {
            window.location.href = 'weather.html';
        });
    }

    if (pollution) {
        pollution.addEventListener('click', () => {
            window.location.href = 'pollution.html';
        });
    }
});

const trafficButton = document.querySelector('.traffic-button');
const weatherButton = document.querySelector('.weather-button');
const pollutionButton = document.querySelector('.pollution-button');
const alertSection = document.querySelector('.alert-button');
const trafficAlert = document.querySelector('traffic-alert');
const driverMode = document.querySelector('.driver-mode');
const communityChat = document.querySelector('.community-chat');
const emergencyServices = document.querySelector('.emergency-services');


trafficButton.addEventListener('click', () => {
    window.location.href = './traffic.html';
});

weatherButton.addEventListener('click', () => {
    window.location.href = './weather.html';
});

pollutionButton.addEventListener('click', () => {
    window.location.href = './pollution.html';
});

alertSection.addEventListener('click', () => {
    window.location.href = './alert.html';
});


