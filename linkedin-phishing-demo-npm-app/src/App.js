import './App.css';
import LinkedIn from './LinkedIn_Logo.svg.png'

function nowYouFuckedUp() {
    alert("Hey! This is NOT LinkedIn. \nThis is a fake website set up by Henry Post (http://henrypost.net/) to demonstrate \nhow incredibly easy it is to get 'phished'.")

    alert("For more info, go to https://www.phishing.org/what-is-phishing ")
}

function App(props) {
    return (<div className="Auth-form-container">
        <form className="Auth-form" onSubmit={nowYouFuckedUp}>
            <div className="Auth-form-content">

                <div className={'linkedin-logo'}>
                    <img src={LinkedIn}/>
                </div>
                <h3 className="Auth-form-title">Sign In</h3>
                <p> Stay updated on your professional world </p>
                <div className="form-group mt-3">
                    <label>Email address</label>
                    <br/>
                    <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                    />
                </div>
                <br/>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <br/>
                    <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                    />
                </div>
                <br/>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <p className="forgot-password text-right mt-2">
                    Forgot <a href="#">password?</a>
                </p>
            </div>
        </form>
    </div>)
}

export default App;
