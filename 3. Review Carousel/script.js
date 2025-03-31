const reviews = [
    {
        id: 1,
        profilePic: "https://img.freepik.com/free-photo/close-up-portrait-young-african-man-with-stubble_171337-1296.jpg",
        name: "Jaxon Chambers",
        job: "Marketing Director",
        reviewDescription: "I had an amazing time using this service! The interface is smooth, and everything is intuitive. Customer support was super helpful and quick to respond. Highly recommend!"
    },
    {
        id: 2,
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4JAb358SafpFByr4kKjbeyDZ1yT3VZaBVlw&s",
        name: "Zaid Pollard",
        job: "Gardener",
        reviewDescription: "Overall, I'm happy with my experience. The features are excellent, and it works as expected. I wish there were more customization options, but other than that, it's solid."
    },
    {
        id: 3,
        profilePic: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        name: "Aimee Rubio",
        job: "Chef",
        reviewDescription: "The product does what it says, but I encountered a few bugs that made it frustrating to use. If those get fixed, I'd consider giving it a higher rating."
    },
    {
        id: 4,
        profilePic: "https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg",
        name: "Aarav Barrett",
        job: "Antique dealer",
        reviewDescription: "I was excited to try this, but it didn't meet my expectations. There were too many glitches, and customer support was slow to respond. Hoping for improvements in the future."
    },
    {
        id: 5,
        profilePic: "https://portraitpal.ai/wp-content/uploads/2024/10/portrait-photography.jpg",
        name: "Danyal Boyd",
        job: "Television presenter",
        reviewDescription: "I regret purchasing this. It was difficult to set up, didn't function properly, and I ended up looking for an alternative. Very disappointed."
    }
];

const personImage = document.getElementById("person-image");
const personName = document.getElementById("person-name");
const personJob = document.getElementById("person-job");
const personParagraph = document.getElementsByClassName("person-paragraph")[0];

const previousButton = document.getElementsByClassName("previous")[0];
const nextButton = document.getElementsByClassName("next")[0];
const surpriseButton = document.getElementsByClassName("surprise")[0];

let reviewer = 0;

document.addEventListener("DOMContentLoaded", function () {
    showReview();

    previousButton.addEventListener("click", function () {
        reviewer--;
        if (reviewer < 0) {
            reviewer = reviews.length - 1;
        }
        showReview();
    });

    nextButton.addEventListener("click", function () {
        reviewer++;
        if (reviewer > reviews.length - 1) {
            reviewer = 0;
        }
        showReview();
    });

    surpriseButton.addEventListener("click", function () {
        reviewer = Math.floor(Math.random() * reviews.length);
        showReview();
    });

});

function showReview() {
    let personReview = reviewer;
    personImage.src = `${reviews[personReview].profilePic}`;
    personName.textContent = reviews[personReview].name;
    personJob.textContent = reviews[personReview].job;
    personParagraph.textContent = reviews[personReview].reviewDescription;
}