import logoImg from '../../assets/svg/logo.svg';

import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" style={{width: '20%'}} />
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    );
}