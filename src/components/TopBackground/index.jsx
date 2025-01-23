import { Background } from "./style";
import UserImage from "../../assets/users.png";

function TopBackground() {
  return (
    <Background>
      <img src={UserImage} alt="Imagens-usuarios" />
    </Background>
  );
}

export default TopBackground;
