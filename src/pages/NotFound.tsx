import "../styles/NotFound.css";
import { Link } from "react-router-dom";
import error from "../images/404.gif";

export default function NotFound() {
  return (
    <div className="uwuOwO">
      <div className="oopsieWoopsie">
        <div className="notFoundTextContainer">
          <h1 className="nfText">404</h1>
          <h3 className="nfSubHeader">page not found</h3>
          <h3 className="nfMicroSubHeader">:-(</h3>
          <img className="error" src={error} alt="404 error" />
          <div className="nfButtonContainer">
            <Link className="backButton" to="/home">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div style={{ padding: "30px" }}>
//   <div
//     style={{
//       display: "flex",
//       alignItems: "center",
//       flexWrap: "wrap",
//       marginBottom: "20px",
//       flexDirection: "column",
//     }}
//   >

//     <h1>Page Not Found</h1>
//     <Link className="card-link" to="/home">
//       Back
//     </Link>
//   </div>
// </div>
