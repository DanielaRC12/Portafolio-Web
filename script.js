var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Daniela Rodríguez')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Programadora Front End Jr')
    .pauseFor(2500)
    .deleteAll()
    .start();