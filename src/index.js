import React from 'react'
import json2mq from 'json2mq'

const createMediaQueries = (mediaSpec) => {
  return Object.keys(mediaSpec).map(key => {
    const stringMediaQuery = typeof mediaSpec[key] === 'object' ? json2mq(mediaSpec[key]) : mediaSpec[key]
    const mdl = window.matchMedia(stringMediaQuery)
    return {
      key: key,
      initialValue: mdl.matches,
      subscribe: (onChange) => {
        const handler = (e) => { onChange({ [key]: e.matches }) }
        mdl.addListener(handler)
        return () => mdl.removeListener(handler)
      }
    }
  })
}

const initialState = (queries) => queries.reduce((state, query) => {
  state[query.key] = query.initialValue
  return state
}, {})

const createMediaSubscription = (mediaSpec) => {
  return {
    subscribe: (onMediaChange) => {
      const queries = createMediaQueries(mediaSpec)
      onMediaChange(initialState(queries))
      const unsubscribes = queries.map(query => query.subscribe(onMediaChange))
      return () => {
        unsubscribes.forEach(fn => fn())
      }
    }
  }
}

export default (mediaSpec) => (WrappedComponent) => {

  const subscription = createMediaSubscription(mediaSpec)

  class ResponsiveComponent extends React.Component {

    componentWillMount() {
      this.unsubscribe = subscription.subscribe(s => this.setState(s))
    }

    componentWillUnmount() {
      this.unsubscribe()
    }

    render() {
      return (
        <WrappedComponent {...this.state} {...this.props}/>
      )
    }
  }
  return ResponsiveComponent
}


