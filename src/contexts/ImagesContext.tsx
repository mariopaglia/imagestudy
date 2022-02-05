import { AxiosResponse } from 'axios';
import { createContext, FunctionComponent, useEffect, useState } from 'react';
import API from '../api/pexels';

interface ImagesProps {
	id: number;
	src: {
		original: string;
		medium: string;
	};
	alt: string;
}

interface ImagesProviderProps {
	images: ImagesProps[];
	getImages: (query: string, page: number) => void;
	query: string;
}

export const ImagesContext = createContext<ImagesProviderProps>({} as ImagesProviderProps);

export const ImagesProvider: FunctionComponent = ({ children }) => {
	const [images, setImages] = useState<ImagesProps[]>([] as ImagesProps[]);
	const [query, setQuery] = useState('');

	// Realiza a chamada das imagens da página inicial
	useEffect(() => {
		const randomDisplay = ['nature', 'soccer', 'cat', 'dog', 'florest', 'bird', 'universe', 'lion', 'weather', 'fantasy', 'space', 'summer', 'drink', 'fruit', 'car'];
		const random = Math.floor(Math.random() * randomDisplay.length);

		getImages(randomDisplay[random], 1);
	}, []);

	const getImages = (query: string, page: number) => {
		API.get('search', {
			params: {
				query,
				page,
				per_page: 15,
				size: 'small',
			},
		}).then((response: AxiosResponse) => {
			setImages(response.data.photos);
			setQuery(query);
		});
	};

	return (
		<ImagesContext.Provider
			value={{
				images,
				getImages,
				query,
			}}
		>
			{children}
		</ImagesContext.Provider>
	);
};
