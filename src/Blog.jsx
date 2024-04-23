import { Navigation } from "./Components"

//needs to display blog posts in a consistent format, with the ability to navigate between them with a push of a button

function Blog() {
    return (
        <div>
            <Navigation />
            <Post />
            <BlogNav />
        </div>
    )
}

function BlogNav() {
    //has the NEXT and BACK buttons that let the reader navigate between pages, and the INDEX button that takes them back to the index
    return (
        <div>

        </div>
    )
}

function Post() {
    //constructs posts from JSON to be displayed
    //posts have the following properties:
    //"index", their index number (oldest = lowest number)
    //"title", their title/heading
    //"date", the date they were posted
    //"content", an array containing the post's actual content, including subheadings and paragraphs

    return (
        <div>

        </div>
    )
}

export default Blog