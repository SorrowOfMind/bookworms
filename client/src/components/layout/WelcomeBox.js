import React, {useState} from 'react';
import dot1 from '../../assets/dot1.png';
import dot2 from '../../assets/dot2.png';
import dot3 from '../../assets/dot3.png';

const WelcomeBox = () => {
    const [dot, setDot] = useState(1);

    const changeDot = num => setDot(num);

    return (
        <div className="welcome-box">
            <h2 className="welcome-box__title">Lorem ipsum dolor sit amet</h2>
            <p className="welcome-box__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid iure molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid iure molestiae.</p>
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
