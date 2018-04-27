(function() {
    window.setInterval(function() {
        var timeLeftElement = document.querySelector('#timeLeft');

        if (timeLeftElement){
            if (reservations.isExpired()) {
                sessionStorage.removeItem('reservation')
    
                document.querySelector('#reservations').innerHTML = '';
            } else {
                timeLeftElement.textContent = reservations.formatExpirationTime();
            }
        }        
    }, 1000)
})();