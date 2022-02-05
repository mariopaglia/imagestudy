import React, { useContext, useState } from 'react';
import { ImagesContext } from '../../contexts/ImagesContext';
import { Container, ImageCard, Pagination } from './styles';

const Main: React.FC = () => {
	const { images, getImages, query } = useContext(ImagesContext);

	let [currentPage, setCurrentPage] = useState(1);

	const handlePreviusPage = () => {
		if (currentPage >= 2) {
			setCurrentPage((currentPage -= 1));
			getImages(query, currentPage);
		}
	};

	const handleNextPage = () => {
		if (currentPage >= 1) {
			setCurrentPage((currentPage += 1));
			getImages(query, currentPage);
		}
	};

	return (
		<>
			<Container>
				{images.map((image) => (
					<ImageCard key={image.id}>
						<a href={image.src.original} target="_blank" rel="noreferrer">
							<img src={image.src.medium} alt={image.alt} />
						</a>
					</ImageCard>
				))}
			</Container>
			<Pagination>
				<button onClick={handlePreviusPage}>Anterior</button>
				<button onClick={handleNextPage}>Próxima</button>
			</Pagination>
		</>
	);
};

export default Main;
