import React from 'react';

const Lang = ({ project }) => {
    return (
        <div>
            {
                project?.html && <span style={{ background: 'linear-gradient(45deg,#ff193f,#ff35b4)', color: '#fff' }} className='title-card'>HTML5</span>
            }
            {
                project?.css && <span style={{ background: 'linear-gradient(45deg,#5a00dd,#684efb', color: '#fff' }} className='title-card'>CSS3</span>
            }
            {
                project?.react && <span style={{ background: 'linear-gradient(45deg,#5e51fc,#7593f5', color: '#fff' }} className='title-card'>React</span>
            }
            {
                project?.react && <span style={{ background: 'linear-gradient(45deg,#ff6480,#f22e63', color: '#fff' }} className='title-card'>React Router</span>
            }
            {
                project?.nextjs && <span style={{ background: 'linear-gradient(45deg,#4f59ff,#15dbff', color: '#fff' }} className='title-card'>Next.Js</span>
            }
            {
                project?.node && <span style={{ background: 'linear-gradient(45deg,#5aaa43,#2bde8c', color: '#fff' }} className='title-card'>Node</span>
            }
            {
                project?.express && <span style={{ background: 'linear-gradient(45deg,#f22e63,#ff205d', color: '#fff' }} className='title-card'>Express</span>
            }
            {
                project?.firebase && <span style={{ background: 'linear-gradient(45deg,#ff9c35,#ffd019', color: '#fff' }} className='title-card'>Firebase</span>
            }
            {
                project?.mongodb && <span style={{ background: 'linear-gradient(45deg,#2bde8c,#86f244', color: '#fff' }} className='title-card'>MongoDb</span>
            }
            {
                project?.api && <span style={{ background: 'linear-gradient(45deg,#4f59ff,#4289ff', color: '#fff' }} className='title-card'>Rest API</span>
            }
            {
                project?.tailwind && <span style={{ background: 'linear-gradient(45deg,#4289ff,#07f8c3', color: '#fff' }} className='title-card'>Tailwind</span>
            }
            {
                project?.bootstrap && <span style={{ background: 'linear-gradient(45deg,#2eb1ea,#2eb1ea', color: '#fff' }} className='title-card'>Bootstrap</span>
            }
            {
                project?.sass && <span style={{ background: 'linear-gradient(45deg,#cf649a,#f44fa1', color: '#fff' }} className='title-card'>SASS</span>
            }
            {
                project?.materialui && <span style={{ background: 'linear-gradient(45deg,#4289ff,#07f8c3', color: '#fff' }} className='title-card'>Material UI</span>
            }
            {
                project?.reactboots && <span style={{ background: 'linear-gradient(45deg,#2eb1ea,#2eb1ea', color: '#fff' }} className='title-card'>React Bootstrap</span>
            }
        </div>
    );
};

export default Lang;