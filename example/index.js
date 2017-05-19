import React from 'react'
import ReactDOM from 'react-dom'
import responsiveToMedia from '../src'

const DemoComponent = ({ portrait, landscape, mobile, tablet, desktop }) => (
  <div>
    <h3>React Media HOC Demo</h3>
    { portrait && <p>Portrait mode</p> }
    { landscape && <p>Landscape mode</p> }
    { mobile && <p>Mobile mode</p> }
    { tablet && <p>Tablet mode</p> }
    { desktop && <p>Desktop mode</p> }
  </div>
)

const Demo = responsiveToMedia({
  portrait: '(orientation: portrait)',
  landscape: '(orientation: landscape)',
  mobile: { maxWidth: 599 },
  tablet: { minWidth: 600, maxWidth: 999 },
  desktop: { minWidth: 1000 }
})(DemoComponent)

ReactDOM.render(<Demo/>, document.getElementById('demo'))
