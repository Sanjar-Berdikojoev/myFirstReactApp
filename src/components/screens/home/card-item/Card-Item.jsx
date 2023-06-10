import styles from '../Home.module.css'

const CardItem = ({card}) => {
    return (
        
    <div key={card.id} className={styles.item}>
        <div className={styles.image}
            style={{
                backgroundImage: `url(${card.image})`
            }}
        />
        <div className={styles.info}>
            <h2>{card.title}</h2>
            <p>Experience {card.experience}</p>
            <button>Read more</button>
        </div>
    </div>)
}

export default CardItem