const postsInfo = document.querySelectorAll("#postsInfo");

postsInfo.forEach((post) =>
    post.addEventListener("click", async (event) => {
        let postId = null;
        postId = post.dataset.id;

        fetch("/api/views", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                postId,
            }),
        });
    })
);
