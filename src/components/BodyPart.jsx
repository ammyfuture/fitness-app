// import { Stack, Typography } from "@mui/material";
// import Icon from "../assets/icons/gym.png";

// // in here we take the item string we get from all and not sure how we connect them with the icon and how we make a scroll bar either so lets see
// const BodyPart = ({ item, bodyPart, setBodyPart }) => {
//   console.log(bodyPart, "bodypart");
//   console.log(item, "item");
//   return (
//     <Stack
//       type="button"
//       alignItems="center"
//       justifyContent="center"
//       className="bodyPart-card"
//       //   default bodyPart = "all", saved first index in item is "all" too so icon representing all well be selected first automatically
//       sx={{
//         borderTop: bodyPart === item ? "4px solid #ff2625" : "",
//         backgroundColor: "#fff",
//         borderBottomLeftRadius: "20px",
//         width: "270px",
//         height: "280px",
//         cursor: "pointer",
//         gap: "47px",
//       }}
//       onClick={() => {
//         setBodyPart(item);
//         window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
//       }}
//     >
//       <img
//         src={Icon}
//         alt="dumbbell"
//         style={{ width: "40px", height: "40px" }}
//       />
//       <Typography
//         fontSize="24px"
//         fontWeight="bold"
//         color="#3a1212"
//         textTransform="capitalize"
//       >
//         {item}
//       </Typography>
//     </Stack>
//   );
// };
// export default BodyPart;

import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
            borderTop: "4px solid #FF2625",
            background: "#fff",
            borderBottomLeftRadius: "20px",
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
          }
        : {
            background: "#fff",
            borderBottomLeftRadius: "20px",
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
          }
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
    >
      {" "}
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
