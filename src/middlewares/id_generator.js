export default store => next => action => {
  if(action.should_generate_id)
  {
    const id = new Date().getTime()
    action = {...action}
    //лучше не мутировать payload, мало-ли что там станут передавать
    action.payload.id = id
  }
  next(action)
}
