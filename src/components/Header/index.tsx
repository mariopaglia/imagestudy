import React, { FormEvent, useContext, useState } from 'react';
import { ImagesContext } from '../../contexts/ImagesContext';

import { Container, Logo, SearchForm, SearchInput, Login, SearchIcon } from './styles';

const Header: React.FC = () => {
	const { getImages } = useContext(ImagesContext);

	const [imageValue, setImageValue] = useState('');

	const handleKeyPress = (event: FormEvent) => {
		event.preventDefault();
		getImages(imageValue, 1);
	};

	return (
		<>
			<Container>
				<Logo>
					<a href="/">
						ImageStudy<span>.</span>
					</a>
				</Logo>

				<SearchForm onSubmit={handleKeyPress}>
					<SearchIcon />
					<SearchInput onChange={(event) => setImageValue(event.target.value)} placeholder="Que imagem você procura?" />
				</SearchForm>

				<Login src="https://github.com/mariopaglia.png" />
			</Container>
		</>
	);
};

export default Header;
