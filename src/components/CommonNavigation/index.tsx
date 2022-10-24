import React from 'react';
import MenuNavigation from '../MenuNavigation';
import TopNavigation from '../TopNavigation';

const CommonNavigation = () => {
    return  (
        <>
            <MenuNavigation />
            <div>
              <TopNavigation />
            </div>
        </>
    )
}

export default CommonNavigation;