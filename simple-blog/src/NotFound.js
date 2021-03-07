import { Link } from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h2> Sorry </h2>
            <p> That page cannot be found </p>
            <Link to="/"> Back tp the homepage... </Link>
        </div>
     )
}
 
export default NotFound