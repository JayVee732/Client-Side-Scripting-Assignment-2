$(document).ready(function () {
    $(".mercury").planetarium({
        autospin: "2500ms",
        angle: "20deg",
        glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
        pattern: "images/texture-mercury.jpg",
        size: "100x100",
        float: true,
        space: "body"
    });

    $(".venus").planetarium({
        autospin: "7000ms",
        angle: "30deg",
        glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
        pattern: "images/texture-venus.jpg",
        size: "150x150",
        float: true,
        space: "body"
    });

    $(".earth").planetarium({
        autospin: "3500ms",
        angle: "15deg",
        glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
        pattern: "images/texture-earth.jpg",
        size: "200x200",
        float: true,
        space: "body"
    });

    $(".mars").planetarium({
        autospin: "3500ms",
        angle: "45deg",
        glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
        pattern: "images/texture-mars.jpg",
        size: "175x175",
        float: true,
        space: "body"
    });

    $(".jupiter").planetarium({
        autospin: "7000ms",
        angle: "18deg",
        glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
        pattern: "images/texture-jupiter.jpg",
        size: "300x300",
        float: true,
        space: "body"
    });

    $(".saturn").planetarium({
        autospin: "4252ms",
        angle: "21deg",
        glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
        pattern: "images/texture-saturn.jpg",
        size: "275x275",
        float: true,
        space: "body",
        ring: true,
        ringColor: "#fff",
        ringAngle: "20deg"
    });

    $(".uranus").planetarium({
        autospin: "5000ms",
        angle: "270deg",
        glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
        pattern: "images/texture-uranus.jpg",
        size: "250x250",
        float: true,
        space: "body",
        ring: true,
        ringColor: "#0FC4F1",
        ringAngle: "90deg"
    });

    $(".neptune").planetarium({
        autospin: "5500ms",
        angle: "17deg",
        glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
        pattern: "images/texture-neptune.jpg",
        size: "220x220",
        float: true,
        space: "body",
        ring: true,
        ringColor: "#138EAD",
        ringAngle: "20deg"
    });

    $(function () {
        $("body").prognroll({
            height: 3,
            color: "red"
        });
    });

    $('#search').hideseek({
        highlight: true,
        nodata: 'No results found'
    });
});