import styled from 'styled-components';

export const Container = styled.div`
	min-height: calc(100vh - 140px);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	padding: 20px 0;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const ImageCard = styled.div`
	> a,
	img {
		margin: 10px;
		border-radius: 5px;
	}

	@media (max-width: 768px) {
		> a,
		img {
			width: 85%;
		}
	}
`;

export const Pagination = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 30px;

	button {
		cursor: pointer;
		padding: 20px;
		font-size: 1rem;
		width: 10rem;
		border-radius: 10px;
		background: transparent;
		color: var(--text);
		border: 1px solid var(--pink);

		transition: background-color .6s;
	
		&:hover {
			background-color: var(--pink);
		}
	}


	button + button {
		margin-left: 20px;
	}
`;