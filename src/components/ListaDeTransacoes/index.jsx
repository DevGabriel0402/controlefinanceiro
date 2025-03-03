import React from "react";
import {
  ListContainer,
  ListHeader,
  List,
  ListItem,
  EmptyMessage,
} from "./style";
export const ListaDeTransacoes = ({ transactions, onDelete }) => {
  return (
    <ListContainer>
      <ListHeader>
        <h3>Histórico de Transações</h3>
      </ListHeader>

      {transactions.length === 0 ? (
        <EmptyMessage>Nenhuma transação registrada</EmptyMessage>
      ) : (
        <List>
          {transactions.map((transaction) => (
            <ListItem key={transaction.id} tipo={transaction.tipo}>
              <div className="info">
                <span className="desc">{transaction.desc}</span>
                <span className="valor">
                  {transaction.tipo === "Saida" ? "- " : ""}
                  R$ {transaction.valor}
                </span>
              </div>
              <div className="tipo">{transaction.tipo}</div>
              <button
                className="delete-btn"
                onClick={() => onDelete(transaction.id)}
              >
                X
              </button>
            </ListItem>
          ))}
        </List>
      )}
    </ListContainer>
  );
};
