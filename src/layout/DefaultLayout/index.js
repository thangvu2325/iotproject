import Header from '~/layout/components/Header';
import Sidebar from '../components/Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import ModalBox from '~/components/ModalBox';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [checked, setChecked] = useState(false);
    const callbackFunction = (childData) => {
        setChecked(childData);
    };
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
            <div className={cx('wrapper')}>
                <ModalBox />
                <Sidebar isTabletOrMobile = {isTabletOrMobile} checked={checked} />
                <div className={cx('wrapper-content')}>
                    <Header isTabletOrMobile = {isTabletOrMobile} parentCallback={callbackFunction} />
                    <div className={cx('container')}>
                        <div className={cx('content')}>{children}</div>
                    </div>
                </div>
            </div>
    );
}

export default DefaultLayout;
