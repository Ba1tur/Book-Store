import Categories from '@/components/Categories/Categories';
import CategoriesBooks from '@/components/CategoriesBooks/CategoriesBooks';
import Hero from '@/components/Hero/Hero';
import Trending from '@/components/Trending/Trending';
import React from 'react';

const Main = () => {
	return (
		<>
			<Hero/>
			<Trending/>
			<Categories/>
			<CategoriesBooks/>
			<CategoriesBooks/>
		</>
	);
};

export default Main;