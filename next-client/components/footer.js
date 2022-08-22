import styles from "../styles/footer.module.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import ReceiptIcon from '@mui/icons-material/Receipt';

const Footer = ()=>{
    return(
        <footer className={styles.footer}>
            <a href="" target="_blank" rel="noreferrer"><GitHubIcon className={styles.icon}/><span>Github</span></a>
            <a href="https://bscscan.com/address/0x18e2247c16896167cCcdED0e866b6416BcEc7732" target="_blank" rel="noreferrer"><ReceiptIcon className={styles.icon}/><span>Contract Address</span></a>
            <a href="https://dynamic-solution.org" target="_blank" rel="noreferrer">Dynamic Solutions © 2022 | Powered by Esium Technology</a>
        </footer>
    )
}

export default Footer
