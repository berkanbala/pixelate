"use client";
import Image from "next/image";
import IconX from "@/common/assets/media/logo/x.png";
import styles from "./signInModal.module.scss";
import { Input } from "@/common/components/layout/ui/input/input";
import { Button } from "@/common/components/layout/ui/button/button";
import { notify } from "@/common/configs/notify";
import { useForm } from "@/common/hooks/useForm";
import { validateForm } from "@/common/hooks/validation";
import { useAppContext } from "@/common/context/appContext";
import { getInitalFormValues } from "@/common/shared/initialValues";

export default function SigninModal() {
  const { modals, user } = useAppContext();
  const [form, setForm, resetForm] = useForm(getInitalFormValues);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validateForm(form)) {
      return;
    }
    notify("success", "basarili bir sekilde giris yaptiniz", {
      position: "top-right",
    });
    console.log(notify);

    user.setUsers(form.email);
    resetForm();
    user.setAuth(true);
    modals.setSigninModalVisible(false);
  };

  const handlePropagation = (e: any) => e.stopPropagation();

  const handleSignIn = () => modals.setSigninModalVisible(false);
  const handleSignUp = () => {
    modals.setSigninModalVisible(false);
    modals.setSignupModalVisible(true);
  };

  if (!modals.signinModalVisible) return null;

  return (
    <div className={styles.container} onClick={handleSignIn}>
      <div className={styles.content} onClick={handlePropagation}>
        <div className={styles.modalTitle}>Giriş Yap</div>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="email"
            value={form.email}
            placeholder="Email"
            required
            onChange={setForm}
          />
          <Input
            type="password"
            name="password"
            value={form.password}
            placeholder="Password"
            required
            onChange={setForm}
          />
          <Button
            type="submit"
            text="Sign In"
            disabled={!Object.values(form).every((item) => item !== "")}
          />
        </form>

        <div className={styles.signUp}>
          Kayıt Yapmadıysan
          <span onClick={handleSignUp}> Üye Ol</span>
        </div>

        <Image
          onClick={handleSignIn}
          className={styles.close}
          src={IconX}
          alt="closeButton"
          width={45}
          height={45}
        />
      </div>
    </div>
  );
}
