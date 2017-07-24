import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="listGroupItem">{book.title}</li>
      );
    });
  }

  render() {
    return(
      <ul className="listGroup col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// whenver state changes, component will auto re-render
function mapStateToProps(state) {
  // whatever is returned will show up
  // as props inside of BookList container
  return {
    books: state.books
  };
  // whatever object is returned becomes 
  // available to component as this.props b/c of mapStateToProps f(x)
}

// connect takes a function and a component and produces a container
// the container is a component that is aware of the state that
// is contained by Redux
export default connect(mapStateToProps)(BookList);