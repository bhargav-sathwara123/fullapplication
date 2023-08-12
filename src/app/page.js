
"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './page.module.scss'; // Replace with your module CSS
import Image from 'next/image';
import mypic from '../images/Pngwing.png'


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const sectionRefs = useRef([]);

	const firstDiv = useRef(null);
	const secondDiv = useRef(null);
	const thirdDiv = useRef(null);
	const bigText = useRef(null);
	const contryName = useRef(null);
	const BigImage = useRef(null);
	const secondBigText = useRef(null);
	const thirdBigText = useRef(null);
	useEffect(() => {
		// gsap.fromTo(
		// 	imageRef.current,
		// 	{width:"100%", opacity: 1 },
		// 	{
		// 		width:"10%",
		// 		opacity: 0,
		// 		scrollTrigger: {
		// 			trigger: imageRef.current,
		// 			start: 'top 10%', // Adjust this value based on when you want the animation to start
		// 			end: 'bottom 50%', // Adjust this value based on when you want the animation to end
		// 			toggleActions: 'play none none reverse',
		// 			scrub: true,
		// 		},
		// 	}
		// );
		// gsap.fromTo(
		// 	firstDiv.current,
		// 	{ position: "relative", right: "0", opacity: 1 },
		// 	{
		// 		position: "relative",
		// 		right: "100%",
		// 		opacity: 0,
		// 		scrollTrigger: {
		// 			trigger: firstDiv.current,
		// 			start: 'top 0%', // Adjust this value based on when you want the animation to start
		// 			end: 'bottom 50%', // Adjust this value based on when you want the animation to end
		// 			toggleActions: 'play none none reverse',
		// 			scrub: true,
		// 		},
		// 	}
		// );
		// sectionRefs.current.forEach((section, index) => {
		// 	gsap.fromTo(
		// 		section,
		// 		{
		// 			opacity: 0,
		// 			y: 100,
		// 		},
		// 		{
		// 			opacity: 1,
		// 			y: 0,
		// 			duration: 1,
		// 			scrollTrigger: {
		// 				trigger: section,
		// 				start: 'top 80%', // Adjust this value based on when you want the animation to start
		// 				end: 'bottom 50%', // Adjust this value based on when you want the animation to end
		// 				toggleActions: 'play none none reverse',
		// 			},
		// 		}
		// 	);
		// });
		gsap.fromTo(
			bigText.current,
			{ scale: 5.5 },
			{
				scale: 0,
				scrollTrigger: {
					trigger: bigText.current,
					start: 'top 30%', // Adjust this value based on when you want the animation to start
					end: 'bottom 30%', // Adjust this value based on when you want the animation to end
					toggleActions: 'play none none reverse',
					scrub: 0.4,
				},

			}
		)
		

		// gsap.fromTo(
		// 	secondDiv.current,
		// 	{
		// 		opacity: 0,
		// 		x: -500,
		// 	},
		// 	{
		// 		opacity: 1,
		// 		x: 0,
		// 		duration: 1,
		// 		scrollTrigger: {
		// 			trigger: secondDiv.current,
		// 			start: 'top 90%', // Adjust this value based on when you want the animation to start
		// 			end: 'bottom 60%', // Adjust this value based on when you want the animation to end
		// 			toggleActions: 'play none none reverse',
		// 			scrub: true,
		// 		},
		// 	}
		// );
		gsap.fromTo(
			secondBigText.current,
			{ scale: 0.2 },
			{
				scale: 2.5,
				scrollTrigger: {
					trigger: secondBigText.current,
					start: 'top 60%', // Adjust this value based on when you want the animation to start
					end: 'bottom 30%', // Adjust this value based on when you want the animation to end
					toggleActions: 'play none none reverse',
					scrub: 0.4,
				},

			}
		)
		
		gsap.fromTo(
			thirdBigText.current,
			{ scale: 0.5 },
			{
				scale: 2.5,
				scrollTrigger: {
					trigger: thirdBigText.current,
					start: 'top 80%', // Adjust this value based on when you want the animation to start
					end: 'bottom 50%', // Adjust this value based on when you want the animation to end
					toggleActions: 'play none none reverse',
					scrub: 0.4,
				},

			}
		)
		gsap.fromTo(
			BigImage.current,
			{ rotate:"0"},
			{
				rotate:"360",
				scrollTrigger: {
					trigger: BigImage.current,
					start: 'top 30%', // Adjust this value based on when you want the animation to start
					end: 'bottom 30%', // Adjust this value based on when you want the animation to end
					toggleActions: 'play none none reverse',
					scrub: 0.4,
				},

			}
		)
		gsap.fromTo(
			thirdDiv.current,
			{
				opacity: 0,
				y: 100,
			},
			{
				opacity: 1,
				y: 50,
				duration: 1,
				scrollTrigger: {
					trigger: thirdDiv.current,
					start: 'top 80%', // Adjust this value based on when you want the animation to start
					end: 'bottom 50%', // Adjust this value based on when you want the animation to end
					toggleActions: 'play none none reverse',
				},
			}
		);
	}, []);

	return (
		<>
			<div className={styles.firstfullDiv} ref={firstDiv}>
				<h1 ref={bigText}>HAPPY</h1>
			</div>
			<div className={styles.secondfullDiv} > {/*ref={secondDiv}*/}
				<Image src={mypic}
				ref={BigImage}
					alt="Picture of the author"
				/>
				<h1 ref={secondBigText}>Independence day</h1>
			</div>
			<div className={styles.thirdfullDiv} ref={thirdDiv}>
			<h1 ref={thirdBigText}>INDIA</h1>
			</div>
			{/* <div className={styles.sections}>

				<section ref={(el) => (sectionRefs.current[0] = el)}>
					<h2>1</h2>
				</section>
				<section ref={(el) => (sectionRefs.current[1] = el)}>
					<h2>2</h2>
				</section>
				<section ref={(el) => (sectionRefs.current[2] = el)}>
					<h2>3</h2>
				</section>
			</div> */}
		</>
	);
}
