import { useState } from 'react';
import logoImg from '../../assets/svg/logo.svg';
import Modal from 'react-modal';

import { Container, Content } from './styles';
interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}
export function Header({onOpenNewTransactionModal} : HeaderProps) {
    
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" style={{width: '20%'}} />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    );
}