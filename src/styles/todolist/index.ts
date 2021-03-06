import styled from '@emotion/styled';

import { theme } from '@styles/theme';

const Container = styled.div`
  display: grid;
  grid-template:
    'calender content' 1fr
    /6fr 5fr;
  align-items: flex-start;
  width: 90%;
  margin: auto 0;
  box-shadow: 0px 0px 6px ${({ theme: { colors } }) => colors.shadow};
  position: relative;
  border-radius: 5px;
  background: white;
  z-index: 3;
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template:
      'content' 1fr
      /1fr;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template:
      'content' 1fr
      /1fr;
  }
`;
const BackgroundView = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  max-height: 786px;
  bottom: -0.5rem;
  right: -0.5rem;
  background: none;
  border: none;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 0px 6px ${({ theme: { colors } }) => colors.shadow};
  z-index: 2;
`;
const BackgroundSecondView = styled(BackgroundView)`
  bottom: -1rem;
  right: -1rem;
  z-index: 1;
`;
const CalendarContainer = styled.div<{ flag: boolean }>`
  grid-area: calender;
  width: 100%;
  padding: 5rem 2rem;
  z-index: 3;
  background: white;
  border-radius: 5px 0px 0px 5px;
  @media (max-width: ${theme.breakpoints.md}) {
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    padding: 1rem;
    transform: translateY(0) translateX(0);
    box-shadow: 0px 0px 3px ${theme.colors.shadow};
    transition: all 200ms ease-in-out;
    bottom: ${({ flag }) => (flag ? '2rem' : '-100%')};
    position: fixed;
    overflow: hidden;
    border-radius: 5px 5px 0px 0px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    padding: 1rem;
    transform: translateY(0) translateX(0);
    box-shadow: 0px 0px 3px ${theme.colors.shadow};
    transition: all 200ms ease-in-out;
    bottom: ${({ flag }) => (flag ? '2rem' : '-100%')};
    position: fixed;
    overflow: hidden;
    border-radius: 5px 5px 0px 0px;
  }
`;

const SheetButton = styled.button`
  display: none;
  text-align: center;
  justify-content: center;
  @media (max-width: ${theme.breakpoints.md}) {
    z-index: 999;
    height: 2rem;
    width: 80%;
    display: flex;
    position: fixed;
    bottom: 0px;
    background: white;
    box-shadow: 0px 0px 6px ${theme.colors.shadow};
    border: none;
    border-radius: 5px 5px 0px 0px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    z-index: 999;
    height: 2rem;
    width: 90%;
    display: flex;
    position: fixed;
    bottom: 0px;
    background: white;
    box-shadow: 0px 0px 6px ${theme.colors.shadow};
    border: none;
    border-radius: 5px 5px 0px 0px;
  }
`;

const TodoContainer = styled.div`
  grid-area: content;
  position: relative;
  border-radius: 0px 5px 5px 0px;
  z-index: 10;
  min-height: 80vh;
  height: 100%;
  overflow: hidden;
  background-color: ${({ theme: { colors } }) => colors.blue[500]};
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    width: 6px;
    background-color: ${({ theme: { colors } }) => colors.blue[100]};
    border-radius: 4px;
  }
`;
const TodoInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  height: 10rem;
  margin-bottom: 1rem;
  padding: 1rem 0;
  border-bottom: 2px solid white;
`;
const TodoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const TodoDate = styled(TodoInfo)`
  & span:nth-of-type(1) {
    font-size: 4rem;
    font-weight: 600;
  }
  & span:nth-of-type(2) {
    font-size: 1.5rem;
  }
`;
const TodoUtils = styled(TodoInfo)`
  /* button {
    height: 2rem;
    width: 3rem;
    background: white;
    border: none;
    cursor: pointer;
  } */
`;
const DeleteBtn = styled.div<{ deleteMode: boolean }>`
  cursor: pointer;
  position: relative;
  width: 3rem;
  height: 2rem;
  box-shadow: inset 0px 0px 6px #00000029;
  border-radius: 3px;
  font-weight: 600;
  text-align: center;
  line-height: 2rem;
  transition: all 200ms linear;
`;

const MenuBtn = styled.button<{ clicked: boolean }>`
  position: absolute;
  z-index: 999;
  top: 3rem;
  right: 3.6rem;

  display: flex;
  flex-direction: column;
  background: none;
  border: none;
  // gap: 0.3rem;
  // gap: 0;
  cursor: pointer;
  span {
    position: absolute;
    right: 0.5rem;
    width: 2rem;
    height: 0.3rem;
    background: white;
    transition: all 200ms linear;

    :nth-of-type(1) {
      opacity: ${({ clicked }) => (clicked ? 0 : 1)};
    }
    :nth-of-type(2) {
      top: 0.75rem;
      transform: ${({ clicked }) => (clicked ? 'rotate(45deg)' : '')};
    }
    :nth-of-type(3) {
      top: 0.75rem;
      opacity: ${({ clicked }) => (clicked ? 0 : 1)};
    }
    :nth-of-type(4) {
      top: 0.75rem;
      transform: ${({ clicked }) => (clicked ? 'rotate(-45deg)' : '')};
    }
    :nth-of-type(5) {
      top: 1.5rem;
      opacity: ${({ clicked }) => (clicked ? 0 : 1)};
    }
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.sm}) {
      top: 0;
      right: -0.9rem;
      width: 2rem;
      height: 0.2rem;
      :nth-of-type(2) {
        top: 0.5rem;
      }
      :nth-of-type(3) {
        top: 0.5rem;
      }
      :nth-of-type(4) {
        top: 0.5rem;
      }
      :nth-of-type(5) {
        top: 1rem;
      }
    }
  }
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.sm}) {
    top: 2.4rem;
    right: 2rem;
  }
`;

export {
  Container,
  BackgroundView,
  BackgroundSecondView,
  CalendarContainer,
  TodoContainer,
  MenuBtn,
  TodoInfoWrapper,
  TodoDate,
  TodoUtils,
  DeleteBtn,
  SheetButton,
};
