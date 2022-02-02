import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	text-align: center;
	height: 70px;
	max-width: 100%;
	background-color: var(--background-500);

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
