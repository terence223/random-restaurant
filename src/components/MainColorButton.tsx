import { ReactNode } from 'react';
import { Button, ConfigProvider } from 'antd';
import styled from 'styled-components';

const mainColor = '#1ea1a8';

const RandomButton = styled(Button)`
  &:focus {
    outline: 0;
  }
`;

const MainColorButton = ({ children, onClick }: { children: ReactNode; onClick: () => void }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: mainColor,
        },
        components: {
          Button: {
            borderColorDisabled: mainColor,
            defaultShadow: `0 2px 0 ${mainColor}`,
          },
        },
      }}
    >
      <RandomButton style={{ marginLeft: '8px' }} type="primary" onClick={onClick}>
        {children}
      </RandomButton>
    </ConfigProvider>
  );
};

export default MainColorButton;
