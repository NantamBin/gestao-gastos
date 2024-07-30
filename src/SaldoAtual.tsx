import React from 'react';
import { Transacao } from './types';
interface SaldoAtualProps {
    transacoes: Transacao[];
}
const SaldoAtual: React.FC<SaldoAtualProps> = ({ transacoes }) => {
    const calcularSaldo = () => {
        return transacoes.reduce((saldo, transacao) => {
            return transacao.tipo === 'receita' ? saldo + transacao.valor : saldo - transacao.valor;
        }, 0);
    };
    return (
        <div>
            <h2>Saldo Atual</h2>
            <p>R${calcularSaldo().toFixed(2)}</p>
        </div>
    );
};
export default SaldoAtual;