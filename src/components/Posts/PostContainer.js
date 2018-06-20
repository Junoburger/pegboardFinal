import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { makePost } from '../../actions/posts'
import { addPost } from '../../actions/posts'
import { LogUser } from '../../actions/users'
import NewPost from './NewPost'

import User from '../User/User'

class PostContainer extends React.PureComponent {

  state = {  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }



  handleSubmit = (event) => {
    event.preventDefault()
    const post = new NewPost(this.state.category, this.state.type, this.props.logUser, this.state.description)
    this.props.makePost( post )
    this.props.addPost({
      category: this.state.category,
      type: this.state.type,
      name: this.state.name,
      description: this.state.description
    })
  }

  componentDidMount() {
    {console.log(this.props.users[this.props.logUser].notification.posts)}
    // console.log(this)

  }

  render() {
    const some = this.props.users[this.props.logUser].notification.posts
    return (
      <div>

        <Link to={'/Notifications'} > Notificaitons</Link>

        <form onSubmit={this.handleSubmit}>

          <label>

            <div className="formElement">
            <h2>carpenter</h2>
            <input type="radio" name="category" value="carpenter" onChange={this.handleChange}/>

            <h2>designer</h2>
            <input type="radio" name="category" value="designer" onChange={this.handleChange}/>

            <h2>cook</h2>
            <input type="radio" name="category" value="cook" onChange={this.handleChange}/>

            <h2>developer</h2>
            <input type="radio" name="category" value="developer" onChange={this.handleChange}/>
            </div>

          </label>

          <label>

            <div className="formElement">
            <h2>Employer</h2>
            <input type="radio" name="type" value="employer" onChange={this.handleChange}/>

            <h2>Freelancer</h2>
            <input type="radio" name="type" value="freelancer" onChange={this.handleChange}/>
            </div>

          </label>


          <div className="formElement">
              <label>
              Name:
              <input type="text" name="name" onChange={this.handleChange}/>
            </label>

            <label>
              Description:
              <input type="text" name="description" onChange={this.handleChange}/>
            </label>
          </div>

          <input type="submit" value="Submit" />

        </form>

        <div>
          {!some && 'loading'}
          {some && some.map(post => {
            return <Link to = {`/matcher/${post.postBody.category}/${post.postBody.type}`}><button key = {post.postBody.postId}>{post.postBody.category}</button></Link>
          })}

        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users:state.users,
    post: state.posts,
    logUser: state.logUser
  }
}

export default connect(mapStateToProps, { makePost, addPost })(PostContainer)
