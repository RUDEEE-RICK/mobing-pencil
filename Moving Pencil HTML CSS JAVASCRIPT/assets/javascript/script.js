
function moveit() {
    document.getElementById("pencil-move").animate([
        { transform: 'scale(-5%)' },
        { transform: 'translate(0%)' },
        { transform: 'translate(7%)' },
        { transform: 'translate(-2%)' },
        { transform: 'translate(4%)' }
    ], {
        duration: 2000,
        iterations: 3
    });
}