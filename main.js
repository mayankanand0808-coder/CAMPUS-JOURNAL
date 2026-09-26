// Blog Posts

const posts = [

    {
        title: "How I Built My First Website",
        category: "Technology",
        image: "coding.jpg",
        description: "My experience building a website using HTML, CSS and JavaScript."
    },

    {
        title: "A Weekend Trip With Friends",
        category: "Travel",
        image: "travel.jpg",
        description: "A small trip that gave me a break from college life."
    },

    {
        title: "Managing College and Projects",
        category: "Productivity",
        image: "college.jpg",
        description: "Some simple things that help me manage college work."
    }

];


// Get Post Container

const container = document.getElementById("postContainer");


// Display Posts

posts.forEach(function(post) {

    container.innerHTML += `

        <div class="post-card">

            <img src="${post.image}" alt="${post.title}">

            <div class="post-content">

                <small>${post.category}</small>

                <h3>${post.title}</h3>

                <p>${post.description}</p>

                <a href="post.html?id=${posts.indexOf(post)}">
                
               Read More
                </a>

            </div>

        </div>

    `;

});
