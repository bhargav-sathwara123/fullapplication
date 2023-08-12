"use client"
import Link from 'next/link'
import React from 'react'
import styles from '@/app/page.module.scss';


const Navbar = () => {
	const menu = [
		{ id: 1, name: "Home", to: "/" },
		{ id: 2, name: "About", to: "/about" },
	]
	return (
		<>
			<ul className={styles.navbar}>
				{menu.map((item) => {
					return (
						<>
							<li key={item.id}>
								<Link href={item.to}>
									{item.name}
								</Link>
							</li>
						</>
					)
				})}
			</ul>
		</>
	)
}

export default Navbar