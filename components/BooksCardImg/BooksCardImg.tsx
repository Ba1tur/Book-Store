import React from 'react';
import s from './BooksCardImg.module.scss'
import Image from 'next/image';

const BooksCardImg : React.FC = () => {
	return (
		<div className={s.books_card}>
			<Image src='/COVER_BOOK.png' alt='cover_book.png' width={200} height={289} />
		</div>
	);
};

export default BooksCardImg;