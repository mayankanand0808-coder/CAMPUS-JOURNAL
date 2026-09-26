// Get the form

const postForm = document.getElementById("postForm");


// When the form is submitted

postForm.addEventListener("submit", function(event) {

    // Stop page from refreshing

    event.preventDefault();


    // Get values from the form

    const title =
        document.getElementById("postTitle").value;

    const category =
        document.getElementById("postCategory").value;

    const description =
        document.getElementById("postDescription").value;


    // Create a new post

    const newPost = {

        title: title,

        category: category,

        description: description,

        image: "images/college.jpg"

    };


    // Get existing posts from Local Storage

    let savedPosts =
        JSON.parse(localStorage.getItem("campusPosts")) || [];


    // Add the new post

    savedPosts.push(newPost);


    // Save posts in Local Storage

    localStorage.setItem(
        "campusPosts",
        JSON.stringify(savedPosts)
    );


    // Show success message

    alert("Post published successfully!");


    // Go to Blog page

    window.location.href = "blog.html";

});