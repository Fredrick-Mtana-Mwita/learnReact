// images
import Mwita from "../assets/images/mwita.jpg";

// css
import "../styles/profile.css";

const Profile = () => {
  const profileInfo = {
    image: Mwita,
    name: "Fanbula Tz ",
    posts: 9,
    followers: 1500,
    following: 879,
    bio: "Chelsea 🔵 Simba 🔴 \n Die hard Chelse fun, Developer full stack developer/ Computer Scientist!",
  };
  return (
    <>
      <div>
        <div className="profile-body">
          <img src={profileInfo.image} alt="" className="profile-picture" />
          <div className="info">
            <h4 className="user-name">{profileInfo.name}</h4>
            <div className="stats">
              <p className="post">Posts</p>
              <p className="followers">Followers</p>
              <p className="following">Following</p>
            </div>
            <div className="hey">
              <p className="post-hey">{profileInfo.posts}</p>
              <p className="followers-hey">{profileInfo.followers}</p>
              <p className="following-hey">{profileInfo.following}</p>
            </div>
          </div>
        </div>
        <h5 className="bio">{profileInfo.bio}</h5>
      </div>
    </>
  );
};

export default Profile;
