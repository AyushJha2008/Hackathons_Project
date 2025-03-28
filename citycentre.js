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

    // Button active states
    const setButtonActive = (button) => {
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
        }, 300);
    };

    // Event Listeners
    Object.entries(buttons).forEach(([key, button]) => {
        if (button) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                setButtonActive(button);
                
                setTimeout(() => {
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
                }, 300);
            });
        }
    });

    // Optional: Add extra interactivity
    const cards = document.querySelectorAll('.dashboard-card');
    
    // Add pulse effect to alert card
    const alertCard = document.querySelector('.alerts-card');
    if (alertCard) {
        setInterval(() => {
            alertCard.classList.add('pulse');
            setTimeout(() => {
                alertCard.classList.remove('pulse');
            }, 1000);
        }, 5000);
    }
    
    // Add CSS for pulse animation
    const style = document.createElement('style');
    style.textContent = `
        .pulse {
            animation: pulse-animation 1s ease;
        }
        
        @keyframes pulse-animation {
            0% { box-shadow: 0 0 0 0 rgba(255, 77, 77, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(255, 77, 77, 0); }
            100% { box-shadow: 0 0 0 0 rgba(255, 77, 77, 0); }
        }
        
        .card-action-btn.active, .alert-type.active {
            transform: scale(0.95);
        }
    `;
    document.head.appendChild(style);
});