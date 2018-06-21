import React from 'react';
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import {LogUser} from '../../actions/users'
import logo from '../../images/pegboard.png'




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
      <img src={logo} alt="PegBoardLogo" className="Logo"/>
      <article className="br4 b--black-10 mv4 w-200 w-50-m w-25-l mw6 sqrComp center">
      <main className="pa4 black-80">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend style={{backgroundColor:'white', padding:'20px',borderRadius: '20px'}} className="f1 fw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
            <input className="b br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
               name="email-address"
               id="email-address"
             onChange={this.onEmailChange}/>
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
            <input className="b br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="password"
               name="password"
                id="password"
              onChange={this.onPasswordChange}/>
          </div>
        </fieldset>
        <div className="">
          <input className="b br3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib"
            type="submit"
            value="Sign in"
            onClick={this.onSubmitLogin}
            />
        </div>
        <div className="mv3">
          <span className="f4">Or</span><br/><br/>
          <Link  to="/Register"><input
             className="b br3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib"
            name="Register-redirect"
            id="Register-redirect"
             type="button" value="Register"/></Link>

        </div>
      </main>
      <div>{this.state.loginToHome === true && < Redirect to = '/home' />}</div>
    </article></div>);
  }
}


const mapStateToProps = (state) => {return {users: state.users}}


export default connect(mapStateToProps, {LogUser})(Login)
