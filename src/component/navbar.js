import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>OKY News</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/more" style={{
                    color: 'white',
                    backgroundColor: '#f3156d',
                    borderRadius: '8px',
                    padding: '5px 15px'
                }}>More</Link>
            </div>
        </nav>
      );
}
 
export default Navbar; 