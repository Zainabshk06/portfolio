document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const projectGrid = document.getElementById('projectGrid');
    const projectSearch = document.getElementById('projectSearch');

    // Navigation toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Sample project data
    const projects = [
        {
            title: "Project One",
            img: "https://via.placeholder.com/300",
            tags: ["HTML", "CSS"]
        },
        {
            title: "Project Two",
            img: "https://via.placeholder.com/300",
            tags: ["JavaScript", "React"]
        },
        {
            title: "Project Three",
            img: "https://via.placeholder.com/300",
            tags: ["Node.js", "Express"]
        },
        {
            title: "Project Four",
            img: "https://via.placeholder.com/300",
            tags: ["HTML", "JavaScript"]
        },
    ];

    // Function to render projects
    const renderProjects = (filter = '') => {
        projectGrid.innerHTML = '';
        const filteredProjects = projects.filter(project => 
            project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
        );

        filteredProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <img src="${project.img}" alt="${project.title}">
                <div class="project-card-content">
                    <h3>${project.title}</h3>
                    <div class="tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            projectGrid.appendChild(projectCard);
        });
    };

    // Initial render
    renderProjects();

    // Search functionality
    projectSearch.addEventListener('input', (event) => {
        const filter = event.target.value;
        renderProjects(filter);
    });

    // GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.intro-text', { opacity: 0, duration: 1, y: -50 });
    gsap.from('.section-title', {
        opacity: 0,
        duration: 1,
        y: -50,
        scrollTrigger: {
            trigger: '.section-title',
            start: 'top 80%',
        }
    });
    gsap.from('.skill-item', {
        opacity: 0,
        duration: 1,
        y: 20,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 80%',
        }
    });
});
