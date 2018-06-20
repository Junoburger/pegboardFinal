import React from 'react';
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import {LogUser} from '../../actions/users'
import { Textbox } from 'react-inputs-validation';




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
    console.log(this.state.LoginMail)
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
const onEmailChange = this.onEmailChange
    return (<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">

        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
               name="email-address"
               id="email-address"
             onChange={this.onEmailChange}/>

          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="password"
               name="password"
                id="password"
              onChange={this.onPasswordChange}/>
          </div>
        </fieldset>
        <div className="">
          <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="submit"
            value="Sign in"
            onClick={this.onSubmitLogin}
            />
        </div>
        <div className="mv3">
          <Link className="link underline blue hover-orange" to="/Register">Not A Member?</Link><br/><br/>
          <Link  to="/Register"><input  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            name="Register-redirect"
            id="Register-redirect"
             type="button" value="Register"/></Link>

        </div>
      </main>
      <div>{this.state.loginToHome === true && < Redirect to = '/home' />}</div>
    </article>);
  }
}


const mapStateToProps = (state) => {return {users: state.users}}


export default connect(mapStateToProps, {LogUser})(Login)
