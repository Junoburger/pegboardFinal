class NewPost {
  constructor(category, type, posterId, description){
    this.posterId = posterId,
    this.postBody = {
      type: type,
      description: description,
      category: category,
      postId: this.randomId()
    }


  }

  randomId = () => {
    return Math.ceil(Math.random() * 100)
  }

}

export default NewPost
