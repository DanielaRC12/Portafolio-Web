var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Daniela Rodríguez')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Estudiante de ingeniería en sistemas')
    .pauseFor(2500)
    .deleteAll()
    .pauseFor(2500)
    .start();