import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";

export default function AuthPage({ setUser }) {
  return (
    <>
      <SignUpForm setUser={setUser} />
      <LogInForm setUser={setUser} />
    </>
  );
}
