import React from 'react';
import s from './Categories.module.scss'
import Image from 'next/image';
import CategoriesCard from '../CategoriesCard/CategoriesCard';
import Title from '../Title/Title';

const Categories = () => {
	return (
		<section className='container'>
			<div className={s.categories_section}>
				<Title img='/FOLDER_NOTCH_OPEN.svg' name='Categories'/>
				<div className={s.categories_section__block}>
					<CategoriesCard/>
					<CategoriesCard/>
					<CategoriesCard/>
					<CategoriesCard/>
					<CategoriesCard/>
					<CategoriesCard/>

				</div>
			</div>
		</section>
	);
};

export default Categories;