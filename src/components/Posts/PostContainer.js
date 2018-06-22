import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { makePost } from '../../actions/posts'
import { addPost } from '../../actions/posts'
import { LogUser } from '../../actions/users'
import { logOut } from '../../actions/users'

import NewPost from './NewPost'
import logo from '../../images/pegboard.png'

import './posts.css'

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
      description: this.state.description,
      posterId: this.props.logUser
    })
  }

  componentDidMount() {
    // {console.log(this.props.logUser)}
    // console.log(this)

  }

  render() {
    const some = this.props.users[this.props.logUser].notification.posts
    return (
      <div className="bg-white">

        <div className="linkContainer">
          <Link to={'/Notifications'} className="postLink notification"> Notifications </Link>
          <Link to={'/User/1/false'} className="postLink"> Profile </Link>

          <Link to={'/'} onClick={this.props.logOut} className="postLink logout"> Log Out </Link>
        </div>

        <div className="postLogoContainer">
          <img src={logo} alt="PegBoardLogo" className="postLogo"/>
        </div>

        <h3>Use the form below to create a post!</h3>

        <form onSubmit={this.handleSubmit}>


            <div className="">


              <div className="postForm">

                  <div className="formFlex">
                    <h3 className="form-inline iAmA">I am a:</h3>
                  </div>

                  <div className="formFlex categoryContainer">

                    <div className="radioButton">
                      <p className="form-inline">Employer <input type="radio" name="type" value="employer" onChange={this.handleChange}/></p>
                    </div>

                    <div className="radioButton">
                      <p className="form-inline">Freelancer <input type="radio" name="type" value="freelancer" onChange={this.handleChange}/></p>
                    </div>

                  </div>

              </div>



              <div className="postForm">

                <div className="formFlex">
                  <h3 className="form-inline jobCategory">Job Category:</h3>
                </div>

                <div className="formFlex categoryContainer">
                  {/* <p className="form-inline">Carpenter <input type="radio" name="category" value="carpenter" onChange={this.handleChange}/></p> */}

                  <div className="radioButton">
                    <p className="form-inline">Designer <input type="radio" name="category" value="designer" onChange={this.handleChange}/></p>
                  </div>

                  {/* <p className="form-inline">Cook <input type="radio" name="category" value="cook" onChange={this.handleChange}/></p> */}
                  <div className="radioButton">
                    <p className="form-inline">Developer <input type="radio" name="category" value="developer" onChange={this.handleChange}/></p>
                  </div>
                </div>

              </div>




              <div className="formElement">
                <div className="textAreaElement">
                  <h4>Post Title:</h4>
                  <textarea type="text" name="name" onChange={this.handleChange} className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"></textarea>
                </div>

                <div className="textAreaElement">
                  <h4>Post Description:</h4>
                  <textarea type="text" name="description" onChange={this.handleChange} className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"></textarea>
                </div>
              </div>

              <input type="submit" value="Submit" className="submitButton"/>
            </div>

        </form>

        <div className="categoryButtonContainer">
          {!some && 'loading'}
          {some && some.map(post => {
            return <Link to = {`/matcher/${post.postBody.category}/${post.postBody.type}`} className="categoryLink"><button key={post.postBody.postId} className="categoryButton">{post.postBody.category} - ({post.postBody.type})</button></Link>
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
    logUser: state.logUser,
    logOut: state.logOut
  }
}

export default connect(mapStateToProps, { makePost, addPost, logOut })(PostContainer)
