import React from 'react'

//DecoratedComponent я называл чтоб легче понять было. Лучше выбирай более значущее название
export default (CustomComponent) => class DecoratedComponent extends React.Component {
  state = {
      openEntityId: null
  }

  toggleOpenEntity = openEntityId => ev => {
    const state = openEntityId === this.state.openEntityId ? { openEntityId: null } : { openEntityId }
    this.setState(state)
  }

  isOpenEntity = entity => {
    return entity.id === this.state.openEntityId
  }

  //с этим ты перемудрил, даже мне было сложно разобратся, это плохо. Старайся писать более простой код
  enumerableComponent = entity => {
    return React.cloneElement(
      CustomComponent.prototype.enumerableComponent(entity),
      {
        isOpen: this.isOpenEntity(entity),
        toggleOpen: this.toggleOpenEntity(entity.id)
      }
    )
  }

  render() {
    return <CustomComponent {...this.props} {...this.state} enumerableComponent={this.enumerableComponent} />
  }

}
