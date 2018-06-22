import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import userBk from '../../images/userBk.png'
import './user.css'


class UserContainer extends React.PureComponent {

  componentDidMount() {
    // console.log(this.props)
  }

  render() {


    return (

      <div className="userMain">

        <div className="headerUser">
          <ul className="breadcrumb">
            <li><Link to={'/Home'}>Home</Link></li>
            <li><Link to={'/Notifications'}>Notifications</Link></li>
            <li>{ this.props.user[this.props.match.params.userid].name }</li>
          </ul>
        </div>

        <div className="displayUser">
          <div className='profileImg'>
            <img className='userBk' src={userBk}  />
            <div className='lineBk'></div>
            <div className='userPicture'></div>

          </div>
          <div className="userInfo">
            <p className='name'>{ this.props.user[this.props.match.params.userid].name }</p>
            <p> Recruiter at GOT startup</p>
            <p>{ this.props.user[this.props.match.params.userid].website }</p>
            <p>Amsterdam/Netherlands</p>
          </div>
          <div className="secretInfo">
            <h1>Contact Information</h1>
            { this.props.match.params.accepted==='true'  && <p>{this.props.user[this.props.match.params.userid].email}</p> }
            { this.props.match.params.accepted==='true'  && <p>{this.props.user[this.props.match.params.userid].phoneNumber}</p> }
          </div>
        </div>

      </div>
     )
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.users
  }
}

export default connect(mapStateToProps, {  })(UserContainer)
