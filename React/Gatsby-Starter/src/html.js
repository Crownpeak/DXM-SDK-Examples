import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
        <head>
            {props.headComponents}
        </head>
        <body {...props.bodyAttributes} className="home">
        {props.preBodyComponents}
        <div
            key={`body`}
            id="___gatsby"
            data-cms-wrapper-name="Gatsby-Starter"
            dangerouslySetInnerHTML={{__html: props.body}}
        />
        {props.postBodyComponents}
        </body>
        </html>
    )
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}
