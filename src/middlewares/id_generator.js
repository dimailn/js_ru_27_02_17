export default store => next => action => {
  if(action.should_generate_id)
  {
    const id = new Date().getTime()
    action = {...action}
    action.payload.id = id
  }
  next(action)
}