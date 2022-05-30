import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { GetServerSideProps } from 'next';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { DragDropContext, Droppable, resetServerContext } from 'react-beautiful-dnd'; // eslint-disable-line

import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';

import TodoArea from '@components/molecules/todoArea';
import { DeleteBlock, TodoInfoWrapper, TodoWrapper } from '@components/molecules/todoContent/styles';
import TodoMenuModal from '@components/molecules/todoMenuModal';
import Calender from '@molecules/calender';
import TodoContent from '@molecules/todoContent';
import EditTodoContent from '@molecules/todoContent/edit';
import { todoModal } from '@store/todo';
import {
  BackgroundView,
  BackgroundSecondView,
  Container,
  CalendarContainer,
  TodoContainer,
  MenuBtn,
  TodoDate,
  TodoUtils,
  DeleteBtn,
  SheetButton,
} from '@styles/todolist';
import TodoApi from '@utils/api/Todo';
import { ITodoState, todoState } from 'src/store';

export const useCalendar = (): [Date, Date, Dispatch<SetStateAction<Date>>, (condition: number) => void] => {
  const [date, setDate] = useState(new Date());

  const today = new Date();
  const handleChangeMonth = (condition: number) => setDate(new Date(date.getFullYear(), date.getMonth() + condition));

  return [today, date, setDate, handleChangeMonth];
};

const Todolist: NextPage = () => {
  const [today, date, setDate, handleChangeMonth] = useCalendar();
  const [mode, setMode] = useState('default');

  const [bottomSheetOnOff, setBottomSheetOnOff] = useState(false);

  return (
    <Container>
      <TodoContainer>
        {mode === 'default' && <TodoContent today={date} />}
        {mode === 'edit' && <EditTodoContent />}
        <MenuBtn onClick={() => setMode((v) => (v === 'default' ? 'edit' : 'default'))}>메뉴</MenuBtn>
      </TodoContainer>

      <SheetButton onClick={() => setBottomSheetOnOff((v) => !v)}>ㅡ</SheetButton>
      <CalendarContainer flag={bottomSheetOnOff}>
        <Calender {...{ date, handleChangeMonth, setDate }} />
      </CalendarContainer>
    </Container>
  );
};

export default dynamic(() => Promise.resolve(Todolist), {
  ssr: false,
});

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  resetServerContext();
  // return null;
  return { props: { data: [] } };
};
