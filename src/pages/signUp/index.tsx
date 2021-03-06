import { useState } from 'react';

import { useRouter } from 'next/router';

import Modal from '@components/molecules/modal';
import MajorModal from '@components/molecules/modal/majorModal';
import SignUpForm from '@components/organisms/signUpForm';
import Seo from '@components/Seo';
import { MAJOR_TYPE } from '@constants/index';
import { Container, Title } from '@styles/signUp';
import Auth from '@utils/api/Auth';
import { removeCookies } from '@utils/cookie';

const SignUp = () => {
  const [major, setMajor] = useState<keyof typeof MAJOR_TYPE>('sw');
  const [modalOnOff, setModalOnOff] = useState(false);

  const router = useRouter();
  const handleModalOnOff = () => setModalOnOff(!modalOnOff);
  const onSubmitForm = async (name: string, department: string, gitEmail: string, ajouEmail: string) => {
    await Auth.signUp({ name, department: department.toUpperCase(), ajouEmail, gitEmail });

    removeCookies('SESSION');
    router.push('/signIn');
  };
  return (
    <>
      <Container>
        <Seo title="회원가입" />
        <Title>SIGN UP</Title>
        <SignUpForm
          handleModalOnOff={handleModalOnOff}
          major={major.toLowerCase() as keyof typeof MAJOR_TYPE}
          onSubmitForm={onSubmitForm}
        />
      </Container>
      {modalOnOff && (
        <Modal onClick={handleModalOnOff}>
          <MajorModal major={major} setMajor={setMajor} setModalOnOff={setModalOnOff} />
        </Modal>
      )}
    </>
  );
};
export default SignUp;
