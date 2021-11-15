const qrCardSection = document.getElementById('qr-section');
const phone = document.getElementById('sticky-phone');
const phoneNotif = document.getElementById('sticky-notif');
const phoneContact = document.getElementById('sticky-details');
const card = document.getElementById('qr-card');
const xvelocity = gsap || TweenMax;
const controller = new ScrollMagic.Controller();
let customEase = `CustomEase.create("custom", "M0,0,C0.126,0.382,0.049,0.972,0.186,1.14,0.486,1.508,0.818,1.001,1,1"`;
xvelocity.registerPlugin(ScrollTrigger);

if (window.innerWidth >= 768) {

    xvelocity.to(card, {
        scrollTrigger: {
            trigger: qrCardSection,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            pin: true,
            markers: !true,
        },
        opacity: 1,
        rotation: -7,
        y: 170,
        x: (window.innerWidth / 2) - (card.offsetWidth / 15),
        zIndex: 100,
        reverse: true,
        duration: 10,
        ease: customEase,
        onStart: function() {
            card.style.transform = "perspective(200em) ";
        },

        onComplete: function() {
            card.style.zIndex = "1000 !important";
            xvelocity.to(phone, {
                scrollTrigger: {
                    trigger: qrCardSection,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    pin: true,
                    markers: !true,
                },
                opacity: 1,
                scale: 0.9,
                y: 100,
                ease: "power1.zoomInOut",
                duration: 3,
                reverse: true,
                onComplete: function() {
                    xvelocity.fromTo(
                        phoneNotif, {
                            bottom: -90,
                        }, {
                            scrollTrigger: {
                                trigger: card,
                                start: "top top",
                                end: "bottom bottom",
                                markers: !true,
                                scrub: true,
                            },
                            opacity: 1,
                            scale: 0.65,
                            ease: "power1.zoomInOut",
                            delay: 0.5,
                            duration: 0.5,
                            reverse: false,
                            onComplete: function() {
                                xvelocity.to(phoneNotif, {
                                    opacity: 0,
                                    scale: 0.2,
                                    ease: "power1.zoomInOut",
                                    delay: 0.5,
                                    duration: 0.5,
                                    reverse: true,
                                    onComplete: function() {
                                        xvelocity.fromTo(
                                            phoneContact, {
                                                opacity: 0,
                                                scale: 0.8,
                                                bottom: -125,
                                                reverse: true
                                            }, {
                                                scrollTrigger: {
                                                    trigger: card,
                                                    scrub: true,
                                                    start: "top top",
                                                    end: "bottom bottom",
                                                },

                                                scale: 0.8,
                                                opacity: 1,
                                                ease: "power1.easeIn",
                                                duration: 1,
                                                reverse: true,
                                                bottom: -120,

                                            });
                                    },
                                });
                            }
                        });
                },
            });
        },
    });

} else {
    console.warn("Kadon's warning : Device is not a desktop");
    console.log("Avoid such animations on mobile devices, i suggest the use of gifs ( you might use a custom one).");
}