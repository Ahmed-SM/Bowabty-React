import React from "react";
import UserContent from "../components/userContent/userContent";

const UserSection = ({ isVisible }) => {
  return (
    <>
      {isVisible ? (
        <section>
          <UserContent />
        </section>
      ) : (
        <></>
      )}
    </>
  );
};
export default UserSection;

