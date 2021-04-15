import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
        <head>
            <link rel="stylesheet" href="https://use.typekit.net/gtr4bnf.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                  crossOrigin="anonymous"/>
            <link rel="stylesheet" href="/_Assets/css/style.css" media="all"/>
            <link rel="shortcut icon" href="/_Assets/ico/favicon-32.png"/>
            <link href="/_Assets/css/b541302a6c0ed416666a.css" rel="stylesheet"/>
            {props.headComponents}
        </head>
        <body {...props.bodyAttributes} className="home">
        {props.preBodyComponents}
        <div
            key={`body`}
            id="___gatsby"
            data-cms-wrapper-name="ProCam"
            dangerouslySetInnerHTML={{__html: props.body}}
        />
        {props.postBodyComponents}
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
                crossOrigin="anonymous"></script>
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
