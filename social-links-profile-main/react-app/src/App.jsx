import './App.css'

function App() {
  return (
    <div className="App">
      <div className="parent-div">
        <div className="child-div child-div--image">
          <img className="profile-image" src="/assets/images/avatar-jessica.jpeg" alt="Jessica Randall" />
        </div>
        <div className="child-div name-location">
          <span className="name">Jessica Randall</span>
          <span className="location">London, United Kingdom</span>
        </div>
        <div className="child-div bio">"Front-end developer and avid reader."</div>
        <div className="child-div link github">GitHub</div>
        <div className="child-div link frontend-mentor">Frontend Mentor</div>
        <div className="child-div link linkedin">LinkedIn</div>
        <div className="child-div link twitter">Twitter</div>
        <div className="child-div link instagram">Instagram</div>
      </div>
    </div>
  )
}

export default App
