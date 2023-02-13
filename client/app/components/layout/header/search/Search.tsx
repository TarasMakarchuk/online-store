import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FC, useState } from 'react';
import styles from './Search.module.scss';

const Search: FC = () => {
	const [searchValue, setSearchValue] = useState('');

	return (
		<div className={styles.search}>
			<div>
				<InputGroup>
					<InputRightElement
						pointerEvents="none"
						children={<SearchIcon color='gray.500' />}
					/>
					<Input
						variant='flushed'
						type='search'
						onChange={e => setSearchValue(e.target.value)}
						value={searchValue}
						placeholder='SEARCH'
					/>
				</InputGroup>
			</div>
		</div>
	);
};

export default Search;
