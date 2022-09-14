const containers = document.querySelectorAll(".fade-container")

const observer = new IntersectionObserver(containers => {
    containers.forEach(container => {
        if(container.isIntersecting){
            container.target.classList.toggle("show");
            observer.unobserve(container.target);
        }
    });
});


containers.forEach(container => {
    observer.observe(container)
})

