import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>404</h1>
            <h2>Sorry</h2>
            <p>Page Not Found</p>

            <Link to="/">Back to homepage...</Link>
        </div>
     );
}
 
export default NotFound;