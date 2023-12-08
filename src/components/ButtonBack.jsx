import { useNavigate } from "react-router-dom";
import Button from "./Button";

function ButtonBack() {
  const navigate = useNavigate();
  function backHandle(e) {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <Button type="back" onClick={backHandle}>
      &larr; Back
    </Button>
  );
}

export default ButtonBack;
