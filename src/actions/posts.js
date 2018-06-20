
export const MAKE_POST = 'MAKE_POST'
export const ADD_POST = 'ADD_POST'

export function makePost(post) {
  return {
    type: MAKE_POST,
    payload: post
  }
}

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: post
  }
}
