const users = {
1: {
  userId: 1,
  name: "Billy",
  email: "billy@gmail.com",
  password: "billy123",
  dateOfBirth: "12-09-1992",
  bio: "I'm Billy, and I'm a really motivated person!",
  phoneNumber: 31657811354,
  image: "https://pbs.twimg.com/profile_images/719539994893893632/Bcdhs4ex_400x400.jpg",
  website: "https://www.facebook.com/billkachnowski/",
  notification: {
    match: [],
    request: [
      {
        requesterId: 2,
        posterId: 1,
        postBody: {
          postId: 462,
          description: "Looking for someone to help me with a home project",
          category: "carpentry"
        }
      }
    ],
    posts: []
  }
},
2: {
  userId: 2,
  name: "Emily",
  email: "emily@gmail.com",
  password: "emily123",
  dateOfBirth: "07-01-1996",
  bio: "I'm Emily, and I'm a freelance designer in Amsterdam!",
  phoneNumber: 31488940334,
  image: "https://pbs.twimg.com/profile_images/770364818364792832/QWfmF4ht_400x400.jpg",
  website: "https://emilyinamsterdam.com/",
  notification: {
    match: [],
    request: [],
    posts: []
  }
},
3: {
  userId: 3,
  name: "Puck",
  email: "puck@gmail.com",
  password: "puck123",
  dateOfBirth: "20-03-1996",
  bio: "I'm Puck, and I like to bike in The Netherlands and explore!",
  phoneNumber: 31885485334,
  image: "https://pbs.twimg.com/profile_images/873827263904710656/zOzP-XMi_400x400.jpg",
  website: "https://www.instagram.com/puckmoonen/?hl=nl",
  notification: {
    match: [],
    request: [],
    posts: []
  }
},
4: {
  userId: 4,
  name: "Nathan",
  email: "nathan@gmail.com",
  password: "nathan123",
  dateOfBirth: "12-05-1983",
  bio: "I'm Nathan, and I'm a comedian from Canada eh!",
  phoneNumber: 31455655049,
  image: "https://pbs.twimg.com/profile_images/714866918348472320/8RsurZC2.jpg",
  website: "https://nathanfielder.com/",
  notification: {
    match: [],
    request: [],
    posts: []
  }
},
5: {
  userId: 5,
  name: "Seth",
  email: "seth@gmail.com",
  password: "seth123",
  dateOfBirth: "15-04-1982",
  bio: "I'm a comedian who likes to make really funny movies",
  phoneNumber: "31499586773",
  image: "https://pbs.twimg.com/profile_images/706843350633193473/j_V0xWQj_400x400.jpg",
  website: "https://en.wikipedia.org/wiki/Seth_Rogen",
  notification: {
    match: [],
    request: [],
    posts: []
  }
},
6: {
  userId: 6,
  name: "Ellen",
  email: "ellen@gmail.com",
  password: "ellen123",
  dateOfBirth: "26-01-1958",
  bio: "My name is Ellen and I have a show on TV about people",
  phoneNumber: "31443567039",
  image: "https://pbs.twimg.com/profile_images/378800000831344355/051c164013bf87e25781d426326d53b5.jpeg",
  website: "https://ellentube.com/",
  notification: {
    match: [],
    request: [],
    posts: []
  }
}
}

export default(state = users, action = {}) => {

 switch (action.type) {
   // case 'SELECT_USER':
   //   return action.payload
   case 'NEW_USER':
     return {
       ...state,
       [action.payload.Id]: action.payload.body
     }
   case 'MAKE_REQUEST':
     const pushRequest = JSON.parse(JSON.stringify(state))
     pushRequest[action.payload.posterId].notification.request.push(action.payload)
     return pushRequest
   case 'MAKE_MATCH':
     const match = JSON.parse(JSON.stringify(state))
     match[action.payload.posterId].notification.request = match[action.payload.posterId].notification.request.filter((reqItem) => {
       return (reqItem.postBody.postId !== action.payload.postBody.postId && reqItem.requesterId !== action.payload.requesterId ||
         reqItem.postBody.postId === action.payload.postBody.postId && reqItem.requesterId !== action.payload.requesterId)
     })

     match[action.payload.posterId].notification.match.push(action.payload)
     match[action.payload.requesterId].notification.match.push(action.payload)
     return match
   case 'MAKE_POST':
     const Post = JSON.parse(JSON.stringify(state))
     Post[action.payload.posterId].notification.posts.push(action.payload)
     return Post

   default:
     return state
 }
}
