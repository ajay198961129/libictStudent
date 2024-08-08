import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { MdExpandCircleDown, MdExpandMore } from "react-icons/md";
import { CgExpand } from "react-icons/cg";

const CourseContent = () => {
  const sections = [
    { title: "Section 1: Introduction", duration: "7min" },
    { title: "Section 2: Installation", duration: "13min" },
    { title: "Section 3: Basic Syntax and First Steps", duration: "46min" },
    { title: "Section 4: Data Types", duration: "13min" },
    { title: "Section 5: Operators", duration: "20min" },
    { title: "Section 6: Statements", duration: "15min" },
    { title: "Section 7: Loops", duration: "15min" },
    { title: "Section 8: Arrays", duration: "15min" },
    { title: "Section 9: While Loop", duration: "15min" },
    { title: "Section 10: Shorting Arrays", duration: "15min" },
    { title: "Section 11: Delete Arrays", duration: "15min" },
    { title: "Section 12: Creating Arrays", duration: "15min" },
    { title: "Section 13: MongoDB Installation", duration: "15min" },
    { title: "Section 14: CRUD Funcation in MongoDB", duration: "15min" },
  ];

  return (
    <div className="course-content">
      {sections.map((section, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<MdExpandMore />}>
            <Typography>{section.title}</Typography>
            <Typography style={{ marginLeft: "auto" }}>
              {section.duration}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Content details...</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default CourseContent;
