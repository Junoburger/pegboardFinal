// import users from './users'


export default (state = posts, action = {}) => {
  switch(action.type){
  case 'ADD_POST':

  let category = action.payload.category
    let type = action.payload.type
    // console.log(state[category][type], action.payload.type)
    state[category][type].push({
      posterId: null,
      postBody: {
        postId: null,
        name: action.payload.name,
        description: action.payload.description,
        category: null
      }
    })

    return {
      ...state,
    }


  default:
    return state
  }
}

const posts = {
    carpenter: {
      employer:[
        {
          posterId: 1,
          postBody: {
            postId:1,
            description: 'person 1 looking for a carpenter',
            category: 'carpenter'
          }
        }
      ],
      freelancer: [
        {
          posterId: 1,
          postBody: {
            postId:1,
            description: 'person 1 looking for carpentry job',
            category: 'carpenter'
          }
        },
        {
          posterId: 2,
          postBody: {
            postId:1,
            description: 'person 2 looking for carpentry job',
            category: 'carpenter'
          }
        },
        {
          posterId: 3,
          postBody: {
            postId:1,
            description: 'person 3 looking for carpentry job',
            category: 'carpenter'
          }
        }
      ]
    },
    designer: {
      employer:[
        {
          posterId: 3,
          postBody: {
            postId:1,
            description: 'looking for a designer',
            category: 'designing'
          }
        }
      ],
      freelancer: [{
        posterId: 1,
        postBody: {
          postId:1,
          description: 'looking for a design job',
          category: 'designing'
        }
      }]
    },
    cook: {
      employer:[],
      freelancer: []
    },
    developer: {
      employer:[],
      freelancer: []
    }
  }
