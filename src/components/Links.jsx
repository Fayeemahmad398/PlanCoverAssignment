/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

function Links({ Link, Id }) {
    console.log(Link,Id)
    return (
        <li class="nav-item" key={Id}>
            <a class="nav-link active"
                aria-current="page" href={`#${Id}`}>{Link}</a>
        </li>
    )
}

export default Links
