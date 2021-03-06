import styled from '@emotion/styled';

import { BoardLayout } from 'src/store/board';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  max-width: 1440px;
`;

interface BoardListProps {
  type: BoardLayout;
}
const BoardList = styled.div<BoardListProps>`
  margin-top: 20px;
  flex: 1;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ type }) => (type === BoardLayout.SIMPLE_LIST ? '1rem' : '1.2rem')};
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const BoardListTitle = styled.h2`
  font-size: 2.4rem;
  color: ${({ theme: { colors } }) => colors.blue[500]};
  padding: 0;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.8rem;
  }
`;
const FlexEnd = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-wrap: wrap;
  }
`;
const BoardListUtilWrapper = styled(FlexEnd)`
  padding-bottom: 0.2rem;
  select {
    padding: 0.3rem 0.5rem;
    box-shadow: 0px 0px 6px #00000029;
    border-radius: 5px;
    border: none;
    color: ${({ theme: { colors } }) => colors.gray[900]};
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 0.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: space-between;
  }
`;

const TypeIcon = styled.span<{ clicked: boolean }>`
  opacity: ${({ clicked }) => (clicked ? 1 : 0.5)};
  cursor: pointer;
  svg {
    opacity: 1;
  }
`;

const WritePost = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  padding: 0.1rem 1rem;
  border: 1px solid ${({ theme: { colors } }) => colors.blue[500]};
  border-radius: 24px;
  color: ${({ theme: { colors } }) => colors.blue[500]};
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    background: ${({ theme: { colors } }) => colors.blue[400]};
    color: white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.1rem;
  }
`;
export { Container, BoardList, TitleWrapper, BoardListTitle, WritePost, FlexEnd, BoardListUtilWrapper, TypeIcon };
