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
