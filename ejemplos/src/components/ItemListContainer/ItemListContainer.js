import React from "react"

export default class ItemListContainer extends React.Component {

  render() {
    console.log(this.props)
    return (
      <footer>
        <div>
          <p>Esto es un test de react {this.props.greeting}</p>
        </div>
        
      </footer>
    )
  }
}

