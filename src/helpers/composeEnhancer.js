import React from "react"

export default (...layers) => BaseComponent => {
    return props => {
      const hooksProps = layers.reduce((prevProps, layer) => {
        const layerProps = layer.call(null, { ...props, ...prevProps })
        return {
          ...prevProps,
          ...layerProps,
        }
      }, {})
      return <BaseComponent {...props} {...hooksProps} />
    }
  }