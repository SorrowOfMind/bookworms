import React, {useState} from 'react';
import dot1 from '../../assets/dot1.png';
import dot2 from '../../assets/dot2.png';
import dot3 from '../../assets/dot3.png';


const WelcomeBox = () => {
    const [dot, setDot] = useState(1);
    const boxTexts = [
        {
            title: 'Welcome to Bookworms',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid iure molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid iure molestiae.'
        },
        {
            title: 'Some other title',
            text: 'Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor.'
        },
        {
            title: 'Yet some other title',
            text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? '
        },
    ]

    const changeDot = num => setDot(num);

    return (
        <div className="welcome-box">
            <h2 className="welcome-box__title">{boxTexts[dot-1].title}</h2>
            <span className="welcome-box__text">{boxTexts[dot-1].text}</span>
            <div className="welcome-box__dots">
                <div className={dot === 1 ? 'active-dot dot dot-1' : 'dot dot-1'} onClick={() => changeDot(1)}>
                    <img src={dot1} alt="dot" />
                </div>
                <div className={dot === 2 ? 'active-dot dot dot-2' : 'dot dot-2'} onClick={() => changeDot(2)}>
                    <img src={dot2} alt="dot" />
                </div>
                <div className={dot === 3 ? 'active-dot dot dot-3' : 'dot dot-3'} onClick={() => changeDot(3)}>
                    <img src={dot3} alt="dot" />
                </div>
            </div>
        </div>
    )
}

export default WelcomeBox;
