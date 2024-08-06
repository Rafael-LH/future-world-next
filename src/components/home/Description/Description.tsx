"use client"
import Image from "next/image"
import classNames from "classnames/bind"
import { useState } from "react"
import styles from './Description.module.sass';
import { PLACEHOLDER_IMAGE } from "./utils/constants"

export const Description = () => {
  const [hasBorder, setHasBorder] = useState(false)

  const handleClick = () => setHasBorder(prev => !prev)

  const context = classNames.bind(styles)

  const buttonStyles = context('Description__button', {
    'Description__button--border': hasBorder,
  })

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image 
            src="/images/description.jpeg"
            alt="Products market place"
            fill
            // priority={false} // Deactivate Lazy loading don't recomment
            quality={90}
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quis, enim dolores, rerum aperiam voluptates officia ea nisi vel incidunt alias unde delectus. Doloribus eveniet voluptatibus blanditiis, ullam numquam iusto!
        </p>
      </div>
    </section>
  )
}
