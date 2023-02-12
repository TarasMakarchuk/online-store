import { FC, PropsWithChildren } from 'react';

import styles from './Layout.module.scss';
import { Header } from './header/Header';
import Meta from './meta/Meta';
import { ISeo } from './meta/meta.interface';

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
    return (
      <>
        <Meta {...rest} />
        <div className={styles.layout}>
          <main>
            <Header />
              <h1>Layout component</h1>
            <section className={styles.content}></section>
          </main>
        </div>
      </>
    );
};

export default Layout;
