// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.course button');
    buttons.forEach(button => {
        button.addEventListener('click', enrollCourse);
    });
});

function enrollCourse(event) {
    const course = event.target.closest('.course');
    const courseName = course.querySelector('h3').textContent;
    alert(`You have enrolled in the ${courseName} course.`);
}
