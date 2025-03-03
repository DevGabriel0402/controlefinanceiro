import { useState, useEffect } from "react";
import { Resume } from "./components/Cards";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { ListaDeTransacoes } from "./components/ListaDeTransacoes";
import { AppContainer, Container, ContainerForm } from "./styles/style";

function App() {
  const data = localStorage.getItem("transctions");
  const [listaDeTransacoes, setListaDeTransacoes] = useState(
    data ? JSON.parse(data) : []
  );
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const valorSaida = listaDeTransacoes
      .filter((item) => item.tipo === "Saida")
      .map((transaction) => Number(transaction.valor.replace(",", ".")));

    const valorEntrada = listaDeTransacoes
      .filter((item) => item.tipo === "Entrada")
      .map((transaction) => Number(transaction.valor.replace(",", ".")));

    const saida = valorSaida.reduce((acc, item) => acc + item, 0).toFixed(2);
    const entrada = valorEntrada
      .reduce((acc, item) => acc + item, 0)
      .toFixed(2);
    const total = Math.abs(entrada - saida).toFixed(2);

    setEntrada(`R$ ${entrada}`);
    setSaida(`R$ ${saida}`);
    setTotal(`${Number(entrada) < Number(saida) ? "-" : ""} R$ ${total}`);
  }, [listaDeTransacoes]);

  const handleAdd = (transaction) => {
    const novaListaDeTransacoes = [...listaDeTransacoes, transaction];
    setListaDeTransacoes(novaListaDeTransacoes);

    localStorage.setItem("transctions", JSON.stringify(novaListaDeTransacoes));
  };

  const handleDelete = (id) => {
    const novaListaDeTransacoes = listaDeTransacoes.filter(
      (transaction) => transaction.id !== id
    );
    setListaDeTransacoes(novaListaDeTransacoes);

    localStorage.setItem("transctions", JSON.stringify(novaListaDeTransacoes));
  };

  const handleInstagram = () => {
    const url = "https://www.instagram.com/eu.gabrielvieira/";
    window.open(url, "_blank");
  };

  return (
    <AppContainer>
      <Container>
        <Header />
        <Resume saida={saida} entrada={entrada} total={total} />
        <ContainerForm>
          <Form handleAdd={handleAdd} />
        </ContainerForm>
        <ListaDeTransacoes
          transactions={listaDeTransacoes}
          onDelete={handleDelete}
        />
      </Container>
      <footer>
        Desenvolvido por <span onClick={handleInstagram}>Gabriel</span>
      </footer>
    </AppContainer>
  );
}

export default App;
