
let posts = [
    {
        id: 1,
        title: "Getting Started with Express",
        content: "Express is a minimal web framework for Node.js. Start with routes.",
        category: "Technology",
        tags: ["Node", "Express", "Backend"],
        createdAt: "2026-10-01T09:00:00Z",
        updatedAt: "2026-10-01T09:00:00Z",
    },
    {
        id: 2,
        title: "Why I Switched to Arch Linux",
        content: "A rolling release distro teaches you how your system really works.",
        category: "Linux",
        tags: ["Arch", "Linux", "Productivity"],
        createdAt: "2026-10-03T14:30:00Z",
        updatedAt: "2026-10-03T14:30:00Z",
    },
    {
        id: 3,
        title: "CSS Grid Cheat Sheet",
        content: "Grid makes two-dimensional layouts simple. Here are the properties I use daily.",
        category: "Frontend",
        tags: ["CSS", "Layout", "Frontend"],
        createdAt: "2026-10-05T11:15:00Z",
        updatedAt: "2026-10-06T08:00:00Z",
    },
    {
        id: 4,
        title: "My Study Routine as a CS Student",
        content: "Short focused sessions beat long unfocused ones. Tech helps only if used right.",
        category: "Life",
        tags: ["Study", "Productivity"],
        createdAt: "2026-10-08T18:45:00Z",
        updatedAt: "2026-10-08T18:45:00Z",
    },
    {
        id: 5,
        title: "Understanding Middleware",
        content: "Middleware runs between the request and the controller. Always call next().",
        category: "Technology",
        tags: ["Express", "Middleware", "Backend"],
        createdAt: "2026-10-12T10:00:00Z",
        updatedAt: "2026-10-12T10:00:00Z",
    },
    {
        id: 6,
        title: "React State Explained",
        content: "State is data that changes over time and triggers a re-render.",
        category: "Frontend",
        tags: ["React", "JavaScript", "Frontend"],
        createdAt: "2026-10-15T16:20:00Z",
        updatedAt: "2026-10-15T16:20:00Z",
    },
];
function time() {
    let theTime = new Date().toISOString()
    return (theTime)
}

export function readAll() {
    return (posts);
}
export function getPostbyId(id) {
    let thePost = posts.filter((x) => x.id == id)
    if (thePost.length == 0) {
        return(undefined)
    }
    else {
        return (thePost[0])
    }
}
// let data = {
//     title: "react",
//     content: "lorem",
//     category: "test",
//     tags: ["react", "something"]
// }
export function create(data) {
    let max = 0;
    for (const post of posts) {
        if (post.id > max) {
            max = post.id;
        }
    }
    let thisid = max + 1;

    let newObject = {
        id: thisid,
        title: data.title,
        content: data.content,
        category: data.category,
        tags: data.tags,
        createdAt: time(),
        updatedAt: time()
    }
    posts.push(newObject)
    return (newObject)
}
export function update(id, data) {
    for (const post of posts) {
        if (post.id == id) {
            post.title = data.title
            post.content = data.content
            post.category = data.category
            post.tags = data.tags
            post.updatedAt = time()
            return (post)
        }
    }
}
export function deletepost(id) {
    let index = posts.findIndex((p) => p.id == id)
    if (index != -1) {
        posts.splice(index, 1)
        return (true)
    }
    else {
        return (false)
    }
}
export function search(term) {
    let theWord = term.toLowerCase();
    let findedBlogs = posts.filter((p) => p.title.toLowerCase().includes(theWord) ||p.category.toLowerCase().includes(theWord)||p.content.toLowerCase().includes(theWord))
    return (findedBlogs)
}
