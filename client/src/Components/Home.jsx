import Logo from '../logo.svg'

function Home() {
    return(
        <div className="App-body">
            <h1>Home</h1>
            <img src={Logo} className="App-logo" alt="logo" />
        </div>
    )
}

export default Home