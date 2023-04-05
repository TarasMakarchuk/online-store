import axios from 'axios';

export const axiosClassic = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});
