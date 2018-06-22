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

  onSubmitLogin = (e) => {
    e.preventDefault()
    const user = new LoginClass(this.state.email,this.state.password,this.state.name)

      this.props.LogUser(user.Id)
      this.props.newUser(user)
      this.setState({loginToHome: true})

  }
  render() {

   return (


     <div className="shape">

     <form  onSubmit={this.onSubmitLogin} className="br3  b--black-10 mv4 w-100 mw6 sqrComp center">
       <img src={logo} alt="PegBoardLogo" className="Logo"/><br/><br/>

       <span className="Slogan">The Place For Freelance Jobs</span>
     <main className="pa4 black-80">
       <div className="measure">
         <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
           <legend style={{backgroundColor:'rgba(255, 255, 255, 0.47)', padding:'20px',borderRadius: '20px'}}
              className="f1 fw6 ph0 mh0">Register</legend>
           <div className="mt3">
             <i className="far fa-user"></i>
             <input
               className="pa2 input-reset bb bg-transparent hover-bg-transparent hover-black w-100 superBox"
               type="text"
               name="name"
               placeholder="Name"
               required="required"
               autoComplete="off"
               id="name"
               onChange={this.onNameChange}/>
           </div>
           <div className="mt3">
             <i className="far fa-envelope"></i>
             <input
               className="pa2 input-reset bb bg-transparent hover-bg-transparent hover-black w-100 superBox "
               type="email"
                name="email-address"
                 id="email-address"
                 autoComplete="off"
                 placeholder="E-mail"
                 required="required"
                 onChange={this.onEmailChange}/>
           </div>
           <div className="mv3">
             <i className="fas fa-lock"></i>
             <input className="b  pa2 input-reset bb bg-transparent hover-bg-transparent hover-black w-100  superBox"
               type="password"
               name="password"
               id="password"
               required="required"
               placeholder="Password"
                onChange={this.onPasswordChange}/>
           </div>
         </fieldset>
         <div className="">
           <input className="b br3 ph3 pv2 input-reset bn shadow-3 white bg-blue grow pointer f4 dib"
             type="submit"
             value="Sign Up"
            />

         </div>

       </div>
       <br/>
       <Link className="link underline blue hover-orange" to="/">Already A Member?</Link>

     </main>
     <div>{this.state.loginToHome === true && < Redirect to = '/home' />}</div>

   </form>
</div>

 );
 }
}

const mapStateToProps = (state) => {return {reducers: state.reducers}}


export default connect(mapStateToProps,  {newUser, LogUser})(Register)
