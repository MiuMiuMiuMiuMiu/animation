const containers = document.querySelectorAll(".fade-container")

const observer = new IntersectionObserver(containers => {
    containers.forEach(container => {
        if(container.isIntersecting){
            container.target.classList.toggle("show");
        }
        else {
            container.target.classList.remove("show");
        }
    });
});


containers.forEach(container => {
    observer.observe(container)
})

