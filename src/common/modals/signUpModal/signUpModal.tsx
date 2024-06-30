"use client";

import Image from "next/image";
import IconX from "@/common/assets/media/logo/x.png";
import styles from "./signUpModal.module.scss";
import IconLeft from "@/common/assets/media/logo/arrow-big-left.svg";
import { Input } from "@/common/components/layout/ui/input/input";
import { notify } from "@/common/configs/notify";
import { Button } from "@/common/components/layout/ui/button/button";
import { useForm } from "@/common/hooks/useForm";
import { validateForm } from "@/common/hooks/validation";
import { useAppContext } from "@/common/context/appContext";
import { getInitalFormValues } from "@/common/shared/initialValues";

export default function SignupModal() {
  const { modals } = useAppContext();
  const [form, setForm] = useForm(getInitalFormValues);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validateForm(form)) {
      return;
    }
    notify("success", "basarili bir sekilde kayıt oldunuz", {
      position: "top-right",
    });

    modals.setSignupModalVisible(false);
    modals.setSigninModalVisible(true);
  };

  const handlePropagation = (e: any) => e.stopPropagation();
  const handleSignUp = () => modals.setSignupModalVisible(false);
  const handleSignIn = () => {
    modals.setSignupModalVisible(false);
    modals.setSigninModalVisible(true);
  };

  if (!modals.signupModalVisible) return null;

  return (
    <div className={styles.container}>
      <div className={styles.content} onClick={handlePropagation}>
        <div className={styles.modalTitle}>Üye Ol</div>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={setForm}
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={setForm}
          />
          <Button type="submit" text="Üye Ol" />

          <Image
            onClick={handleSignUp}
            className={styles.close}
            src={IconX}
            alt="closeButton"
            width={45}
            height={45}
          />

          <Image
            onClick={handleSignIn}
            className={styles.left}
            src={IconLeft}
            alt="arrowLeft"
            width={45}
            height={45}
          />
        </form>
      </div>
    </div>
  );
}
