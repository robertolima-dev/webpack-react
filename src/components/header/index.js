import React, { Fragment, useState } from 'react';

const Page = (props) => {

    return (
        <Fragment>

            {props.pages === 'site' ?
                <h1>Sou o HEADER do site</h1>
            :null}

            {props.pages === 'user' ?
                <h1>Sou o HEADER do user</h1>
            :null}

            {props.pages === 'admin' ?
                <h1>Sou o HEADER do admin</h1>
            :null}

        </Fragment>
    );

}

export default Page;