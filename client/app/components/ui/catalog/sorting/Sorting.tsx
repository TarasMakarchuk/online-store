import { Dispatch, FC, SetStateAction } from 'react';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { sortingData } from '@/ui/catalog/sorting/sorting.data';
import { EnumSorting } from '@/ui/catalog/sorting/sorting.interface';

interface ISorting {
	sortType: EnumSorting;
	setSortType: Dispatch<SetStateAction<EnumSorting>>;
}

export const Sorting: FC<ISorting> = ({ setSortType, sortType }) => {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
				{ sortingData.find(sort => sort.value === sortType)?.label }
			</MenuButton>
			<MenuList>
				{ sortingData.map(sort =>
				<MenuItem
					key={sort.value}
					onClick={() => setSortType(sort.value)}
				>
					{ sort.label }
				</MenuItem>
				)}
			</MenuList>
		</Menu>
	);
};
