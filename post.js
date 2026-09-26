// Blog Posts

const posts = [

    {
        title: "How I Built My First Website",

        category: "Technology",

        image: "images/coding.jpg",

        content: `I started learning web development because I wanted
        to understand how websites are created.

        First, I learned HTML to create the structure of the website.
        After that, I used CSS to make the website look better.

        Finally, I started learning JavaScript to add interaction
        and dynamic content.

        Building my first website helped me understand how HTML,
        CSS and JavaScript work together.`
    },


    {
        title: "A Weekend Trip With Friends",

        category: "Travel",

        image: "images/travel.jpg",

        content: `College life can sometimes become busy with classes,
        assignments and projects.

        A weekend trip with friends gave me a chance to take a break
        and spend some time away from college work.

        We explored new places, tried different food and took many
        photos.

        The trip reminded me that taking a small break can help us
        feel fresh and return to our studies with better energy.`
    },


    {
        title: "Managing College and Projects",

        category: "Productivity",

        image: "images/college.jpg",

        content: `Managing college classes along with projects can be
        difficult when everything is left until the last moment.

        I started making a simple list of the important tasks that
        needed to be completed each day.

        I also tried to divide bigger projects into smaller tasks.
        This made the work easier to understand and complete.

        Planning a little every day helped me manage my college work
        and projects more comfortably.`
    }

];


// Get the post number from the URL

const url = new URLSearchParams(window.location.search);

const postNumber = url.get("id");


// Select HTML elements

const title = document.getElementById("postTitle");

const category = document.getElementById("postCategory");

const image = document.getElementById("postImage");

const content = document.getElementById("postContent");


// Display selected post

const post = posts[postNumber];

if (post) {

    title.innerText = post.title;

    category.innerText = post.category;

    image.src = post.image;

    content.innerText = post.content;

}