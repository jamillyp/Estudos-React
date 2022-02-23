import React, { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/svg/botao-fechar.svg'
import { Container } from './styles';

interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: newTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button 
                type='button' 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeImg} alt='Fechar modal' />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>
                <input
                    placeholder='Título'
                />
                <input
                    placeholder='Valor' type='number' 
                />
                <input
                    placeholder='Categoria' 
                />
                <button type='submit'>
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}