//container have direct access to the redux
import React, { Component } from 'react';
import { connect} from 'react-redux';
import { selectBook} from '../actions/index';
import { bindActionCreators} from 'redux';//flows the state in different reducers

export class BookList extends Component {

    renderList(){
        return this.props.books.map((book)=>{
            return(
                <li 
                key={book.title}
                onClick={()=> this.props.selectBook(book)}
                className="list-group-item"
                 >{book.title}</li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}
function mapStateToProps(state){
    //whatever is returned wil show up as props
    //inside of Booklist
    return{
         books: state.books 
    };
}

//Anything returened from this function will end up as props
//on the booklist container
function mapDispatchToProps(dispatch){
    //take all the action and sent to diffrent reducer
    //whenever selectBook is called , the result should be passed
    //to all of our reducers
    return bindActionCreators({
        selectBook : selectBook
    },dispatch)
}

//promote BookList from component to a container -it needs to know
//about this new dispatch method,selectbook.Make it available
//as a prop.
export default connect(mapStateToProps , mapDispatchToProps )(BookList);
