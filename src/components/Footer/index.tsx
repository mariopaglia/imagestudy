import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
    return (
		<Container>
			<p>
				ImageStudy - Projeto em React desenvolvido por <a href="https://github.com/mariopaglia" target="_blank">Mário Paglia</a> utilizando a <a href="https://www.pexels.com/api/documentation" target="_blank">Pexels API</a>
			</p>
		</Container>
	);
}

export default Footer;