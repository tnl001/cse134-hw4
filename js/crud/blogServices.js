import { deleteBlogView, editBlogView, renderBlogView } from "./blogHelpers.js"

let storage = window.localStorage;
let buffer = [];
if (storage.getItem("blogs") == null) {
    storage.setItem("blogs", JSON.stringify(buffer));
}
buffer = JSON.parse(storage.getItem("blogs"));

export function createBlog(blogData) {
    buffer.push(blogData);
    storage.setItem("blogs", JSON.stringify(buffer));
    renderBlogView(blogData);
}

export function loadBlog() {
    let blogs = JSON.parse(storage.getItem("blogs"));
    blogs.forEach(blogData => {
        renderBlogView(blogData);
    });
}

export function deleteBlog(blogIndex) {
    buffer.splice(blogIndex, 1);
    storage.setItem("blogs", JSON.stringify(buffer));
    deleteBlogView(blogIndex);
}

export function editBlog(blogData, blogIndex) {
    buffer[blogIndex] = blogData;
    storage.setItem("blogs", JSON.stringify(buffer));
    editBlogView(blogData, blogIndex);
}