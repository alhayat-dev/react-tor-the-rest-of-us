import React from "react"
import ReactDom from "react-dom"

function ExampleComponent() {
  return (
    <div>
      <h1>This is our app!!</h1>
      <p>The sky is blue.</p>
    </div>
  )
}

ReactDom.render(<ExampleComponent />, document.querySelector("#id"))
