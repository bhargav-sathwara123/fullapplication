"use client"
import React, { useEffect, useLayoutEffect, useRef } from 'react'
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
	const component = useRef();
	const slider = useRef();
	useEffect(() => {
		gsap.fromTo(
			headingRef.current,
			{ rotate: 0, transition: "ease-in-out" },
			{

				rotate: 180,
				scrollTrigger: {
					trigger: headingRef.current,
					start: 'top 25%', // Adjust this value based on when you want the animation to start
					end: 'bottom 70%', // Adjust this value based on when you want the animation to end
					toggleActions: 'play none none reverse',
					scrub: true,
				},

			}
		)
		gsap.fromTo(
			firstSectionRef.current,
			{ rotate: 360, scale: (1) },
			{
				rotate: 0,
				scale: (0.2),
				borderRadius: "90px",
				scrollTrigger: {
					trigger: firstSectionRef.current,
					start: 'top 0%', // Adjust this value based on when you want the animation to start
					end: 'bottom 0%', // Adjust this value based on when you want the animation to end
					toggleActions: 'play none none reverse',
					scrub: 1.5,
				},

			}
		)
		gsap.fromTo(
			secondSectionRef.current,
			{ scale: (0.5) },
			{

				scale: (1),
				scrollTrigger: {
					trigger: secondSectionRef.current,
					start: 'top 60%', // Adjust this value based on when you want the animation to start
					end: 'bottom 90%', // Adjust this value based on when you want the animation to end
					toggleActions: 'play none none reverse',
					scrub: 1.5,
				},

			}
		)
		gsap.fromTo(
			thirdSectionRef.current,
			{ scale: (1) },
			{

				scale: (0.3),
				scrollTrigger: {
					trigger: thirdSectionRef.current,
					start: 'top 10%', // Adjust this value based on when you want the animation to start
					end: 'bottom 0%', // Adjust this value based on when you want the animation to end
					toggleActions: 'play none none reverse',
					scrub: 1.5,
				},

			}
		)
	})
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			let panels = gsap.utils.toArray(".panel");
			gsap.to(panels, {
				xPercent: -100 * (panels.length - 1),
				ease: "none",
				scrollTrigger: {
					trigger: slider.current,
					pin: true,
					scrub: 1,
					snap: 1 / (panels.length - 1),
					end: () => "+=" + slider.current.offsetWidth,
					markers: true
				}
			});
		}, component);
		return () => ctx.revert();
	});

	return (
		<div className={styles.main} ref={component}>
			{/* <section className={styles.fistDiv} ref={firstSectionRef}>
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

 */}

			<div >

				<div ref={slider} className="container">
					<div className={styles.description}> {/*panel blue*/}
						<div>
							SCROLL DOWN
							<div className="scroll-down">
								<div className="arrow"></div>
							</div>
						</div>
					</div>
					<div className={styles.red}>ONE</div>
					<div className={styles.orange}>TWO</div>
					<div className={styles.purple}>THREE</div>
				</div>
			</div>
		</div>
	)
}

export default page