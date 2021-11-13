const qrCardSection = document.getElementById('qr-section');
const phone = document.getElementById('sticky-phone');
const phoneNotif = document.getElementById('sticky-notif');
const phoneContact = document.getElementById('sticky-details');
const xvelocity = gsap;
var controller = new ScrollMagic.Controller();

xvelocity.registerPlugin(ScrollTrigger);

xvelocity.to("#qr-card", {
    scrollTrigger: {
        trigger: "#qr-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: true,
        toggleActions: "restart pause reverse pause",
    },
    pin: true,
    opacity: 1,
    x: -100,
    ease: "power3.out",
    duration: 3,
    reverse: true
});

xvelocity.to("#sticky-phone", {
    scrollTrigger: {
        trigger: "#sticky-phone",
        start: "top center",
        end: "bottom top",
        scrub: true,
        pin:true,
        markers: true,
    },
    onStart: function() {
        xvelocity.to(phone, {
            y: 5%,
            opacity: 1,
            zoom: 5,
            ease: "power3.out",
            duration: 5,
            reverse: true
        });
        xvelocity.to(phoneNotif, {
            delay: 5,
            opacity: 1,
            zoom: 5,
            ease: "power3.easeInOut",
            duration: 5,
            reverse: true
        });
        xvelocity.to(phoneNotif, {
            delay: 5,
            opacity: 1,
            s
            ease: "power3.easeIn",
            duration: 5,
            reverse: true
        });
    },
    
})
