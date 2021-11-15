"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var comment = document.getElementById("comment");
var commentForm = document.getElementById("commentForm");
var commentText = document.getElementById("commentText");
var commentList = document.getElementById("commentList");
var deleteBtn = document.querySelectorAll("#deleteBtn");
console.log(deleteBtn);
var owner = null;
var time = null;
var newCommentId = null;

function paintComment(content, owner, time, newCommentId) {
  var li = document.createElement("li");
  var commentInfo = document.createElement("div");
  var commentAuthor = document.createElement("div");
  var commentText = document.createElement("div");
  var commentMenu = document.createElement("div");
  var hr = document.createElement("hr");
  commentAuthor.classList.add("comment__author");
  commentText.classList.add("comment__text");
  commentMenu.classList.add("comment__menu"); // ---------------------- commentAuthor  ---------------------------------

  var author = document.createElement("span");
  var createAt = document.createElement("span");
  author.classList.add("author");
  author.innerText = owner;
  createAt.classList.add("createAt");
  createAt.innerText = time;
  commentAuthor.appendChild(author);
  commentAuthor.appendChild(createAt); // ----------------------  commentText ---------------------------------

  var text = document.createElement("p");
  text.innerText = content;
  commentText.appendChild(text); // ----------------------  commentMenu -------------------------------

  var deleteBtn = document.createElement("button");
  var editBtn = document.createElement("button");
  deleteBtn.classList.add("comment__delete", "btn", "btn-danger");
  deleteBtn.innerText = "삭제";
  deleteBtn.dataset.commentid = newCommentId;
  editBtn.classList.add("comment__edit", "btn", "btn-info");
  editBtn.innerText = "수정";
  commentMenu.appendChild(deleteBtn);
  commentMenu.appendChild(editBtn); // -------------------------------------------------------

  commentInfo.classList.add("comment__info");
  commentInfo.appendChild(commentAuthor);
  commentInfo.appendChild(commentText);
  commentInfo.appendChild(commentMenu);
  li.appendChild(commentInfo);
  commentList.appendChild(li);
  commentList.appendChild(hr);
  deleteBtn.addEventListener("click", handleDelete);
}

var deleteComment = function deleteComment(commentid) {
  for (var i = 0; i < deleteBtn.length; i++) {
    if (deleteBtn[i].dataset.commentid === commentid) {
      deleteBtn[i].parentNode.parentNode.remove();
    }
  }
};

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
    var content, postingId, response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            content = commentText.value;
            postingId = comment.dataset.id;
            _context.next = 5;
            return fetch("/api/".concat(postingId, "/createComment"), {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                content: content
              })
            });

          case 5:
            response = _context.sent;

            if (!(response.status === 200)) {
              _context.next = 15;
              break;
            }

            _context.next = 9;
            return response.json();

          case 9:
            data = _context.sent;
            owner = data.author;
            time = data.createAt;
            newCommentId = data.newCommentId;
            paintComment(content, owner, time, newCommentId);
            commentText.value = "";

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleSubmit(_x) {
    return _ref.apply(this, arguments);
  };
}();

function handleDelete(_x2) {
  return _handleDelete.apply(this, arguments);
}

function _handleDelete() {
  _handleDelete = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
    var postingId, commentid, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            postingId = comment.dataset.id;
            commentid = event.target.dataset.commentid;
            _context2.next = 4;
            return fetch("/api/".concat(postingId, "/deleteComment"), {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                commentid: commentid
              })
            });

          case 4:
            response = _context2.sent;

            if (response.status === 200) {
              deleteComment(commentid);
              event.target.parentNode.parentNode.remove();
            }

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _handleDelete.apply(this, arguments);
}

if (commentForm) {
  commentForm.addEventListener("submit", handleSubmit);
}

if (deleteBtn) {
  deleteBtn.forEach(function (element) {
    element.addEventListener("click", handleDelete);
  });
}