import { useState } from "react";
import { Input } from "./Input";
import { Button, Container, Select } from "./style";
import "boxicons";

export const Form = ({ handleAdd }) => {
  // Corrigido: desestruturando a prop handleAdd corretamente
  const [desc, setDesc] = useState("");
  const [valor, setValor] = useState("");
  const [tipoSelecionado, setTipoSelecionado] = useState("Entrada");

  const gerarId = () => Math.floor(Math.random() * 1000);

  const handleChange = (e) => {
    let valor = e.target.value.replace(/[^0-9,]/g, "");
    let partes = valor.split(",");
    if (partes.length > 2) {
      partes = [partes[0], partes.slice(1).join("")];
    }
    let parteInteira = partes[0].replace(/\D/g, "");
    let parteDecimal =
      partes.length > 1
        ? "," + partes[1].replace(/\D/g, "").substring(0, 2)
        : "";
    let valorFormatado = parteInteira + parteDecimal;
    setValor(valorFormatado);
  };

  const handleSave = () => {
    if (!desc || !valor) {
      alert("Informe a descrição e o valor da transação");
      return;
    } else if (valor < 1) {
      alert("O valor informado precisa ser maior que zero");
      return;
    }
    const transacao = {
      id: gerarId(),
      desc: desc,
      valor: valor,
      tipo: tipoSelecionado,
    };

    handleAdd(transacao); // Corrigido: chamando a função handleAdd diretamente

    setDesc("");
    setValor("");
  };
  return (
    <Container>
      <Input
        id="inputDesc"
        label="Descrição"
        value={desc}
        OnChange={(e) => setDesc(e.target.value)}
      />
      <Input
        id="inputValor"
        label="Valor"
        value={valor}
        OnChange={handleChange}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Select
          name="select-enter"
          id="select-enter"
          onChange={(e) => setTipoSelecionado(e.target.value)}
        >
          <option value="Entrada">Entrada</option>
          <option value="Saida">Saida</option>
        </Select>
        <box-icon
          className="select-icon"
          htmlFor="select-enter"
          type="solid"
          name="down-arrow"
          color="blueviolet"
        ></box-icon>
      </div>

      <Button onClick={handleSave}>Adicionar</Button>
    </Container>
  );
};
