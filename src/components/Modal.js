import React from 'react';
import PropTypes from 'prop-types';
import ModalPortal from './ModalPortal';
import styled, { css } from 'styled-components';
import Color from '../styles/ColorPalette';
import Elevation from '../styles/Elevation';
import Square from './Square';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #00000051;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 30;
  backdrop-filter: blur(0.5px);
`;

const ModalBlock = styled.div`
  height: 296px;
  width: 296px;
  background-color: ${Color.surface};
  box-shadow: ${Elevation.z24};
  border-radius: 4px;
  z-index: 40;
  position: relative;
  .close {
    position: absolute;
    top: -32px;
    right: 138px;
    width: 20px;
    height: 20px;
    padding: 0px;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      border-radius: 50%;
      color: whitesmoke;
      background-color: #0000008a;
    }
  }
`;

const ModalBody = styled.div`
  height: 288px;
  width: 288px;
  margin: 4px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  ${props =>
    props.index &&
    css`
      order: ${props.index};
    `}
`;

const Modal = ({
  goal,
  plans,
  gridIndex,
  onChangeMainGoal,
  onChangeSubGoal,
  onChangePlan,
  setModal,
}) => {
  return (
    <ModalPortal>
      <ModalOverlay>
        <ModalBlock>
          <ModalBody>
            <div className="close" onClick={() => setModal(false)}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
            {onChangeMainGoal && onChangeSubGoal && (
              <>
                <Square
                  role="goal"
                  text={goal}
                  onChange={onChangeMainGoal}
                  squareIndex={gridIndex}
                  placeholder="목표"
                  maxLength="8"
                />
                {plans.map((plan, i) => (
                  <Square
                    role="subGoal"
                    text={plan.goal}
                    onChange={e => onChangeSubGoal(e, i)}
                    placeholder="세부&#13;&#10;목표"
                    maxLength="8"
                    squareIndex={i}
                    key={i}
                  />
                ))}
              </>
            )}
            {onChangePlan && (
              <>
                <Square role="subGoal" text={goal} squareIndex={4} />
                {plans.map((plan, i) => (
                  <Square
                    text={plan}
                    onChange={e => onChangePlan(e, gridIndex)}
                    placeholder="세부&#13;&#10;계획"
                    maxLength="16"
                    squareIndex={i}
                    key={i}
                  />
                ))}
              </>
            )}
          </ModalBody>
        </ModalBlock>
      </ModalOverlay>
    </ModalPortal>
  );
};

Modal.propTypes = {
  goal: PropTypes.string,
  plans: PropTypes.array,
  gridIndex: PropTypes.number,
  onChangeMainGoal: PropTypes.func,
  onChangeSubGoal: PropTypes.func,
  onChangePlan: PropTypes.func,
  setModal: PropTypes.func,
};

export default Modal;
