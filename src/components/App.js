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

  componentDidMount() {
    if (localStorage.getItem('comments')) {
      this.setState({
        comments: JSON.parse(localStorage.getItem('comments'))
      })
    }
  }
  addComment(name, comment, date) {
    this.setState(
      {comments:[...this.state.comments, {name, comment, date, id:this.state.comments.length}]},
      () => localStorage.setItem('comments', JSON.stringify(this.state.comments))
    ) 
  }
  remove(id) {
    const { comments } = this.state;
    let newcomm = comments.filter(el => el.id !== id)
    this.setState({
      comments: newcomm
    },  () => localStorage.setItem('comments', JSON.stringify(this.state.comments)))
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