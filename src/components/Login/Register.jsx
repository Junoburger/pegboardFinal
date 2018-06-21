import React from 'react';
import {Link} from 'react-router-dom'
import {LoginClass} from '../../classes_constructor/LoginClass'
import {newUser} from '../../actions/users'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { LogUser } from '../../actions/users'
import './LoginStyle.css'
import logo from '../../images/pegboard.png'



class Register extends React.Component {
  state = {
    loginToHome: false
  }
  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }
  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }
  onSubmitLogin = () => {
    const user = new LoginClass(this.state.email,this.state.password,this.state.name)
    // console.log(user)
    this.props.LogUser(user.Id)
    this.props.newUser(user)
    this.setState({loginToHome: true})


  }
  render() {

    return (<div className="shape">
      <img src={logo} alt="PegBoardLogo" className="Logo"/>


      <article className="br3  b--black-10 mv4 w-100 w-50-m w-25-l mw6 sqrComp center">

      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend style={{backgroundColor:'white', padding:'20px',borderRadius: '20px'}}
               className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input
                className="pa2 br3 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
                onChange={this.onNameChange}/>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input
                className="pa2 br3 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                 name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b br3  pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                 onChange={this.onPasswordChange}/>
            </div>
          </fieldset>
          <div className="">
            <input className="b br3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
              onClick={this.onSubmitLogin}/>
          </div>

        </div>
        <br/>
        <Link className="link underline green hover-orange" to="/">Already A Member?</Link>

      </main>
      <div>{this.state.loginToHome === true && < Redirect to = '/home' />}</div>

    </article>
</div>
  );
  }

}

const mapStateToProps = (state) => {return {reducers: state.reducers}}


export default connect(mapStateToProps,  {newUser, LogUser})(Register)
