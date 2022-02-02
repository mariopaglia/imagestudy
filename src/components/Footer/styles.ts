import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	word-wrap: break-word;
	flex-wrap: wrap;
	text-align: center;
	height: 70px;
	max-width: 100vw;
	background-color: var(--background-500);

	@media (max-width: 768px) {
		padding: 0 20px;
		font-size: 14px;
	}
`;
