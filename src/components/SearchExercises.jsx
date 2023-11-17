// import { useEffect, useState } from "react";
// import { Box, Button, Stack, TextField, Typography } from "@mui/material";
// import { exerciseOptions, fetchData } from "../utils/fetchData";
// import HorizontalScrollbar from "./HorizontalScrollbar";

// // we have an ex obj, it has 4 props [name, target, equipment, body part] these props return arrays of their own
// // the ex state is set using what is being searched, and we get back an array that has a curated item from all 4 props i need to log one and see what we get vs what just calling the obj gets but i think u need to pass some param to get a result wonder how to get the whole thing without any params based

// // from the 4 props we extract body parts array and we add all as the first index too for some reason
// const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
//   const [search, setSearch] = useState("");
//   // body part has the array with the strings that has like a category, we get it from,
//   const [bodyParts, setBodyParts] = useState([]);

//   useEffect(() => {
//     // this fetches the categories right away, so if i click on any, then i'll see the array is there, the data gets fetched right away and saved in bodyParts with all at the first and where we display them is in the min cards in the scroll thingy
//     const fetchExercisesData = async () => {
//       // we get the prop array with this
//       const bodyPartsData = await fetchData(
//         "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
//         exerciseOptions
//       );
//       // we add all string as first item and then spread the others and saving them to the body parts array
//       setBodyParts(["all", ...bodyPartsData]);
//     };

//     fetchExercisesData();
//   }, []);

//   // this tho, only shows up if we click on search after we pass something
//   const handleSearch = async () => {
//     if (search) {
//       const exercisesData = await fetchData(
//         "https://exercisedb.p.rapidapi.com/exercises",
//         exerciseOptions
//       );
//       // this def holds the array of objects but we don't just want them all, we want to decide what shows up, based on either what they type, or the categories clicked so we filter them here, we check if any of the props holds something like what was searched, if it does, then we set the search to nothing again and save the search stuff, but how does that create that obj is beyond me lets see

//       const searchedExercises = exercisesData.filter((item) => {
//         const includesSearch =
//           item.name.toLowerCase().includes(search) ||
//           item.target.toLowerCase().includes(search) ||
//           item.equipment.toLowerCase().includes(search) ||
//           item.bodyPart.toLowerCase().includes(search);

//         // Return true if the item matches the search criteria, otherwise false
//         return includesSearch;
//       });
//       // setState(searchedExercises);
//       window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

//       setSearch("");
//       setExercises(searchedExercises);
//     }
//   };

//   return (
//     <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
//       <Typography
//         fontWeight={700}
//         sx={{ fontSize: { lg: "44px", xs: "30px" } }}
//         mb="49px"
//         textAlign="center"
//       >
//         Awesome Exercises You <br /> Should Know
//       </Typography>
//       <Box position="relative" mb="72px">
//         <TextField
//           height="76px"
//           sx={{
//             input: { fontWeight: "700", border: "none", borderRadius: "4px" },
//             width: { lg: "1170px", xs: "350px" },
//             backgroundColor: "#fff",
//             borderRadius: "40px",
//           }}
//           value={search}
//           onChange={(e) => setSearch(e.target.value.toLowerCase())}
//           placeholder="Search Exercises"
//           type="text"
//         />
//         <Button
//           className="search-btn"
//           sx={{
//             bgcolor: "#FF2625",
//             color: "#fff",
//             textTransform: "none",
//             width: { lg: "173px", xs: "80px" },
//             height: "56px",
//             position: "absolute",
//             right: "0px",
//             fontSize: { lg: "20px", xs: "14px" },
//           }}
//           onClick={handleSearch}
//         >
//           Search
//         </Button>
//       </Box>
//       {/* we are passing the body parts prop array as data and we are passing bodyPart and setBodyPart that holds all as the default state so that means it'll pick the first item from the bodyParts array? idk well see what we do with it */}
//       <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
//         <HorizontalScrollbar
//           data={bodyParts}
//           // mistake np one
//           bodyParts
//           bodyPart={bodyPart}
//           setBodyPart={setBodyPart}
//         />
//       </Box>
//     </Stack>
//   );
// };

// export default SearchExercises;

import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import { HorizontalScrollbar } from "./";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      // we fetch
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      // then we set, but this is supposedly not iterable so ..
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
