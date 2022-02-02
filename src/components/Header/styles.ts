import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

export const Container = styled.div`
	height: 70px;
	width: 100%;
	background-color: var(--background-500);
	display: flex;
	align-items: center;
	justify-content: space-around;

	@media (max-width: 768px) {
		flex-direction: column;
		height: 130px;
		max-height: 100%;
	}
`;

export const Logo = styled.h1`
	h1 {
		display: flex;
		align-items: center;
		font-size: 16px;
	}

	a {
		text-decoration: none;

		&:visited {
			color: var(--text);
		}
	}

	span {
		color: var(--pink);
	}
`;

export const SearchForm = styled.form`
	display: flex;
	align-items: center;
	color: var(--text);
	width: 40%;
	padding: 10px;
	border-radius: 12px;
	background: var(--background-900);

	button {
		display: none;
	}
`;

export const SearchInput = styled.input`
	width: 100%;
	height: 100%;
	color: var(--text);
	background: var(--background-900);
	margin-left: 10px;
`;

export const SearchIcon = styled(MdSearch)`
	height: 24px;
	width: 24px;
	color: var(--text);
`;

export const Login = styled.img`
	height: 36px;
	width: 36px;
	border-radius: 50%;
	color: var(--text);
	cursor: pointer;

	@media (max-width: 768px) {
		display: none;
	}
`;
