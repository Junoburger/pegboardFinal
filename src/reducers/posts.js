// import users from './users'


export default (state = posts, action = {}) => {
  switch(action.type){
  case 'ADD_POST':
  // console.log(action.payload)
  let category = action.payload.category
  let type = action.payload.type
  let rando = Math.ceil(Math.random()*100)
  // console.log(state[category][type], action.payload.type)
  state[category][type].push({
    posterId: action.payload.posterId,
    postBody: {
      postId: rando,
      name: action.payload.name,
      description: action.payload.description,
      category: category
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
        },
        {
          posterId: 6,
          postBody: {
            postId:1,
            description: 'also looking for a designer',
            category: 'designing'
          }
        }
      ],
      freelancer: [
        {
          posterId: 1,
          postBody: {
            postId:1,
            description: 'looking for a design job',
            category: 'designing'
          }
        },
        {
          posterId: 5,
          postBody: {
            postId:1,
            description: 'looking for a design job, im really good',
            category: 'designing'
          }
        }
    ]
    },
    cook: {
      employer:[],
      freelancer: []
    },
    developer: {
      employer:[
        {
          posterId: 3,
          postBody: {
            postId:1,
            description: 'looking for a developer',
            category: 'developer'
          }
        },
        {
          posterId: 2,
          postBody: {
            postId:1,
            description: 'looking for a new developer to join our project',
            category: 'developer'
          }
        }
    ],
      freelancer: [{
        posterId: 1,
        postBody: {
          postId:1,
          description: 'person 1 looking for developer job',
          category: 'developer'
        }
      },
      {
        posterId: 2,
        postBody: {
          postId:1,
          description: 'person 2 looking for developer job',
          category: 'developer'
        }
      },
      {
        posterId: 6,
        postBody: {
          postId:1,
          description: 'person 6 looking for developer job',
          category: 'developer'
        }
      }
    ]
    }
  }
