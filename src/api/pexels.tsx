import axios from 'axios';

export default axios.create({
	baseURL: `https://api.pexels.com/v1/`,
	headers: {
		Authorization: `${process.env.REACT_APP_PEXELS_API_KEY}`,
	},
});
