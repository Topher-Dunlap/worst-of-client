import {Link} from "react-router-dom";


const LogInOutService = {


    RenderLogoutLink(setLoggedOutState) {
        return (
            <div className='Header__logged-in'>
                <Link
                    onClick={setLoggedOutState(true)}
                    to='/'>
                    Logout
                </Link>
            </div>
        )
    },

    RenderLoginLink() {
        return (
            <div style={marginRight}>
                <Link
                    style={linkSpace}
                    to='/register'>
                    Register
                </Link>
                <Link
                    style={linkSpace}
                    to='/login'>
                    Log in
                </Link>
            </div>
        )
    }
}

export default LogInOutService

const linkSpace = {
    margin: "2.5rem 1rem"
}

const marginRight = {
    marginRight: "2rem"
}