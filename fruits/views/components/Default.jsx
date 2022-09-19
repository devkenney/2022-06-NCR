const React = require('react');

const DefaultLayout = (props) => {
  return (
    <html>
      <head>
        <title>{props.title}</title>
      </head>
      <body>
        <h1>
          {props.title}
        </h1>
        {props.children}
      </body>
    </html>
  )
}

module.exports = DefaultLayout;