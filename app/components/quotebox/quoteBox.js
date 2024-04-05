import styles from '@/app/components/quotebox/styles.module.css';



 export default function QuoteBox(props){
    const data = props.data;



return (
    <div className={styles.quoteBox}>
        <q>{data.text}</q>
        <p>-{data.author}</p>
    </div>
)
 }