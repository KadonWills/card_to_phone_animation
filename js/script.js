$(function() {
    const qrCard = document.getElementById('qr-section');

    var controller = new ScrollMagic.Controller();

    gsap.timeline({
            triggerElement: "#qr-section",
            duration: 300, // the scene should last for a scroll distance of 100px
            offset: 400 // start this scene after scrolling for 50px
        }).addIndicators({ name: "1 (duration: 2.5)" })
        .setPin('#qr-card')
        .to("#qr-card", {
            ease: "power3.easeInOut",
            duration: 2.5,
            y: 550,
            x: (window.innerWidth / 2) - 500,
        })
        // .setTween("#qr-card", 0.5, { backgroundColor: "green", scale: 2.5 })
        .addTo(controller);

    // new ScrollMagic.Scene({
    //         triggerElement: '#qr-section',
    //         duration: 300,
    //         reverse: true,
    //         offset: 100,

    //     })
    //     .addIndicators({ name: "Scroll To Phone" })
    //     .setTween("#qr-section", 0.5, { backgroundColor: "green", scale: 2.5 })
    //     .addTo(controller)


    /*gsap.t imeline({
                   scro     llTrigger: {
                trigger: "#qr-section",
            
                            start: "center",
                            end: "bottom",
                            scrub: true,
                            pin: true
                        }
                 }).t   o("#qr-card", {
                        ease: "power3.easeInOut",
                        duration: 2.5,
                        y: 550,
                        x: (window.innerWidth / 2) - 500,
        }).addIndicators({ name: "1 (duration: 2.5)" }) // add indicators (requires plugin)

            
    docu            ment.addEventListener('scroll', function() {
            cons        t scrollPercent = (document.documentElement.scrollTop + document.body.scrollTop) /
            (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 10;
            
                    const startMovingPoint = 0;
                    const leftMove = 60.5;
        const rightMove = 80.5;
            
               if (     scrollPercent > startMovingPoint && scrollPercent < leftMove) {
                        qrCard.style.transformStyle = `preserve-3d`;
                        qrCard.style.transform = `perspective(${1000 - (65 * (scrollPercent - startMovingPoint))}px) rotateY(-${1.5 * (scrollPercent - startMovingPoint)}deg)`;
                        return;
              } el      se if (scrollPercent >= leftMove && scrollPercent < rightMove) {
                        qrCard.style.transform = `perspective(${(75 * (scrollPercent - startMovingPoint))}px) rotateY(${-15.5 + (8 * (scrollPercent - 11))}deg)`;
                        return;
          } el          se if (scrollPercent >= rightMove) {
                        qrCard.style.transform = `perspective(${700 - (65 * (scrollPercent - 12))}px) rotateY(${10 - (4.5 * (scrollPercent - 12))}deg)`;
                        return;
             } el       se {
                        qrCard.style.transform = `initial`;
                        return;
                    }
                });*/
});