import React from 'react';
import { withRouter } from 'react-router';

class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: ""
    };

    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.displayButtons = this.displayButtons.bind(this);
    this.concealButtons = this.concealButtons.bind(this);
  }

  _ensureLoggedIn(e) {
    e.preventDefault();
    if (!this.props.currentUser) this.props.router.push("/login");
  }

  componentDidMount(){
  }

  componentDidUpdate() {
    if(this.state.body === ""){
      $(".creator-buttons .submit-button").prop('disabled',true);
    }else{
      $(".creator-buttons .submit-button").prop('disabled',false);
    }
  }

  displayButtons(e) {
    if(this.state.body === ""){
      $(".comment-form-submit-buttons").prop('disabled',true);
    }else{
      $(".comment-form-submit-buttons").prop('disabled',false);
    }
  }

  concealButtons(e) {

  }

  update(e) {
    e.preventDefault();
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render(){
    const { currentUser } = this.props;

    return(
      <div className="comment-form-container">
        <form className="comment-form"
          onClick={ this._ensureLoggedIn }
          onSubmit={ this.handleSubmit }>
          <textarea className="comment-form-text"
            onChange={ this.update }
            placeholder="Add a public comment..."
            value={ this.state.body }/>
        </form>

        <div className="comment-form-submit-buttons">
          <button className="submit-button"
            onClick={ this.handleSubmit }>Comment</button>
          <button className="cancel-button"
            >Cancel</button>
        </div>
      </div>
    );
  }
}

export default withRouter(CommentForm);
