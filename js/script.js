window.mobileCheck = function () {
    let check = false;
    (function (a) {
        if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                a.substr(0, 4)
            )
        )
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

// -----ANIMATION START-----
if (!mobileCheck()) {
    const path = {
        curviness: 0,
        autoRotate: false,
        values: [
            { x: -700, y: 0 },
            { x: 0, y: 0 },
        ],
    };
    const path2 = {
        curviness: 0,
        autoRotate: false,
        values: [
            { x: window.innerWidth, y: 0 },
            { x: 0, y: 0 },
        ],
    };
    const path3 = {
        curviness: 0,
        autoRotate: false,
        values: [
            { x: window.innerWidth, y: 0 },
            { x: 0, y: 0 },
        ],
    };
    const path4 = {
        curviness: 0,
        autoRotate: false,
        values: [
            { x: -3400, y: 0 },
            { x: 0, y: 0 },
        ],
    };
    const path5 = {
        curviness: 0,
        autoRotate: false,
        values: [
            { x: -1000, y: 0 },
            { x: 0, y: 0 },
        ],
    };
    const path6 = {
        curviness: 0,
        autoRotate: false,
        values: [
            { x: -window.innerWidth, y: 0 },
            { x: 0, y: 0 },
        ],
    };
    const tween = new TimelineLite();
    const tween2 = new TimelineLite();
    const tween3 = new TimelineLite();
    const tween4 = new TimelineLite();
    const tween5 = new TimelineLite();
    const tween6 = new TimelineLite();
    tween.add(
        TweenLite.to("#coder-heading", 1, {
            bezier: path,
        })
    );
    tween2.add(
        TweenLite.to("#coder-info", 1, {
            bezier: path2,
        })
    );
    tween3.add(
        TweenLite.to("#learner-heading", 1, {
            bezier: path3,
        })
    );
    tween4.add(
        TweenLite.to("#learner-info", 1, {
            bezier: path4,
        })
    );
    tween5.add(
        TweenLite.to("#project-heading", 1, {
            bezier: path5,
        })
    );
    tween6.add(
        TweenLite.to("#project-info", 1, {
            bezier: path2,
        })
    );
    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
        triggerElement: "#page-2",
        duration: 979,
        triggerHook: 1,
    })
        .setTween(tween)
        .addTo(controller);
    const scene2 = new ScrollMagic.Scene({
        triggerElement: "#page-2",
        duration: 979,
        triggerHook: 1,
    })
        .setTween(tween2)
        .addTo(controller);
    const scene3 = new ScrollMagic.Scene({
        triggerElement: "#page-3",
        duration: 979,
        triggerHook: 1,
    })
        .setTween(tween3)
        .addTo(controller);
    const scene4 = new ScrollMagic.Scene({
        triggerElement: "#page-3",
        duration: 979,
        triggerHook: 1,
    })
        .setTween(tween4)
        .addTo(controller);
    const scene5 = new ScrollMagic.Scene({
        triggerElement: "#page-4",
        duration: 979,
        triggerHook: 1,
    })
        .setTween(tween5)
        .addTo(controller);
    const scene6 = new ScrollMagic.Scene({
        triggerElement: "#page-4",
        duration: 979,
        triggerHook: 1,
    })
        .setTween(tween6)
        .addTo(controller);
} else {
    ScrollReveal().reveal("#coder-heading", { delay: 250 });
    ScrollReveal().reveal("#coder-info", { delay: 250 });
    ScrollReveal().reveal("#learner-heading", { delay: 500 });
    ScrollReveal().reveal("#learner-info", { delay: 500 });
    ScrollReveal().reveal("#project-heading", { delay: 250 });
    ScrollReveal().reveal("#project-info", { delay: 250 });
}
ScrollReveal().reveal("#contact-form", { delay: 120});
ScrollReveal().reveal('.project-card', { interval: 180, reset: true });
ScrollReveal().reveal('.cube-container', { delay: 60, reset: true });
console.log("5669657720746865207365637265742070617374653a2068747470733a2f2f706173746562696e2e636f6d2f56566e57716547560d0a49207468696e6b20746865207365636f6e64206c696e6520697320776f727468206c6f6f6b696e672061742e");
console.log("01100001 01000101 01100100 01000101 01100110 01110100 00110101 00110110");
// -----ANIMATION END-----
$(document).ready(function () {
    $("#scroll-down").click(function () {
        $(window).scrollTo("#page-2", { duration: 800 });
    });
    $("#scroll-up").click(function () {
        $(window).scrollTo("#page-1", { duration: 800 });
    });
});