import {useContext} from "react";
import {UserContext} from "../../context/UserContext.jsx";

const Profile = () => {

  const user = useContext(UserContext)

  return (
    <div>
      <h1>{ user.name }'s Profile</h1>
      <div>
        User since: { user.registered }
      </div>
    </div>
  )
}

export default Profile
