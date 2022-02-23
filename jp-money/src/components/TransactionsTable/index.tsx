import React, { useEffect } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

export function TransactionsTable() {
    useEffect(() => {
        api('transactions') 
        .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className='deposito'>R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>18/02/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className='retirada'>R$1.000</td>
                        <td>Casa</td>
                        <td>20/01/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}
