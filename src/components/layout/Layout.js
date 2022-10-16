import React from 'react';
import Routers from '../../routes/Routers';
import Header from '../header/Header';
import Card from '../../page/card/Card';
import {useSelector} from 'react-redux'

function Layout(props) {
    const visible = useSelector(state=>state.visibleSlice.visible)
    console.log("visible:",visible);
    return (
        <div>
            <Header />
            {visible && <Card />}
            <div>
                <Routers />
            </div>

        </div>
    );
}

export default Layout;