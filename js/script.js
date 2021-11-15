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



    xvelocity.fromTo(card, {
        opacity: 0.9,
        rotation: 0,
        x: 5,
        y: -100,
    }, {
        scrollTrigger: {
            trigger: qrCardSection,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            pin: true,
            markers: !true,
        },
        y: 370,
        opacity: 1,
        rotation: -7,
        x: (window.innerWidth / 2) - (card.offsetWidth / 15),
        zIndex: 100,
        reverse: true,
        duration: 5,
        delay: .2,
        ease: "power0.aseInOut", //customEase,
        onStart: function() {
            qrCardSection.style.transform = "perspective(100px) rotateY(-0.5deg) rotateX(1deg) rotateZ(1deg) !important ";
        },

        onComplete: function() {
            qrCardSection.style.transform = "unset !important ";
            card.style.transform = "unset !important ";

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
                duration: 5,
                delay: 2,
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
                                reverse: true,
                                scrub: true,
                            },
                            opacity: 1,
                            scale: 0.65,
                            ease: "power1.zoomInOut",
                            delay: 2.5,
                            duration: 1,
                            reverse: true,
                            onComplete: function() {
                                xvelocity.to(phoneNotif, {
                                    opacity: 0,
                                    scale: 0.2,
                                    ease: "power1.bounceIn",
                                    delay: 1,
                                    duration: 0.5,
                                    reverse: true,
                                    onComplete: function() {
                                        xvelocity.fromTo(
                                            phoneContact, {
                                                opacity: 0,
                                                scale: 0.8,
                                                bottom: -125,
                                            }, {
                                                scrollTrigger: {
                                                    trigger: card,
                                                    scrub: true,
                                                    start: "top top",
                                                    end: "bottom bottom",
                                                },

                                                scale: 0.8,
                                                opacity: 1,
                                                ease: "power0.easeInOut",
                                                delay: 4,
                                                duration: 3,
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