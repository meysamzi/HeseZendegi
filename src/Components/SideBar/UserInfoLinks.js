import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";

const UserInfoLinks = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    fetch("dictionary.json")
      .then((response) => response.json())
      .then((data) => setRoutes(data));
  }, []);

  return (
    <div className="userInfoLinksRoot">
      {routes[0]?.links?.map((item, index) => (
        <div key={index}>
          <FavoriteIcon />
          <Link to={item?.pathname}>{item?.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default UserInfoLinks;
