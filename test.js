decline = () => {
  this.setState({
    holder: [...this.state.holder].filter((item,index)=> index !== this.state.index)
  })
}
