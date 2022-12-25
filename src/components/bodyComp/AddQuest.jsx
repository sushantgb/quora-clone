import React, { useState } from 'react';
import Avatar from '../headerComp/images/avatar.png';

function AddQuest(props) {

  /* for floating dropdown box for ask tab */
  const [dropperVal, setDropperVal] = useState('none');
  /* for floating dropdown box for post tab */
  const [dropperVal2, setDropperVal2] = useState('none');
  /* text for the visibility button on ask tab */
  const [askBtnText, setAskBtnText] = useState('Public');
  /* text for the visibility button on post tab */
  const [postBtnText, setPostBtnText] = useState('Everyone');

  /* state to change icon on visibility as well */
  const [classIconValue, setClassIcon] = useState('bi bi-people-fill');
  const [classIconValue2, setClassIcon2] = useState('bi bi-globe');

  /* function when visibility options are selected for ask */
  function Selector(e) {
    setDropperVal('none');
    setAskBtnText(e.target.value);
    if (e.target.value === 'Friends') {
      setClassIcon('bi bi-person-hearts');
    } else {
      setClassIcon('bi bi-people-fill');
    }
  }
  /* function when visibility options are selected for post */
  function Selector2(e) {
    setDropperVal2('none');
    setPostBtnText(e.target.value);
    if (e.target.value === 'Private') {
      setClassIcon2('bi bi-incognito');
    } else {
      setClassIcon2('bi bi-globe');
    }
  }

  return (props.addquesttab) ? (
    /* question tab */
    <div className='creater-tabs'>
      <div className='question-section'>
        <div className='user-category'>
          <img src={Avatar} alt="user avatar" />
          <button onClick={() => setDropperVal('block')}><i className={classIconValue}></i>{askBtnText}<i className="bi bi-chevron-down"></i></button>
          <div style={{ display: dropperVal }} className="drop-options">
            <div className='dropper-list'>
              <div className='list-element'>
                <input type='radio' id='pub' value='Public' name='visibility-opt' onClick={Selector} />
                <label for='pub'>Public</label>
              </div>
              <div className='list-element'>
                <input type='radio' id='frd' value='Friends' name='visibility-opt' onClick={Selector} />
                <label for='frd'>Friends</label>
              </div>
            </div>
          </div>
        </div>
        <div className='field-box'>
          <input type="text" placeholder='Start your question with "What", "How", "Why", etc.' required />
        </div>
      </div>
    </div>
  ) : (
    /* post tab */
    <div className='creater-tabs'>
      <div className='question-section'>
        <div className='user-category'>
          <img src={Avatar} alt="user avatar" />
          <button onClick={() => setDropperVal2('block')}><i className={classIconValue2}></i>{postBtnText}<i className="bi bi-chevron-down"></i></button>
          <div style={{ display: dropperVal2 }} className="drop-options">
            <div className='dropper-list'>
              <div className='list-element'>
                <input type='radio' id='eve' value='Everyone' name='visibility-opt2' onClick={Selector2} />
                <label for='eve'>Everyone</label>
              </div>
              <div className='list-element'>
                <input type='radio' id='pvt' value='Private' name='visibility-opt2' onClick={Selector2} />
                <label for='pvt'>Private</label>
              </div>
            </div>
          </div>
        </div>
        <div className='field-box'>
          <textarea placeholder='Say something...' required />
        </div>
      </div>
    </div>
  );
}

export default AddQuest;