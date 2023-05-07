import React from "react";
import SignUpForm from "../auth/SignUpForm";
import CreateExpertForm from "./CreateExpertForm";
import CreateAdminForm from "./CreateAdminForm";

const ModalContent = (props) => {
  return props.type == "Expert" ? (
    <CreateExpertForm></CreateExpertForm>
  ) : (
    <CreateAdminForm></CreateAdminForm>
  );
};

export default ModalContent;
