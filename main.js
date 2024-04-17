//landing page needs to be sick as hell to look at and also be personal to you
//oh god oh fuck

function init() {
    //builds our initial page (building the side pages is different!)

}

function buildElement(tag, class_list, parent_node) {
    //takes tag (string), class_list (array of strings), element_id (string)
    //return the created node to be used elsewhere

    let node = document.createElement(tag)

    if (class_list.length > 0) { //empty array is ignored
        for (let i = 0; i < class_list.length; i++) {
            node.classList.add( class_list[i] )
        }
    }

    parent_node.appendChild(node)

    return node
}

init()