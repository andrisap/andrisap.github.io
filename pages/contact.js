import React from 'react';
import ContactHeader from '@components/contact/ContactHeader';
import ContainerBlock from '@components/ContainerBlock';
import ContactMap from '@components/contact/Map';
import ContactForm from '@components/contact/Form';
import ContainerContact from '@components/contact/ContainerContact';

// export async function getServerSideProps() {
//     // console.log("rendering now");
//     return { props: {} };
// }

const contact = () => {
    return (
        <ContainerBlock
            title="Contact"
            description="Get in Touch with us Unicam Studio"
        >
            <ContactHeader />
            <ContactMap />
            <ContactForm />
        </ContainerBlock>
    )
}

export default contact;