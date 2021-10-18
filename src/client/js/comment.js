const comment = document.getElementById("comment");
const commentForm = document.getElementById("commentForm");
const commentText = document.getElementById("commentText");
const commentList = document.getElementById("commentList");
const deleteBtn = document.querySelectorAll("#deleteBtn");

console.log(deleteBtn);

let owner = null;
let time = null;
let newCommentId = null;

function paintComment(content, owner, time, newCommentId) {
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

    deleteBtn.classList.add("comment__delete", "btn", "btn-danger");
    deleteBtn.innerText = "삭제";
    deleteBtn.dataset.commentid = newCommentId;
    editBtn.classList.add("comment__edit", "btn", "btn-info");
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

    deleteBtn.addEventListener("click", handleDelete);
}

const deleteComment = (commentid) => {
    for (let i = 0; i < deleteBtn.length; i++) {
        if (deleteBtn[i].dataset.commentid === commentid) {
            deleteBtn[i].parentNode.parentNode.remove();
        }
    }
};

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
        newCommentId = data.newCommentId;

        paintComment(content, owner, time, newCommentId);
        commentText.value = "";
    }
};

async function handleDelete(event) {
    const postingId = comment.dataset.id;
    const {
        target: {
            dataset: { commentid },
        },
    } = event;

    const response = await fetch(`/api/${postingId}/deleteComment`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            commentid,
        }),
    });

    if (response.status === 200) {
        deleteComment(commentid);
        event.target.parentNode.parentNode.remove();
    }
}

if (commentForm) {
    commentForm.addEventListener("submit", handleSubmit);
}

if (deleteBtn) {
    deleteBtn.forEach((element) => {
        element.addEventListener("click", handleDelete);
    });
}
