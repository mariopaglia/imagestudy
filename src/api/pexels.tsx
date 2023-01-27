import axios from 'axios';

export default axios.create({
	baseURL: `https://api.pexels.com/v1/`,
	headers: {
		Authorization: process.env.PEXELS_API_KEY as string,
	},
});
