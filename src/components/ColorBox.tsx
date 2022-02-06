import React from 'react';
import { ColorConsumer, State } from '../contexts/color';

const ColorBox = () => {
  return (
    <ColorConsumer>
      {({state, actions}: State) => (
        <>
          <div
            style={{
              width: '64px',
              height: '64px',
              background: state.color
            }}/>
          <div
            style={{
              width: '32px',
              height: '32px',
              background: state.subcolor
            }}
            onClick={() => actions.setSubcolor('blue')}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;