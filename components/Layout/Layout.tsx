import Head from 'next/head';
import {useRouter} from "next/router";

import Navbar from '../Navbar/Navbar';

import styles from './layout.module.scss';

const Layout = ({children}) => {
    const router = useRouter();
    const isMainPage = router.asPath === '/';
    const pageName = router.asPath.split('/').filter((_, index) => index > 0).join(' ');

    return (
        <>
            <Head>
                <meta keywords="nextjs, react, seo"/>
                <title>{isMainPage ? 'Main page' : pageName}</title>
            </Head>
            <Navbar/>
            <div className={styles.container}>
                {children}
            </div>
        </>
    );
};

export default Layout;
