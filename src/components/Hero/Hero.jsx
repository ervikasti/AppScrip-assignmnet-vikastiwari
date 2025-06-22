import styles from './Hero.module.css'

const Hero=({details})=>{
    return(
        <section className={styles.hero_section}>
            <h2 className={styles.hero_title}>{details.title}</h2>
            <p className={styles.hero_para}>{details.para}</p>
        </section>
    )
}
export default Hero;