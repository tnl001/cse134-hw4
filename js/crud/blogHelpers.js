/**
 * Helper function to render a blog view
 * @param {*} blogData 
 */
export function renderBlogView(blogData) {
    let deletePrompt = document.getElementById("delete-prompt");
    let blogList = document.getElementById("blog-list");
    let blog = document.createElement("section");
    let blogTitle = document.createElement("h2");
    let blogDate = document.createElement("time");
    let blogSummary = document.createElement("p");
    let blogDeleteBtn = document.createElement("button");
    let blogEditBtn = document.createElement("button");
    let blogBreak = document.createElement("hr");

    // Render view
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
        console.log(blogDeleteOK.value);
    });

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