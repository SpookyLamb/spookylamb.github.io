import { Navigation } from "./Components"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

import BlogPosts from '../blog/posts.json';

//needs to display blog posts in a consistent format, with the ability to navigate between them with a push of a button

function Blog() {
    return (
        <div>
            <Navigation />
            <Post />
        </div>
    )
}

function formatLinks(string = "") { //note that this currently only supports one link in each string
    let element

    if (string.includes("](")) { //replace links within the string (NOTE: images use similar formatting, but they return earlier)
        //slice up our string, grabbing the string before the link and the string after
        let string1 = string.substring(0, string.indexOf("["))
        let link_text = string.substring(string.indexOf("[") + 1, string.indexOf("]"))
        let link_href = string.substring(string.indexOf("(") + 1, string.indexOf(")"))
        let string2 = string.substring(string.indexOf(")") + 1)

        element = (
            <p>
                {string1}
                <a href={link_href}>{link_text}</a>
                {string2}
            </p>
        )
    } else { //shrug and return a <p>
        element = (<p>{string}</p>)
    }

    return element
} 

function formatString(string = "") {
    //takes a string and returns an HTML element
    //must properly interpret markdown formatting, eg ## means a h2 element, ![]() is an image, []() is a link of some kind, etc

    if (string.startsWith("## ")) { //h2
        string = string.substring(3) //grab all the words after the formatting
        return (
            <h2>{string}</h2>
        )
    }

    if (string.startsWith("![")) { //image
        //needs to grab the alt-text between the [] and the src between the ()
        let alt = string.substring(string.indexOf("[") + 1, string.indexOf("]")) //grab the [, start from the index after, stop at the ]
        let src = string.substring(string.indexOf("(") + 1, string.indexOf(")")) //grab the (, start from the index after, stop at the )
        string = string.substring(string.indexOf(")") + 1) //grab the ), then start from the index after

        return (
            <img className="img-fluid p-1 pb-3" alt={alt} src={src}/>
        )
    }

    if (string.startsWith("* ") || string.startsWith("- ")) { //unordered list
        string = string.substring(2) //skip the bullet

        return (
            <ul>
                <li>{string}</li>
            </ul>
        )
    }

    let element = formatLinks(string)

    //if nothing else returns at this point, return a <p> element
    return element
}

function Post() {
    //constructs posts from JSON to be displayed
    //posts have the following properties:
    //"index", their index number (oldest = lowest number)
    //"title", their title/heading
    //"date", the date they were posted
    //"content", an array of strings containing the post's actual content, including subheadings and paragraphs
    
    let [cur_index, setIndex] = useState(0)

    function prevPost() {
        if (cur_index - 1 >= 0) {
            setIndex(cur_index - 1)
        }
    }

    function nextPost() {
        if (cur_index + 1 < BlogPosts.length) {
            setIndex(cur_index + 1)
        }
    }

    function BlogNav() {
        //has the NEXT and BACK buttons that let the reader navigate between pages, and the INDEX button that takes them back to the index
        let back = <></>
        let next = <></>
        let idx_but = <></>

        if (cur_index - 1 >= 0) {
            back = (<Button variant="danger" size="lg" onClick={prevPost}>BACK</Button>)
        }

        if (cur_index !== 0) {
            if (cur_index + 1 < BlogPosts.length) {
                next = (<Button variant="danger" size="lg" onClick={nextPost}>NEXT</Button>)
            }

            idx_but = (<Button variant="danger" size="lg" onClick={() => {setIndex(0)}}>INDEX</Button>)
        }



        return (
            <Container className="py-4">
                <Row className="mx-auto d-flex justify-content-between">
                    <Col className="col-4 d-flex justify-content-end">
                        {back}
                    </Col>
                    <Col className="col-4 d-flex justify-content-center">
                        {idx_but}
                    </Col>
                    <Col className="col-4">
                        {next}
                    </Col>
                </Row>
            </Container>
        )
    }

    function handleIndexClick(event, index) {
        console.log(event)
        setIndex(index)
    }

    function Index() {
        //fills the index page dynamically using the json data
        let index_links = []
    
        for (let i = 1; i < BlogPosts.length; i++) {
            index_links.push(
                <a href="#" onClick={(e) => {
                    handleIndexClick(e, i)
                }}>{BlogPosts[i].date + " - " + BlogPosts[i].title}</a>
            )
        }
    
        return (
            <ul>
            {index_links.map((element) => {
                    return (<li>
                        {element}
                    </li>)
                })}
            </ul>
        )
    }

    const postData = BlogPosts[cur_index]

    const title = postData.title
    const date = postData.date
    const content = postData.content

    let element = (<PostContent content={content} />)

    if (cur_index === 0) {
        element = <Index/>
    }

    return (
        <div className="vh-100 px-1 py-5">
            <Container className="py-5">
                <Col xs={12} lg={8} className="mx-auto border p-3 text-light">
                    <PostTitle title={title} />
                    <PostDate date={date} />
                    {element}
                </Col>
            </Container>
            <BlogNav />
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
    let date = properties.date
    
    if (date) {
        return (
            <h6 className="text-center pb-1">Posted {date}</h6>
        )
    } else { //no date, don't display
        return (
            <></>
        )
    }
}

function PostContent(properties) {
    //takes an array named "content", needs to dynamically produce <p> elements for each element in the array

    const content = properties.content

    return (
        <>
            {content.map((string) => {
                return (formatString(string))
            })}
        </>
    )
}

export default Blog