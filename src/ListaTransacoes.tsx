import React from 'react';
import { Transacao } from './types';

interface ListaTransacoesProps {
    transacoes: Transacao[];
    editarTransacao: (transacao: Transacao) => void;
    deletarTransacao: (id: number) => void;
}

const ListaTransacoes: React.FC<ListaTransacoesProps> =
    ({ transacoes, editarTransacao, deletarTransacao }) => {
        return (
            <div>
                <h2>Lista de Transações</h2>
                <ul>
                    {transacoes.map(transacao => (
                        <li key={transacao.id}>
                            <h3>{transacao.descricao}</h3>
                            <p>Tipo: {transacao.tipo}</p>
                            <p>Valor: R${transacao.valor.toFixed(2)}</p>
                            <button onClick={() => editarTransacao(transacao)}>Editar</button>
                            <button onClick={() => deletarTransacao(transacao.id)}>Deletar</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };
    
export default ListaTransacoes;