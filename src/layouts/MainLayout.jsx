import React, { use, useState } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading';
import { AuthContext } from '../Provider/AuthProvider';

const MainLayout = () => {
    const [theme, setTheme] = useState(true)
    const navigation = useNavigation();
    const {loading} = use(AuthContext)
    if (navigation.state === 'Loading' || loading) {
        return <Loading></Loading>
    }
    return (
        <div className='' data-theme={theme ? 'light' : 'dark'}>
            
            <section className='md:sticky top-0 z-10'>
                <Navbar setTheme={setTheme} theme={theme}></Navbar>
            </section>
            <section>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;