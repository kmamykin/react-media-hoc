# React Media 

This projects provides a simple and straight forward method for a React application to adopt and respond to browser media.
Most of the time adding media queries to project's CSS is the right way to go.
However there are times when an application component needs to detect the resolution of a media device or respond to 
a change to media/device orientation. This simple Higher Order Component helps you to do just that.

# Installation

```bash
npm install react-media-hoc --save
```

or 

```bash
yarn add react-media-hoc
```

# Usage 

```javascript
import responsiveToMedia from 'react-media-hoc'

// A simple stateless component will do
const MyResponsiveComponent = ({portrait, mobile}) => (
  <div>
    {
      portrait && <p>You are in portrait mode</p>
    }
    {
      mobile && <p>You are on mobile device</p>
    }
  </div>
)

export default responsiveToMedia({
  portrait: '(orientation: portrait)',
  mobile: '(min-width: 700px)'
})(MyResponsiveComponent)
```
