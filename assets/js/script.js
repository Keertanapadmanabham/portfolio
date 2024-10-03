$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });


    
    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("y3uVObpo0LxLWpA2u");

        // Capture form data before sending the form
        var userName = this.user_name.value;
        var userEmail = this.user_email.value;
        var userContact = this.contact_number.value;
        var userMessage = this.message.value;

        emailjs.send('service_z6ovmnu', 'template_9otfujy', {
            from_name: userName,
            email_id: userEmail,
            contact : userContact,
            message: userMessage
        })
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Sai Keertana Padmanabham";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: [ "Informatica Developer", "Snowflake Developer"], //Software Engineer", , "Front-End Developer", "Web Developer"  "Full Stack Developer", "ML/AI Engineer" ,"Data Engineer",
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->


async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = [
            {
                "name" : "Java",
                "icon" : "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"
            },
            {
                "name": "Python",
                "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
            },{
                "name" : "C",
                "icon" : "https://img.icons8.com/color/48/c-programming.png"
            },
            {
                "name" : "R",
                "icon" : "https://img.icons8.com/fluency/48/r-project.png"
            },
            {
                "name" : "Data Warehouse",
                "icon" : "https://img.icons8.com/clouds/100/search-database.png"
            },
            {
                "name" : "Linux",
                "icon" : "https://img.icons8.com/color/48/linux--v1.png"
            },
            {
                "name" : "Unix",
                "icon" : "https://img.icons8.com/color/48/unix.png"
            },
            {
                "name" : "Oracle",
                "icon" : "https://img.icons8.com/color/48/oracle-logo.png"
            }, 
            {
                "name" : "Informatica",
                "icon" : "./assets/images/skills/informatica.png"
            },
            {
                "name" : "Anaconda",
                "icon" : "https://img.icons8.com/fluency/48/anaconda--v2.png"
            },
            {
                "name" : "JavaScript",
                "icon" : "https://img.icons8.com/color/48/javascript--v1.png"
            },
            {
                "name" : "HTML",
                "icon" : "https://img.icons8.com/color/48/html-5--v1.png"
            },
            {
                "name" : "React JS",
                "icon" : "https://img.icons8.com/nolan/64/react-native.png"
            },
            {
                "name" : "Django",
                "icon" : "https://img.icons8.com/color/48/django.png"
            },
            {
                "name" : "Node JS",
                "icon" : "https://img.icons8.com/fluency/48/node-js.png"
            },
            {
                "name" : "CSS",
                "icon" : "https://img.icons8.com/fluency/48/css3.png"
            },
            {
                "name" : "Angular",
                "icon" : "https://img.icons8.com/color/48/angularjs.png"
            },

            {
                "name" : "Type Script",
                "icon" : "https://img.icons8.com/fluency/48/typescript--v1.png"
            },
            {
                "name" : "MongoDB",
                "icon" : "https://img.icons8.com/color/48/mongodb.png"
            },
            {
                "name": "MySQL",
                "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
            },
            {
                "name": "SQLServer",
                "icon": "https://img.icons8.com/color/48/microsoft-sql-server.png"
            },
            {
                "name" : "Hadoop",
                "icon" : "https://img.icons8.com/color/48/hadoop-distributed-file-system.png"
            },
            {
                "name" : "SQL",
                "icon" : "https://img.icons8.com/external-bearicons-gradient-bearicons/64/external-SQL-file-extension-bearicons-gradient-bearicons.png"
            },
            
            {
                "name" : "Snowflake",
                "icon" : "./assets/images/skills/snowflake.png"
            },
            {
                "name" : "ETL",
                "icon" : "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-integration-industry-flaticons-lineal-color-flat-icons.png"
            },
            {
                "name" : "Apache Kafka",
                "icon" : "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-apache-a-free-and-open-source-cross-platform-web-server-software-logo-color-tal-revivo.png"
            },
            {
                "name" : "Pandas",
                "icon" : "https://img.icons8.com/color/48/pandas.png"
            },{
                "name" : "Flask",
                "icon" : "https://img.icons8.com/nolan/64/flask.png"
            },{
                "name" : "REST",
                "icon" : "https://img.icons8.com/color/48/api-settings.png"
            },{
                "name" : "AWS",
                "icon" : "https://img.icons8.com/color/48/amazon-web-services.png"
            },
            
            {
                "name" : "Azure",
                "icon" : "https://img.icons8.com/color/48/azure-1.png"
            },
            
            {
                "name" : "GCP",
                "icon" : "https://img.icons8.com/color/48/google-cloud.png"
            },
            {
                "name" : "Machine Learning",
                "icon" : "https://img.icons8.com/cotton/64/brain-3.png"
            },
            {
                "name" : "Pytorch",
                "icon" : "https://img.icons8.com/fluency/48/pytorch.png"
            },
            
            {
                "name" : "Jira",
                "icon" : "https://img.icons8.com/color/48/jira.png"
            },
            {
                "name" : "GitHub",
                "icon" : "https://img.icons8.com/nolan/64/github.png"
            },{
                "name" : "Git",
                "icon" : "https://img.icons8.com/color/48/git.png"
            },{
                "name" : "BitBucket",
                "icon" : "https://img.icons8.com/color/48/bitbucket.png"
            },{
                "name" : "Postman",
                "icon" : "https://img.icons8.com/pulsar-color/48/postman-api.png"
            },{
                "name" : "Kubernetes",
                "icon" : "https://img.icons8.com/color/48/kubernetes.png"
            },{
                "name" : "Docker",
                "icon" : "https://img.icons8.com/color/48/docker.png"
            },{
                "name" : "NumPy",
                "icon" : "https://img.icons8.com/color/48/numpy.png"
            },{
                "name" : "Microsoft Excel",
                "icon" : "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png"
            },
            {
                "name": "Tableau",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            }, 
            {
                "name": "PowerBI",
                "icon": "https://img.icons8.com/color/48/power-bi.png"
            }, 
            {
                "name": "Jenkins",
                "icon": "https://img.icons8.com/color/48/jenkins.png"
            }, 
             
            {
                "name": "VS Code",
                "icon": " https://img.icons8.com/fluency/48/visual-studio.png"
            },
            {
                "name": "WordPress",
                "icon": "https://img.icons8.com/color/48/000000/wordpress.png"
            },  
            {
                "name": "Agile",
                "icon": "https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-agile-web-design-and-development-flatart-icons-flat-flatarticons.png"
            },
            {
                "name": "Splunk",
                "icon": "https://img.icons8.com/color/48/splunk.png"
            },
            {
                "name": "Solutions",
                "icon": "https://img.icons8.com/color/48/solve-problem.png"
            },
            {
                "name": "Insights",
                "icon": "https://img.icons8.com/color/48/light.png"
            },
            {
                "name": "Research",
                "icon": "https://img.icons8.com/color/48/fine-print.png"
            },
            {
                "name": "Leadership",
                "icon": "https://img.icons8.com/color/48/meeting-room.png" 
            }
        ]
        :
        response =[
            {
              "name": "Cancer Genomic Project",
              "desc": "Cancer Genomic Project using Machine Learning Algorithms performs analysis on the structured and semi-structured data to analysis metrics",
              "image": "Cancer",
              "category": "Machine Learning",
              "links":  {
                "view": "https://github.com/saikeertanapadmanabham/MachineLearning_CancerGenomics"
              }
            },
            {
                "name": "Green Cloud Computing",
                "desc": "Predictive Modeling of Power Consumption in Cloud Data Centers Using Machine Learning",
                "image": "Cloud",
                "category": "Machine Learning",
                "links": {
                  "view": "https://github.com/saikeertanapadmanabham/MachineLearning_GreenCloudComputing"
                }
              },
              {
                "name": "IoT-Sensor-Network_Dijkstra-Network",
                "desc": "Minimum Energy Consumption Path in IoT Sensor Network Using Dijkstra’s Algorithm With Priority Queue",
                "image": "IoT Sensor",
                "category": "Python",
                "links": {
                  "view": "https://github.com/saikeertanapadmanabham/IoT-Sensor-Network_Dijkstra-Network?tab=readme-ov-file"
                }
              },
              {
                "name": "Travelling Salesman Project",
                "desc": "Implementing Travelling Salesman problem using four Algorithms.",
                "image": "TSP",
                "category": "Python",
                "links": {
                  "view": "https://github.com/saikeertanapadmanabham/TravellingSalesManProblem"
                },
              },]
    const data = await response;
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";

    skills.forEach(skill => {
        skillHTML += `
        <div class="skill-item">
            <div class="info">
                <img src="${skill.icon}" alt="${skill.name}" />
                <span>${skill.name}</span>
            </div>
        </div>`;
    });

    skillsContainer.innerHTML = skillHTML;
}

// ../images/projects/${project.image}.png

fetchData("projects").then(data => {
    showProjects(data);
});

function showProjects(projects) {
    let projectsContainer = document.getElementById("projectsContainer");
    let projectHTML = "";

    projects.forEach(project => {
        projectHTML += `
        <div class="box tilt">
            <img draggable="false" src="./assets/images/projects/${project.image}.png" alt="${project.name}" />
            <div class="content">
                <h3>${project.name}</h3>
                <p>${project.desc}</p>
                <div class="btns">
                    <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                </div>
            </div>
        </div>`;
    });

    projectsContainer.innerHTML = projectHTML;

    // Initialize tilt effect
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });

    // Slider functionality
    let slider = document.querySelector('.slider-wrapper');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let slideIndex = 0;
    const totalSlides = projects.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = index;
        }
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    prev.addEventListener('click', () => {
        showSlide(slideIndex - 1);
    });

    next.addEventListener('click', () => {
        showSlide(slideIndex + 1);
    });

    // Show the first slide initially
    showSlide(slideIndex);
}


    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    })

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->



/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 700 });
srtop.reveal('.home .envelope', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

const mediaQuery = window.matchMedia('(min-width: 300px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  
    srtop.reveal('.education .box', { interval: 100 });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 100 });

    /* SCROLL EXPERIENCE */
    srtop.reveal('.experience .timeline', { delay: 200 });
    srtop.reveal('.experience .timeline .container', { interval: 200 });

    /* SCROLL CONTACT */
    srtop.reveal('.contact .container', { delay: 200 });
    srtop.reveal('.contact .container .form-group', { delay: 200 });
}

