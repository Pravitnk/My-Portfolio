// import React from "react";
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
// import TimelineDot from "@mui/lab/TimelineDot";
// import { Event } from "@mui/icons-material";
// import Typography from "@mui/material/Typography";

// const TimeLine = ({ timelines = [] }) => {
//   return (
//     <div>
//       <Timeline position="alternate">
//         {timelines.map((item, index) => (
//           <TimelineItem kye={index}>
//             <TimelineOppositeContent
//               sx={{ m: "auto 0" }}
//               align="right"
//               variant="body2"
//               color="text.secondary"
//               fontWeight="900"
//             >
//               <span style={{ fontWeight: "900", fontSize: "1.1rem" }}>
//                 From :
//               </span>{" "}
//               {item.fromDate?.toString().split("T")[0]}{" "}
//               <span style={{ fontWeight: "900", fontSize: "1.1rem" }}>
//                 To :
//               </span>{" "}
//               {item.toDate?.toString().split("T")[0]}
//             </TimelineOppositeContent>

//             <TimelineSeparator>
//               <TimelineConnector />
//               <TimelineDot>
//                 <Event />
//               </TimelineDot>
//               <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent sx={{ py: "12px", px: "2" }}>
//               <Typography variant="h6">{item.title}</Typography>
//               <Typography>{item.description}</Typography>
//             </TimelineContent>
//           </TimelineItem>
//         ))}
//       </Timeline>
//     </div>
//   );
// };

// export default TimeLine;

import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event, TitleOutlined, TitleRounded } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { Card, CardContent, Divider } from "@mui/material";

const TimeLine = ({ timelines = [] }) => {
  return (
    <div>
      <Timeline position="alternate">
        {timelines.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align={index % 2 === 0 ? "right" : "left"}
              variant="body2"
              color="text.secondary"
              fontWeight="900"
            >
              <span style={{ fontWeight: "900", fontSize: "1.1rem" }}>
                From :
              </span>{" "}
              {item.fromDate?.toString().split("T")[0]}{" "}
              <span style={{ fontWeight: "900", fontSize: "1.1rem" }}>
                To :
              </span>{" "}
              {item.toDate?.toString().split("T")[0]}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <Event />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Card
                sx={{
                  boxShadow: 3,
                  width: "90%",
                  margin: "auto",
                  backgroundColor: "rgb(216, 216, 216)",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                    backgroundColor: "rgb(207, 207, 207)",
                  },
                  borderRadius: "12px",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    {item.title}
                  </Typography>
                  <Divider sx={{ mt: 1, mb: 2 }} /> {/* Divider added here */}
                  <Typography sx={{ mt: 1.5, textAlign: "center" }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
