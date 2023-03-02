import UserInfo from "./UserInfo";
import UserInfoLinks from "./UserInfoLinks";

const SideBarMain = () => {
  return (
    <div className="sideBarMainRoot">
      <UserInfo />
      <UserInfoLinks />
    </div>
  );
};

export default SideBarMain;
