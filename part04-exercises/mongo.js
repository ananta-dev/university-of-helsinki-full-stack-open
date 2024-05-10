const config = require('./utils/config')
const mongoose = require('mongoose')
const logger = require('./utils/logger')

// if (process.argv.length < 3) {
//     console.log('give password as argument')
//     process.exit(1)
// }

// const password = process.argv[2]

mongoose
    .connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch(error => {
        logger.error('error connecting to MongoDB:', error.message)
    })

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number,
})

const Blog = mongoose.model('Blog', blogSchema)

const blog = new Blog({
    title: 'CSS is hard',
    author: 'Anthony Kane',
    url: 'https://css-tricks.com/why-is-css-frustrating',
    likes: 5,
})

blog.save().then(() => {
    console.log('blog entry saved!')
    mongoose.connection.close()
})

Blog.find({}).then(result => {
    result.forEach(blog => {
        console.log(blog)
    })
    mongoose.connection.close()
})
