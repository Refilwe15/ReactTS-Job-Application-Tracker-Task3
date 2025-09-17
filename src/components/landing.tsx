import back from '../assets/back.jpg'

function Landing(){
    return (
           <div className='landing'>

            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </div>
                <h1>JobTracker</h1>
                <p>Smart Tracking for Smarter Careers</p>
                <button>Get Started</button>
           </div>
    );
}
export default Landing;