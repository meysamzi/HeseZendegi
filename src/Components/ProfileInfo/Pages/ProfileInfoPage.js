import Title from "../Previews/Title";
import ProfilePicture from "../Previews/ProfilePicture";
import EditProfileInfo from "../Forms/EditProfileInfo";

const ProfileInfoPage = () => {
  return (
    <div className="ProfileInfoPageRoot">
      <Title />
      <ProfilePicture />
      <EditProfileInfo />
    </div>
  );
};

export default ProfileInfoPage;
