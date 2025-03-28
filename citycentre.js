document.addEventListener('DOMContentLoaded', () => {
    const buttons = {
        traffic: document.querySelector('.traffic-button'),
        weather: document.querySelector('.weather-button'),
        pollution: document.querySelector('.pollution-button'),
        alerts: document.querySelector('.alert-button'),
        trafficAlert: document.querySelector('.traffic-alert'),
        mishapAlert: document.querySelector('.mishap-alert'),
        calamityAlert: document.querySelector('.calamity-alert'),
        driverMode: document.querySelector('.driver-mode-btn'),
        communityChat: document.querySelector('.community-btn'),
        emergencyServices: document.querySelector('.emergency-btn')
    };

    // Navigation functions
    const navigateTo = (page) => {
        window.location.href = `./${page}.html`;
    };

    // Event Listeners
    Object.entries(buttons).forEach(([key, button]) => {
        if (button) {
            button.addEventListener('click', () => {
                switch(key) {
                    case 'traffic':
                        navigateTo('traffic');
                        break;
                    case 'weather':
                        navigateTo('weather');
                        break;
                    case 'pollution':
                        navigateTo('pollution');
                        break;
                    case 'alerts':
                        navigateTo('alert');
                        break;
                    case 'trafficAlert':
                        navigateTo('traffic-alert');
                        break;
                    case 'mishapAlert':
                        navigateTo('mishap-alert');
                        break;
                    case 'calamityAlert':
                        navigateTo('calamity-alert');
                        break;
                    case 'driverMode':
                        // Placeholder for driver mode functionality
                        alert('Driver Mode activated');
                        break;
                    case 'communityChat':
                        // Placeholder for community chat functionality
                        alert('Opening Community Chat');
                        break;
                    case 'emergencyServices':
                        // Placeholder for emergency services functionality
                        alert('Connecting to Emergency Services');
                        break;
                }
            });
        }
    });

    // Optional: Add hover effects or additional interactivity
    const cards = document.querySelectorAll('.dashboard-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});