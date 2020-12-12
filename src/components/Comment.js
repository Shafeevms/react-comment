import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, date, id, comment, remove} = this.props;
    return (
      <article className='comment'>
        <h2 className='title'>{name}</h2>
        <span className='date'>{date}</span>
        <button 
          onClick={() => remove(id)} 
          className='btn-remoove'>
            x
        </button>
        <p className='comment-text'>{comment}</p>
      </article>
    )
  }
}

export default Comments;