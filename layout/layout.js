import styles from '../styles/Layout.module.css';
import { SessionProvider } from "next-auth/react";

export default function Layout( { children }){
    return (
        <SessionProvider>
        <div className="flex h-screen bg-blue-400">
            <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
                <div className={styles.imgStyle}>
                    <div className={styles.cartoonImg}></div>
                    
                </div>
                <div className="right flex flex-col justify-evenly">
                    <div className="text-center">
                        {children}
                    </div>
                </div>
            </div>
  
        </div>
        </SessionProvider>
    )
}