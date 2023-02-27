import { createBlog, loadBlog, deleteBlog } from './blogServices.js'

window.addEventListener("load", init);

function init() {
    let addPrompt = document.getElementById("add-prompt");
    let addForm = document.getElementById("add-form");
    let addBtn = document.getElementById("add-btn");

    let postTitle = document.getElementById("post-title");
    let postDate = document.getElementById("post-date");
    let postSummary = document.getElementById("post-sum");

    loadBlog();

    addBtn.addEventListener("click", () => {
        addPrompt.showModal();
        addForm.reset();
    });

    addPrompt.addEventListener("close", () => {
        let blogData = {
            "postTitle": postTitle.value,
            "postDate": postDate.value,
            "postSummary": postSummary.value
        };

        if (addPrompt.returnValue != "false") {
            createBlog(blogData);
        }
    });

    let deletePrompt = document.getElementById("delete-prompt");
    deletePrompt.addEventListener("close", () => {
        if (deletePrompt.returnValue != "false") {
            deleteBlog(deletePrompt.returnValue);
        }
    });
}