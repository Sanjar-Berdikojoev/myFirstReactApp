import { useState } from "react"
import styles from "./Create-Card-Form.module.css"

const CreateCardForm = ({setCards}) => {

    const clearData = { 
        title: "",
        experience: "",
        image: ""
    }

    const [data, setData] = useState(clearData)

    const createCard = (e) => {
        e.preventDefault();
        setCards(prev => [{id: prev.length + 1, ...data}, ...prev]);
        setData(clearData);
    }
    
    return (
    <form className={styles.form}>
        <input 
                placeholder="Name" 
                onChange={e => setData(prev => ({...prev, title: e.target.value}))} 
                value={data.title}
        />
        <input 
                placeholder="Experience"
                onChange={e => setData(prev => ({...prev, experience: e.target.value}))} 
                value={data.experience}
        />
        <input 
                placeholder="Image"
                onChange={e => setData(prev => ({...prev, image: e.target.value}))} 
                value={data.image}
        />
        <button onClick={e => createCard(e)}>Create Card</button>
    </form>
    )
}

export default CreateCardForm