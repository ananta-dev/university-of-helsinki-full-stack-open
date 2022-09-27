const dummy = blogs => {
    if (blogs) return 1
    else return 1
}

const totalLikes = blogPostsList => {
    return blogPostsList.reduce((sum, post) => sum + post.likes, 0)
}

module.exports = {
    dummy,
    totalLikes,
}
