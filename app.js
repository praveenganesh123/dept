var carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseover', function() {
      this.style.animationPlayState = 'paused';
    });

    carousel.addEventListener('mouseout', function() {
      this.style.animationPlayState = 'running';
    });