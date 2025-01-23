import { Form, Input, ContainerInputs, InputLabel } from "./styles";
import Container from "../../components/Container";
import { useRef, useState } from "react"; // biblioteca do react para buscar dados digitados no input
import api from "../../services/api";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import Alert from "../../components/Dialog";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();
  const [alert, setAlert] = useState({ show: false, message: "" });

  const navigate = useNavigate();

  async function registerNewUser() {
    const data = await api.post("/usuarios", {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value,
    });
    if (data.status === 201) {
      inputName.current.value = "";
      inputAge.current.value = "";
      inputEmail.current.value = "";
      setAlert({ show: true, message: "usuario Criado com sucesso" });
      setTimeout(() => setAlert({ show: false, message: "" }), 3000);
    } else {
      setAlert({ show: true, message: "Erro ao Criar Usuario" });
      setTimeout(() => setAlert({ show: false, message: "" }), 3000);
    }
  }
  return (
    <Container>
      <TopBackground />
      {alert.show && (
        <Alert
          message={alert.message}
          onClose={() => setAlert({ show: false, message: "" })}
        />
      )}

      <Form>
        <Title>Cadastrar Usuario</Title>
        <ContainerInputs>
          <div>
            <InputLabel>
              Nome <span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuario" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade <span> *</span>
            </InputLabel>
            <Input
              type="number"
              placeholder="Idade do usuario"
              ref={inputAge}
            />
          </div>
        </ContainerInputs>
        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail <span> *</span>
          </InputLabel>
          <Input
            type="email"
            placeholder="E-mail do usuario"
            ref={inputEmail}
          />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">
          Cadastrar Usuario
        </Button>
        <Button type="button" onClick={() => navigate("/lista-de-usuarios")}>
          Lista de usuarios
        </Button>
      </Form>
    </Container>
  );
}

export default Home;
