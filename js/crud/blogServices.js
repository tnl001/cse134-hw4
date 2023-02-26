let storage = window.localStorage;
let buffer = [];
if (storage.getItem("blogs") == null) {
    storage.setItem("blogs", JSON.stringify(buffer));
}

export function createBlog(blogData) {
    let blogList = document.getElementById("blog-list");
    let blog = document.createElement("section");
    let blogTitle = document.createElement("h2");
    let blogDate = document.createElement("time");
    let blogSummary = document.createElement("p");
    let blogDeleteBtn = document.createElement("button");
    let blogEditBtn = document.createElement("button");
    let blogBreak = document.createElement("hr");

    // Save data
    buffer = JSON.parse(storage.getItem("blogs"));
    buffer.push(blogData);
    storage.setItem("blogs", JSON.stringify(buffer));

    // Render view
    blogTitle.innerHTML = blogData.postTitle;
    blogDate.innerHTML = blogData.postDate;
    blogSummary.innerHTML = blogData.postSummary;
    blogDeleteBtn.innerHTML = "Delete";
    blogEditBtn.innerHTML = "Edit";

    blog.appendChild(blogTitle);
    blog.appendChild(blogDate);
    blog.appendChild(blogSummary);
    blog.appendChild(blogDeleteBtn);
    blog.appendChild(blogEditBtn);

    blogList.appendChild(blog);
    blogList.appendChild(blogBreak);
}

export function loadBlog() {
    let blogs = JSON.parse(storage.getItem("blogs"));
    let blogList = document.getElementById("blog-list");

    blogs.forEach(blogData => {
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

        blog.appendChild(blogTitle);
        blog.appendChild(blogDate);
        blog.appendChild(blogSummary);
        blog.appendChild(blogDeleteBtn);
        blog.appendChild(blogEditBtn);

        blogList.appendChild(blog);
        blogList.appendChild(blogBreak);
    });

}