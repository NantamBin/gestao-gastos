export interface Transacao {
    id: number;
    tipo: 'receita' | 'despesa';
    descricao: string;
    valor: number;
    }