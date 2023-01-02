import React, { Fragment } from 'react';
import MainHeader from '../MainHeader/MainHeader';
import ILayoutPropModel from './ILayoutPropModel';

const Layout = (props: ILayoutPropModel) => {
    return (
        <Fragment>
          <MainHeader />
          <main>{props.children}</main>
        </Fragment>
      );
};

export default Layout;