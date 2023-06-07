import { Link } from "react-router-dom";
import NotFound from "../Assets/notFound.png";
const PageNotFound = () => {
  return (
    <main className="container w-96 h-96 shadow-xl m-auto text-center mt-10">
      <div>
        <h1>Oops - Page Not Found</h1>

        <img className="rounded w-72 mx-auto mt-5" src={NotFound} alt="" />
        <Link to="/word-counter">
          <button className="mt-5 bg-blue-600 text-white rounded p-2">
            Go Back To Word Counter
          </button>
        </Link>
      </div>
    </main>
  );
};

export default PageNotFound;
