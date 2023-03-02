import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

const UserInfoLinks = () => {
  const routes = [
    {
      pathname: "/",
      name: "اطلاعت پروفایل",
    },
    {
      pathname: "/",
      name: "اطلاعت پروفایل",
    },
    {
      pathname: "/",
      name: "اطلاعت پروفایل",
    },
    {
      pathname: "/",
      name: "اطلاعت پروفایل",
    },
    {
      pathname: "/",
      name: "اطلاعت پروفایل",
    },
    {
      pathname: "/",
      name: "اطلاعت پروفایل",
    },
    {
      pathname: "/",
      name: "اطلاعت پروفایل",
    },
  ];

  return (
    <div className="userInfoLinksRoot">
      {routes?.map((item, index) => (
        <div  key={index}>
          <FavoriteIcon />
          <Link to={item?.pathname}>
            {item?.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UserInfoLinks;
