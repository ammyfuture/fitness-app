// import { useContext } from "react";

// import { Box, Typography } from "@mui/material";
// import {ExerciseCard} from "./";

// import {BodyPart} from "./";
// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
// // we get the bodyParts array starting with all here and we map over it and we extract each string, so from new to the rest
// import RightArrowIcon from "../assets/icons/right-arrow.png";
// import LeftArrowIcon from "../assets/icons/left-arrow.png";

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);
//   return (
//     <Typography onClick={() => scrollPrev()} className="right-arrow">
//       <img src={LeftArrowIcon} alt="left-arrow" />
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollNext()} className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

// const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, bodyParts }) => {
//   return (
//     <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//       {data.map((item) => (
//         <Box
//           key={item.id || item}
//           // itemID={item.id || item}
//           title={item.id || item}
//         >
//           {/* here each string from all to the others representing categories get rendered in their own card styles using an icon */}
//           {/* {bodyParts ? (
//             <BodyPart
//               item={item}
//               setBodyPart={setBodyPart}
//               bodyPart={bodyPart}
//             />
//           ) : (
//             <ExerciseCard exercise={item} />
//           )} */}
//           <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
//         </Box>
//       ))}
//     </ScrollMenu>
//   );
// };
// export default HorizontalScrollbar;

import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";

import { ExerciseCard } from "./";
import { BodyPart } from "./";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, isBodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {isBodyParts ? (
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
