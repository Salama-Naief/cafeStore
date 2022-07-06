import React from 'react';
import Contact from './Contact';
import About from './About';
import Store from './Store';

export default function ContactItem(){

    return(
        <div className="bg-light container pt-5 pb-3 border border-secondary">
            <div className="row  mr-0 ml-0">
                <div className="col-md pt-4">
                     <Contact/>
                </div>
                <div className="col-md pt-4">
                    <About/>
                </div>
                <div className="col-md pt-4">
                    <Store/>
                </div>
            </div>
        </div>
    );

}