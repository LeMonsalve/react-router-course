import {Link} from "react-router-dom";
import '../styles/PageNotFound.css'

const PageNotFound = () => {
  return (
    <div className="pnf-container" >
      <div className="pnf-info" >
        <div className="pnf-info__header" >
          <h2>Page Not Found</h2>
          <h2 className="status-label" >404</h2>
        </div>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
}

export default PageNotFound;