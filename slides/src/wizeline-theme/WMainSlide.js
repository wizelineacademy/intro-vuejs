import React from "react";
import styled from "styled-components";
import DotsGrid from "./assets/dots-grid.png";
import WizelineIsotypeImage from "./assets/wizeline-isotype@2x.png";

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
  position: "absolute",
  width: "100vw",
  height: "100vh",
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
const GridRectangle = styled.div([], {
  background: `url(${DotsGrid}) repeat`,
  display: "inline-block",
  float: "left",
  width: "200px",
  height: "300px",
  backgroundSize: "200px",
  marginTop: "-40px",
  marginRight: "10px"
});

const GreyBlock = styled.div([], {
  backgroundColor: "#F4F4F4",
  marginTop: "5vh",
  width: "90vw",
  height: "85vh"
});

export default ({ children }) => {
  return (
    <div>
      <RelativeContainer>
        <BGContainer>
          {/* background */}
          <GreyBlock />
          <GridRectangle />
          <GridRectangle />
          <WizelineIsotype />
        </BGContainer>

      </RelativeContainer>

      <WizeSlide>
        {children}
      </WizeSlide>
    </div>

  );
};
