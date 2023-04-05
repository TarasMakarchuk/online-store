import React from 'react';
import { Spinner } from '@chakra-ui/react';
import { COLORS } from '@/config/color.config';

const Loader = () => {
	return (
		<Spinner
			thickness='4px'
			speed='1s'
			emptyColor='gray.200'
			color={COLORS.green}
			size='xl'
			display='block'
			margin='0 auto'
			marginTop={20}
		/>
	);
};

export default Loader;
