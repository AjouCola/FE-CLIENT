import { ReactChild, ReactChildren, isValidElement } from 'react';

import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import TopButton from './atoms/topbutton';
import Navigation from './organisms/Navigation';
import AuthNavigation from './organisms/Navigation/AuthNavigation';

const NormalContainer = styled.div<{ flag: boolean }>`
  display: flex;
  justify-content: center;
  padding-top: ${({ flag }) => (flag ? '' : '6rem')};
  transition: 0.2s ease-in-out;
  width: 100%;
`;

const AuthContainer = styled.div`
  width: 100%;
  // height: calc(100vh - 8rem);
  height: calc(100% - 8rem);
  display: flex;
  justify-content: center;
  transition: 0.2s ease-in-out;
`;

export default function Layout({ children }: { children: ReactChild | ReactChildren }) {
  const NOT_NAVIGATION_LIST = ['signUp', 'signIn', 'signUpPolicy'];

  const compare = (url: string) => NOT_NAVIGATION_LIST.filter((path) => url.includes(path)).length > 0;

  const router = useRouter();
  return (
    <>
      {isValidElement(children) && typeof children.type !== 'string' && children.type.name !== 'GatherMap' ? (
        !compare(router.pathname) ? (
          <>
            <Navigation />
            <NormalContainer flag={router.pathname === '/'}>{children}</NormalContainer>
          </>
        ) : (
          <>
            <AuthNavigation />
            <AuthContainer>{children}</AuthContainer>
          </>
        )
      ) : (
        <div>{children}</div>
      )}
      <TopButton />
    </>
  );
}
// 레이아웃 패턴을 이용한다.
// 레이아웃에 어떤 children (footer 등)이든 넣을 수 있다.
// global로 import해야하는 것들. ex) 구글 애널리틱스, 서치 엔진 등
// 커스텀 스타일을 줄 수도 있다.
