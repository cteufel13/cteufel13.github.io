import React from 'react';
import { NavBarSmall } from '../ProjectsArchive';
import './projectdetail.css';


const Project_ThisWebsite = () => {
    return (
        <div>
            < NavBarSmall message="Back" />
            <div className='Content'>
                <div className='Header'>
                    <h1 id="Title">Personal Website</h1>
                    <h3 id="Subtitle"> September 2024 </h3>
                    <div id='Skills'>
                        <h4 className='Skill'> HTML</h4>
                        <h4 className='Skill'> CSS</h4>
                        <h4 className='Skill'> JS</h4>
                    </div>

                </div>
                <div className='MainContent'>
                    <p id="Description">
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam nec mi a massa feugiat scelerisque. Aliquam erat volutpat. Morbi vel semper mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse eget diam sagittis, gravida lorem non, molestie neque. Nunc quam purus, maximus at risus nec, auctor ultrices quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras at nibh at erat mattis lacinia at non turpis. Curabitur vehicula est nec suscipit egestas. Nam sit amet nibh volutpat, convallis nisi quis, varius nulla. Quisque ac tortor commodo, sollicitudin velit ut, vehicula nisi. Mauris eget ultricies tellus, et dictum diam. Sed eget neque ipsum.

                    Sed id elit ullamcorper est convallis luctus ac vitae lorem. Nam ante nibh, aliquam sed arcu vitae, pulvinar tincidunt mi. Pellentesque in nibh hendrerit, posuere nisl ac, faucibus lacus. Aenean ipsum justo, dictum at turpis sed, vehicula dignissim dolor. Sed eget erat orci. Integer ligula orci, gravida a sollicitudin ut, sodales et nibh. Curabitur bibendum ex eget quam bibendum, at feugiat urna consequat. Donec id imperdiet tortor, sit amet elementum mauris. Aliquam sed felis lorem. Sed at purus ultricies, convallis dolor nec, accumsan quam. Curabitur ut sodales leo. Quisque convallis eros nibh, nec tristique ex sodales quis. Ut lacus dolor, finibus ac scelerisque at, mollis vel elit. Nam ullamcorper orci tincidunt diam venenatis egestas. Maecenas vel ipsum id dolor rutrum commodo nec bibendum erat.
                    </p>
                </div>
            </div>
        </div>
    );
    }

export default Project_ThisWebsite;