import React from 'react';
import Input from './Input';
import Comment from './Comment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    }

    this.addComment = this.addComment.bind(this);
    this.remove = this.remove.bind(this);
  }

  addComment(name, comment, date) {
    this.setState(
      {comments:[...this.state.comments, {name, comment, date, id:this.state.comments.length}]},
      // () => {console.log(this.state)}
    ) 
  }
  remove(id) {
    const { comments } = this.state;
    let newcomm = comments.filter(el => el.id !== id)
    this.setState({
      comments: newcomm
    })
  }

  render() {
    return (
      <>
        {this.state.comments.map((el, index) => (
          <Comment 
            remove={this.remove}
            id={el.id}
            key={index}
            name={el.name}
            comment={el.comment}
            date={el.date}
          />
        ))}
        <Input action={this.addComment}/>
      </>
    )
  }
}

export default App;