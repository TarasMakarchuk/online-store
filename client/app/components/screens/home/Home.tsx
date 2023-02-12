import { FC } from 'react';
import Layout from '@/layout/Layout';

const Home: FC = () => {
    return (
        <Layout title="Home" description={''} type={''} image={''}>
            <div className='flex h-screen w-full items-center justify-center'>
                <h1 className='text-center text-7x1 font-bold text-red'>
                    Online store
                </h1>
            </div>
        </Layout>
    );
};

export default Home;