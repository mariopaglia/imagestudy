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
	getImages: (query: string) => void;
}

export const ImagesContext = createContext<ImagesProviderProps>({} as ImagesProviderProps);

export const ImagesProvider: FunctionComponent = ({ children }) => {
	const [images, setImages] = useState<ImagesProps[]>([] as ImagesProps[]);

	useEffect(() => {
		getImages('nature');
	}, []);

	const getImages = (query: string) => {
		API.get('search', {
			params: {
				query,
			},
		}).then((response: AxiosResponse) => {
			setImages(response.data.photos);
		});
	};

	return (
		<ImagesContext.Provider
			value={{
				images,
				getImages,
			}}
		>
			{children}
		</ImagesContext.Provider>
	);
};
