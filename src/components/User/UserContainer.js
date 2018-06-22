import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import userBk from '../../images/userBk.png'
import homeBtn from '../../images/homeButton.png'
import './user.css'


class UserContainer extends React.PureComponent {

  componentDidMount() {
    // console.log(this.props)
  }

  render() {


    return (

      <div className="userMain">

        <Link className='homeBtn' to={'/Home'}><img src={homeBtn}/></Link>

        <div className="headerUser">
          <ul className="breadcrumb">
            <li><Link to={'/Home'}>Home</Link></li>
            <li><Link to={'/Notifications'}>Reactions</Link></li>
            <li>{ this.props.user[this.props.match.params.userid].name }</li>
          </ul>
          <div className="logContainer">
            <span className= "log">LOG OUT</span>
            <Link to={'/'} onClick={this.props.logOut} className="postLink logout"><label className={"switch"}><input type={"checkbox"}/><span className={"slider round"}></span></label></Link>
          </div>
        </div>

        <div className="displayUser">
          <div className='profileImg'>
            <img className='userBk' src={userBk}  />
            <div className='lineBk'></div>
            <div className='userPicture'><img src={this.props.user[this.props.match.params.userid].image}/></div>

          </div>
          <div className="userInfo">
            <p className='name'>{ this.props.user[this.props.match.params.userid].name }</p>

            <p> {this.props.user[this.props.match.params.userid].bio}</p>
            { this.props.match.params.accepted==='true'  && <p>{this.props.user[this.props.match.params.userid].phoneNumber}</p> }
            <p className='website'>{this.props.user[this.props.match.params.userid].website}</p>
            { this.props.match.params.accepted==='true'  && <p>{this.props.user[this.props.match.params.userid].email}</p> }

            <p>Amsterdam/NL</p>
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
