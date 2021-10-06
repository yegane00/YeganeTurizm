

window.addEventListener('DOMContentLoaded', event => {

    
   
   
   
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    
   
    navbarShrink();

   
    document.addEventListener('scroll', navbarShrink);

   
    const mainNav = document.body.querySelector('#mainNav');
   
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
      
            offset: 74,
        });
    };

    
    const navbarToggler = document.body.querySelector('.navbar-toggler');
  
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
     
            }
        });
    });

    
    

});

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


if( isMobile.any() ){
    var foto = document.getElementById('imgid');
    foto.remove();
    var texts = document.createElement("P");
    texts.style.fontFamily = "Courier New, Courier, monospace";
    texts.innerHTML = "Yegane Turizm";
    document.getElementById("elemtxt").appendChild(texts); 
}
else{
    console.log('pc');
}
