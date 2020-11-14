import Logo from '../logo.svg'

function Home() {
  return(
      <div className="App-body">
          <h1>Home</h1>
          <img src={Logo} className="App-logo" alt="logo" onClick="/auth/42"/>
      </div>
    )
}

export default Home