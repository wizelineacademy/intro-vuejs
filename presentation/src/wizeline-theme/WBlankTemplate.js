import React from "react";
import styled from "styled-components";
import WizelineIsotypeImage from "./assets/wizeline-isotype@2x.png";
import { white } from "ansi-colors";

const WizeSlide = styled.div([], {
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  justifyContent: 'center',
  width: "100vw",
  height: "100vh",
})

const RelativeContainer = styled.div([], {
  position: 'relative'
})

const BGContainer = styled.div([], {
  backgroundColor: 'white',
  position: "absolute",
  width: "100vw",
  height: "calc(100vh - 33px)",
  top: 0,
  left: 0,
  zIndex: -1
});

const WizelineIsotype = styled.div([], {
  background: `url(${WizelineIsotypeImage})`,
  backgroundSize: "cover",
  position: "absolute",
  top: "45px",
  right: "45px",
  width: "60px",
  height: "60px"
});

export default ({ children }) => {
  return (
    <div>
      <RelativeContainer>
        <BGContainer>
          <WizelineIsotype />
        </BGContainer>

      </RelativeContainer>

      <WizeSlide>
        {children}
      </WizeSlide>
    </div>

  );
};
