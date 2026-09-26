// Blog Posts

const posts = [

    {
        title: "How I Built My First Website",
        category: "Technology",
        image: "images/coding.jpg",
        description: "My experience building a website using HTML, CSS and JavaScript."
    },

    {
        title: "A Weekend Trip With Friends",
        category: "Travel",
        image: "images/travel.jpg",
        description: "A small trip that gave me a break from college life."
    },

    {
        title: "Managing College and Projects",
        category: "Productivity",
        image: "images/college.jpg",
        description: "Some simple things that help me manage college work."
    }

];


// Get saved posts from Local Storage

const savedPosts =
    JSON.parse(localStorage.getItem("campusPosts")) || [];


// Add saved posts to existing posts

savedPosts.forEach(function(post) {

    posts.push(post);

});


// Get HTML elements

const container =
    document.getElementById("blogContainer");

const searchInput =
    document.getElementById("searchInput");


// Current selected category

let selectedCategory = "All";


// Display Posts

function displayPosts(postList) {

    container.innerHTML = "";


    // No posts found

    if (postList.length === 0) {

        container.innerHTML = `
            <p class="no-posts">
                No posts found.
            </p>
        `;

        return;
    }


    // Display matching posts

    postList.forEach(function(post) {

        container.innerHTML += `

            <div class="post-card">

                <img src="${post.image}"
                     alt="${post.title}">

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

}


// Filter Posts

function filterPosts(category) {

    selectedCategory = category;

    showFilteredPosts();

}


// Search and Category Together

function showFilteredPosts() {

    const searchText =
        searchInput.value.toLowerCase();


    const filteredPosts =
        posts.filter(function(post) {

            const matchesCategory =
                selectedCategory === "All" ||
                post.category === selectedCategory;


            const matchesSearch =
                post.title.toLowerCase().includes(searchText) ||
                post.description.toLowerCase().includes(searchText);


            return matchesCategory && matchesSearch;

        });


    displayPosts(filteredPosts);

}


// Search when user types

searchInput.addEventListener("input", function() {

    showFilteredPosts();

});


// Show all posts when page opens

showFilteredPosts();