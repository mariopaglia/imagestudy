import React, { useContext } from 'react';
import { ImagesContext } from '../../contexts/ImagesContext';
import { Container, ImageCard } from './styles';

const Main: React.FC = () => {
	const { images } = useContext(ImagesContext);

	return (
		<Container>
			{images.map((image) => (
				<ImageCard key={image.id}>
					<a href={image.src.original} target="_blank" rel="noreferrer">
						<img src={image.src.medium} alt={image.alt} />
					</a>
				</ImageCard>
			))}
		</Container>
	);
};

export default Main;
