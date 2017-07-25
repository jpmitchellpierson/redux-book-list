import React, { Component } from 'react';
import { connect } from 'react-redux';
// import action creater into book list
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="listGroupItem">
          {book.title}
        </li>
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

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should
  // be passed to all of our reducers (dispatch)
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// connect takes a function and a component and produces a container
// the container is a component that is aware of the state that
// is contained by Redux
// Promote BookList from a component to a container
// needs to know about new dispatch method, selectBook
export default connect(mapStateToProps, mapDispatchToProps)(BookList);