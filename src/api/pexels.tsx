import axios from 'axios';

export default axios.create({
	baseURL: `https://api.pexels.com/v1/`,
	headers: {
		Authorization: '563492ad6f917000010000016630745d9dd7414ca6d3c7b5093de594',
	},
});