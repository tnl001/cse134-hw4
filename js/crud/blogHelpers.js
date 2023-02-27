/**
 * Helper function to render a blog view
 * @param {*} blogData 
 */
export function renderBlogView(blogData) {
    let deletePrompt = document.getElementById("delete-prompt");
    let editPrompt = document.getElementById("edit-prompt");
    let blogList = document.getElementById("blog-list");
    let blog = document.createElement("section");
    let blogTitle = document.createElement("h2");
    let blogDate = document.createElement("time");
    let blogSummary = document.createElement("p");
    let blogDeleteBtn = document.createElement("button");
    let blogEditBtn = document.createElement("button");
    let blogBreak = document.createElement("hr");

    // Render view
    blogTitle.setAttribute("id", "blog-title");
    blogDate.setAttribute("id", "blog-date");
    blogSummary.setAttribute("id", "blog-summary");
    blogTitle.innerHTML = blogData.postTitle;
    blogDate.innerHTML = blogData.postDate;
    blogSummary.innerHTML = blogData.postSummary;
    blogDeleteBtn.innerHTML = "Delete";
    blogEditBtn.innerHTML = "Edit";

    blogDeleteBtn.setAttribute("id", "delete-btn");
    blogEditBtn.setAttribute("id", "edit-btn");

    blogDeleteBtn.addEventListener("click", () => {
        deletePrompt.showModal();
        let blogDeleteOK = document.getElementById("delete-ok");
        let blogIndex = Array.from(blogDeleteBtn.parentNode.parentNode.children).indexOf(blogDeleteBtn.parentNode);
        blogDeleteOK.value = blogIndex;
    });

    blogEditBtn.addEventListener("click", () => {
        editPrompt.showModal();

        let blogEditOK = document.getElementById("edit-ok");
        let blogIndex = Array.from(blogEditBtn.parentNode.parentNode.children).indexOf(blogEditBtn.parentNode);
        blogEditOK.value = blogIndex;

        // Populate edit form fields
        let blogToPopulate = blogEditBtn.parentNode;
        let blogTitleEdit = document.getElementById("post-title-edit");
        let blogDateEdit = document.getElementById("post-date-edit");
        let blogSummaryEdit = document.getElementById("post-sum-edit");

        blogTitleEdit.value = blogToPopulate.querySelector("#blog-title").innerHTML;
        blogDateEdit.value = blogToPopulate.querySelector("#blog-date").innerHTML;
        blogSummaryEdit.value = blogToPopulate.querySelector("#blog-summary").innerHTML;
    })

    blog.appendChild(blogTitle);
    blog.appendChild(blogDate);
    blog.appendChild(blogSummary);
    blog.appendChild(blogDeleteBtn);
    blog.appendChild(blogEditBtn);
    blog.appendChild(blogBreak);

    blogList.appendChild(blog);
}

/**
 * Helper function to remove a blog view
 * @param {*} blogIndex 
 */
export function deleteBlogView(blogIndex) {
    let blogList = document.getElementById("blog-list");
    blogList.removeChild(Array.from(blogList.children)[blogIndex]);
}

export function editBlogView(blogData, blogIndex) {
    let blogList = document.getElementById("blog-list");
    let blogToEdit = Array.from(blogList.children)[blogIndex]
    let blogTitle = blogToEdit.querySelector("#blog-title");
    let blogDate = blogToEdit.querySelector("#blog-date");
    let blogSummary = blogToEdit.querySelector("#blog-summary");

    blogTitle.innerHTML = blogData.postTitle;
    blogDate.innerHTML = blogData.postDate;
    blogSummary.innerHTML = blogData.postSummary;
}