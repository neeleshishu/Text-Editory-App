import React from 'react'

function About(props) {
  return (
    <>
          <div className="card" style={{backgroundColor: props.mode==='dark'?'grey':'white'}}>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="card text-center" style={{backgroundColor: props.mode==='dark'?'grey':'white'}}>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="card text-end" style={{backgroundColor: props.mode==='dark'?'grey':'white'}}>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</>
  )
}

export default About
