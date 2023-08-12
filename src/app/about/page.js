"use client"
import React, { useEffect, useRef } from 'react'
import styles from "./about.module.scss"
import Image from 'next/image'
import boat from "../../images/planImage.jpg"
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const page = () => {
	const headingRef = useRef();
	const firstSectionRef = useRef();
	const secondSectionRef = useRef();
	const thirdSectionRef = useRef();
	useEffect(() => {
		gsap.fromTo(
			headingRef.current,
			{ fontSize: "140px" },
			{
				fontSize: "60px",
				scrollTrigger: {
					trigger: headingRef.current,
					start: 'top 20%', // Adjust this value based on when you want the animation to start
					end: 'bottom 30%', // Adjust this value based on when you want the animation to end
					toggleActions: 'play none none reverse',
					scrub: true,
				},

			}
		)
		gsap.fromTo(
			firstSectionRef.current,
			{ right: "0" },
			{
				right: "1700px",
				scrollTrigger: {
					trigger: firstSectionRef.current,
					start: 'top -20%', // Adjust this value based on when you want the animation to start
					end: 'bottom 20%', // Adjust this value based on when you want the animation to end
					toggleActions: 'play none none reverse',
					scrub: 3.5,
				},

			}
		)
		gsap.fromTo(
			secondSectionRef.current,
			{ right: "0" },
			{
				
				right: "1700px",
				scrollTrigger: {
					trigger: secondSectionRef.current,
					start: 'top 10%', // Adjust this value based on when you want the animation to start
					end: 'bottom 30%', // Adjust this value based on when you want the animation to end
					toggleActions: 'play none none reverse',
					scrub: 2.5,
				},

			}
		)
		gsap.fromTo(
			thirdSectionRef.current,
			{ right: "0" },
			{
				
				right: "1700px",
				scrollTrigger: {
					trigger: thirdSectionRef.current,
					start: 'top 10%', // Adjust this value based on when you want the animation to start
					end: 'bottom 0%', // Adjust this value based on when you want the animation to end
					toggleActions: 'play none none reverse',
					scrub: 2.5,
				},

			}
		)
	})

	return (
		<div className={styles.main}>
			<section className={styles.fistDiv} ref={firstSectionRef}>
				<div >
					<h1 ref={headingRef}>
						this is boat flying
					</h1>
				</div>

			</section>
			<section className={styles.sescondDiv} ref={secondSectionRef}>
				<div >
					<h1 >
						this is boat flying
					</h1>
				</div>

			</section>
			<section className={styles.thirdDiv} ref={thirdSectionRef}>
				<div >
					<h1 >
						this is boat flying
					</h1>
				</div>

			</section>
		</div>
	)
}

export default page