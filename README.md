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
  mobile: { maxWidth: 300 }
})(MyResponsiveComponent)
```
`responsiveToMedia` call accepts an object with a list of media queries to monitor.
The keys of the object denote the props that will be passed to wrapped component 
(MyResponsiceComponent in the example above) and the value of those props will be a boolean 
corresponding to the media query matching or not.

The media query can be expressed as a string or as an object which will be parsed using [json2mq](https://github.com/akiran/json2mq).
