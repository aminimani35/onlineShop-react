import { Avatar, Chip } from "@material-ui/core";
import React from "react";
import { useAuthState } from "../context/AuthContext";

const Profile = () => {
  const username = useAuthState();

  return (
    <>
      <Chip avatar={<Avatar>{username?.user?.data?.name.charAt(0)}</Avatar>} label={username?.user?.data?.name} />
    </>
  );
};

export default Profile;
