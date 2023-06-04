import styles from './Home.module.css'
import cards from './cards'

const Home = () => {
    return (
        <div>
            <h1>Paragraphs</h1>   
            {cards.map(card =>(
                <div key={card.id} className={styles.item}>
                    <div className={styles.image}
                        style={{
                            backgroundImage: `url(${card.image})`
                        }}
                    />
                    <div className={styles.info}>
                        <h2>{card.title}</h2>
                        <button>Read more</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home