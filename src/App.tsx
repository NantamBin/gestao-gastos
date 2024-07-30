import React, { useState } from 'react';
import ListaTransacoes from './ListaTransacoes';
import FormularioTransacao from './FormularioTransacao';
import SaldoAtual from './SaldoAtual';
import { Transacao } from './types';

const App: React.FC = () => {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [transacaoEditando, setTransacaoEditando] = useState<Transacao | null>(null);
  const adicionarOuEditarTransacao = (transacao: Transacao) => {
    if (transacao.id === 0) {
      transacao.id = Math.random();
      setTransacoes(prevTransacoes => [...prevTransacoes, transacao]);
    } else {
      setTransacoes(prevTransacoes => prevTransacoes.map
        (t => (t.id === transacao.id ? transacao : t)));
    }
    setTransacaoEditando(null);
  };
  const editarTransacao = (transacao: Transacao) => {
    setTransacaoEditando(transacao);
  };
  const deletarTransacao = (id: number) => {
    setTransacoes(prevTransacoes => prevTransacoes.filter(transacao => transacao.id !== id));
  };


  const cancelarEdicao = () => {
    setTransacaoEditando(null);
  };
  return (
    <div>
      <h1>Gestão de Gastos</h1>
      <SaldoAtual transacoes={transacoes} />
      <FormularioTransacao
        transacaoAtual={transacaoEditando}
        salvarTransacao={adicionarOuEditarTransacao}
        cancelarEdicao={cancelarEdicao}
      />
      <ListaTransacoes
        transacoes={transacoes}
        editarTransacao={editarTransacao}
        deletarTransacao={deletarTransacao}
      />
    </div>
  );
};
export default App;