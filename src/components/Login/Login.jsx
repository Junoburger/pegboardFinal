import React from 'react';
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import {LogUser} from '../../actions/users'
import logo from '../../images/pegboard.png'
import './LoginStyle.css'




class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginMail: '',
      LoginPassword: '',
      loginToHome: false
      }
  }
  onEmailChange = (event) => {
    // console.log(this.state.LoginMail)
    console.log(event.target.value)
    this.setState({LoginMail: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({LoginPassword: event.target.value})
  }
  onSubmitLogin = (e) => {
    e.preventDefault()
    console.log(this.state.LoginMail)
  const userLogin = Object.values(this.props.users)
   .filter( (user)=>{
  return (user.email === this.state.LoginMail && user.password === this.state.LoginPassword)
})
if(userLogin.length === 1){
    console.log(userLogin[0].userId)
    this.props.LogUser(userLogin[0].userId)
    this.setState({loginToHome: true})
}

    console.log(userLogin)


  }
  render() {

    return (<div className="shape">

      <form     onSubmit={this.onSubmitLogin} className="br4 b--black-10 mv4 w-200 mw6 sqrComp center">
        <img src={logo} alt="PegBoardLogo" className="Logo"/><br/><br/>
        <span className="Slogan">The Place For Freelance Jobs</span>
      <main className="pa4 black-80">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend style={{backgroundColor:'rgba(255, 255, 255, 0.47)', padding:'20px',borderRadius: '20px'}} className="f1 fw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
            <label htmlFor="email"><i class="far fa-envelope"></i></label>
            <input className="b  pa2 input-reset bb bg-transparent hover-bg-transparent hover-black w-100 superBox"
              type="email"
               name="email-address"
               id="email-address"
               placeholder="E-mail"
               required="required"
             onChange={this.onEmailChange}/>
          </div>
          <div className="mv3">
            <label htmlFor="password"><i class="fas fa-lock"></i></label>
            <input className="b  pa2 input-reset bb bg-transparent hover-bg-transparent hover-black w-100 superBox"
              type="password"
               name="password"
               required="required"
               placeholder="Password"
                id="password"
              onChange={this.onPasswordChange}/>
          </div>
        </fieldset>
        <div className="">
          <input className="b br3 ph3 pv2 input-reset bn white bg-blue grow pointer f4 dib"
            type="submit"
            value="Sign in"
            />
        </div>
        <div className="mv3">

          <span className="f4">Or</span><br/><br/>

          <Link    className="b br3 ph3 pv2ba blue  grow pointer f4 dib"
              to="/Register">Sign Up</Link>

        </div>
      </main>
      <div>{this.state.loginToHome === true && < Redirect to = '/home' />}</div>
    </form></div>);
  }
}


const mapStateToProps = (state) => {return {users: state.users}}


export default connect(mapStateToProps, {LogUser})(Login)
