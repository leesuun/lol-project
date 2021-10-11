const comment = document.getElementById("comment");
const commentForm = document.getElementById("commentForm");
const commentText = document.getElementById("commentText");
const commentList = document.getElementById("commentList");

let owner = null;
let time = null;

function paintComment(content, owner, time) {
    const li = document.createElement("li");
    const commentInfo = document.createElement("div");
    const commentAuthor = document.createElement("div");
    const commentText = document.createElement("div");
    const commentMenu = document.createElement("div");
    const hr = document.createElement("hr");

    commentAuthor.classList.add("comment__author");
    commentText.classList.add("comment__text");
    commentMenu.classList.add("comment__menu");

    // ---------------------- commentAuthor  ---------------------------------
    const author = document.createElement("span");
    const createAt = document.createElement("span");

    author.classList.add("author");
    author.innerText = owner;
    createAt.classList.add("createAt");
    createAt.innerText = time;

    commentAuthor.appendChild(author);
    commentAuthor.appendChild(createAt);

    // ----------------------  commentText ---------------------------------

    const text = document.createElement("p");
    text.innerText = content;
    commentText.appendChild(text);

    // ----------------------  commentMenu -------------------------------

    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    deleteBtn.classList.add("comment__delete");
    deleteBtn.innerText = "삭제";
    editBtn.classList.add("comment__edit");
    editBtn.innerText = "수정";

    commentMenu.appendChild(deleteBtn);
    commentMenu.appendChild(editBtn);

    // -------------------------------------------------------

    commentInfo.classList.add("comment__info");

    commentInfo.appendChild(commentAuthor);
    commentInfo.appendChild(commentText);
    commentInfo.appendChild(commentMenu);

    li.appendChild(commentInfo);
    commentList.appendChild(li);
    commentList.appendChild(hr);
}

const handleSubmit = async (event) => {
    event.preventDefault();
    const content = commentText.value;
    const postingId = comment.dataset.id;

    const response = await fetch(`/api/${postingId}/createComment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content,
        }),
    });

    if (response.status === 200) {
        const data = await response.json();
        owner = data.author;
        time = data.createAt;

        paintComment(content, owner, time);
        commentText.value = "";
    }
};

commentForm.addEventListener("submit", handleSubmit);
