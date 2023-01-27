import React, { useContext, useState } from 'react';
import { ImagesContext } from '../../contexts/ImagesContext';
import { Container, ImageCard, Pagination } from './styles';

const Main: React.FC = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const { images, getImages, query } = useContext(ImagesContext);

	let page = currentPage;

	const handlePreviusPage = () => {
		if (page >= 2) {
			setCurrentPage((page -= 1));
			getImages(query, page);
		}
	};

	const handleNextPage = () => {
		if (page >= 1) {
			setCurrentPage((page += 1));
			getImages(query, page);
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
