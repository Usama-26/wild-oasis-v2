import useLogout from "../features/authentication/useLogout";
import ButtonIcon from "./ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import SpinnerMini from "./SpinnerMini";

export default function Logout() {
  const { logout, isLoggingOut } = useLogout();
  return (
    <ButtonIcon disabled={isLoggingOut} onClick={logout}>
      {isLoggingOut ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
    </ButtonIcon>
  );
}
