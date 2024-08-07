"use client"
import { handleLogin } from "app/actions";
import styles from "./LoginForm.module.sass";

/***
 * email: goku@goku.com
 * password: 1234567 
 **/

export const LoginForm = () => {

  const handleSubmit = async (event: {
    target: any;
    preventDefault: () => void;
  
  }) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await handleLogin(formData);
  }

  return (
    <div className={styles.NewAccountForm}  >
      <h1 className={styles.NewAccountForm__title}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.NewAccountForm__form}>
        <input type="text" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" name="submit" value="Login" />
      </form>
    </div>
  );
}