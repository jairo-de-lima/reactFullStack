import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useEffect, useState } from "react";
import Title from "../../components/Title";
import { ContainerUsers, CardUsers, TrashIcon, AvatarUsers } from "./styles";
import Trash from "../../assets/trash.svg";
import Container from "../../components/Container";
import Alert from "../../components/Dialog";

function ListUsers() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ show: false, message: "" });

  const [users, setUsers] = useState([]);

  // toda vez que a tela carrega, o useEfect e chamado
  // tova vez que uma variavel muda de valor, ele e chamado
  useEffect(() => {
    // chama a funcao para pegar os usuarios
    async function getUser() {
      const { data } = await api.get("/usuarios");
      setUsers(data);
    }
    getUser();
  }, []);

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);
    const updateUser = users.filter((user) => user.id !== id);

    setUsers(updateUser);
    setAlert({ show: true, message: "Usuario Deletado com Sucesso" });
    setTimeout(() => setAlert({ show: false, message: "" }), 3000);
  }
  // async function updateUser(id) {
  //   await api.put(`/usuarios/${id}`);
  // }

  return (
    <Container>
      <TopBackground />
      <Title>Lista de usuarios</Title>
      <ContainerUsers>
        {alert.show && (
          <Alert
            message={alert.message}
            onClose={() => setAlert({ show: false, message: "" })}
          />
        )}
        {users.map((user) => (
          <CardUsers key={user.key}>
            <AvatarUsers
              src={`https://avatar.iran.liara.run/public?username=${user.id}`}
            />
            <div>
              <h3>{user.name} </h3>
              <p>Idade: {user.age} </p>
              <p>E-mail: {user.email} </p>
            </div>

            <TrashIcon
              src={Trash}
              alt="icone-lixeira"
              onClick={() => deleteUsers(user.id)}
            />
          </CardUsers>
        ))}
      </ContainerUsers>
      <Button type="button" onClick={() => navigate("/")}>
        Voltar
      </Button>
    </Container>
  );
}

export default ListUsers;
