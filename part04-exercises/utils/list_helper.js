const dummy = blogs => {
    if (blogs) return 1
    else return 1
}

const totalLikes = blogPostsList => {
    return blogPostsList.reduce((sum, post) => sum + post.likes, 0)
}

const favoriteBlog = blogs => {
    if (blogs.length === 0) return {}

    const mostLikedBlog = blogs.reduce((prev, current) => {
        return current.likes > prev.likes ? current : prev
    })

    return {
        title: mostLikedBlog.title,
        author: mostLikedBlog.author,
        likes: mostLikedBlog.likes,
    }
}

const mostBlogs = blogs => {
    if (blogs.length === 0) return {}

    const authorCountMap = new Map()
    let currentLeader
    let currentMax = 0

    blogs.forEach(blog => {
        const thisAuthorNewCount = authorCountMap.has(blog.author)
            ? authorCountMap.get(blog.author) + 1
            : 1
        authorCountMap.set(blog.author, thisAuthorNewCount)
        if (thisAuthorNewCount > currentMax) {
            currentLeader = blog.author
            currentMax = thisAuthorNewCount
        }
    })

    return {
        author: currentLeader,
        blogs: currentMax,
    }
}

const mostLikes = blogs => {
    if (blogs.length === 0) return {}

    const authorLikesMap = new Map()
    let currentLeader
    let currentMax = 0

    blogs.forEach(blog => {
        const thisAuthorNewCount = authorLikesMap.has(blog.author)
            ? authorLikesMap.get(blog.author) + blog.likes
            : blog.likes
        authorLikesMap.set(blog.author, thisAuthorNewCount)
        if (thisAuthorNewCount > currentMax) {
            currentLeader = blog.author
            currentMax = thisAuthorNewCount
        }
    })

    return {
        author: currentLeader,
        likes: currentMax,
    }
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes,
}
