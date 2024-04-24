import { Navigation } from "./Components"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BlogPosts from '../blog/posts.json';
console.log(BlogPosts);

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
    //"content", an array of strings containing the post's actual content, including subheadings and paragraphs

    const postData = BlogPosts[1]

    const title = postData.title
    const date = postData.date
    const content = postData.content

    return (
        <div className="vh-100 p-5">
            <Container>
                <Col xs={10} lg={8} className="mx-auto border p-5 text-light">
                    <PostTitle title={title} />
                    <PostDate date={date} />
                    <PostContent content={content} />
                </Col>
            </Container>
        </div>
    )
}

function PostTitle(properties) {
    //takes a string named "title"

    return (
        <h1 className="text-center p-2">{properties.title}</h1>
    )
}

function PostDate(properties) {
    //takes a string named "date"

    return (
        <h6 className="text-center pb-1">Posted {properties.date}</h6>
    )
}

function PostContent(properties) {
    //takes an array named "content", needs to dynamically produce <p> elements for each element in the array
    //must properly interpret markdown formatting, eg ## means a h2 element, ![]() is an image, []() is a link of some kind, etc

    return (
        <p>{properties.content}</p>
    )
}

export default Blog