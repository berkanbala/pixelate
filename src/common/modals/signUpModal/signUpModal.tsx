"use client";

import { Input } from "@/common/components/layout/ui/input/input";
import { Button } from "@/common/components/layout/ui/button/button";
import { useForm } from "@/common/hooks/useForm";
import { validateForm } from "@/common/hooks/validation";
import { useAppContext } from "@/common/context/appContext";
import { getInitalFormValues } from "@/common/shared/initialValues";
import Image from "next/image";
import IconX from "../../media/logo/x.png";
import styles from "./signUpModal.module.scss";
export default function SignupModal() {
  const { modals } = useAppContext();
  const [form, setForm] = useForm(getInitalFormValues);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validateForm(form)) {
      return;
    }

    modals.setSignupModalVisible(false);
    modals.setSigninModalVisible(true);
  };

  const handlePropagation = (e: any) => e.stopPropagation();
  const handleSignUp = () => modals.setSignupModalVisible(false);

  if (!modals.signupModalVisible) return null;

  return (
    <div className={styles.container}>
      <div className={styles.content} onClick={handlePropagation}>
        <div className={styles.modalTitle}>
          <h1>Üye Ol</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="email"
            placeholder="email"
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
        </form>
      </div>
    </div>
  );
}
