import React from 'react'

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