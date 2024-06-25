import { useState } from "react";

export default function useModals() {
  const [signinModalVisible, setSigninModalVisible] = useState(false);
  const [signupModalVisible, setSignupModalVisible] = useState(false);

  return {
    signinModalVisible,
    setSigninModalVisible,
    signupModalVisible,
    setSignupModalVisible,
  };
}
