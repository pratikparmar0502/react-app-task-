import { createSlice } from "@reduxjs/toolkit";

const marksheetSlice = createSlice({
  name: "marksheet",
  initialState: {
    students: [],
  },
  reducers: {
    addStudent: (state, action) => {
      let { name, rollNo, sub1, sub2, sub3 } = action.payload;
      sub1 = Number(sub1);
      sub2 = Number(sub2);
      sub3 = Number(sub3);

      const total = sub1 + sub2 + sub3;
      const min = Math.min(sub1, sub2, sub3);
      const max = Math.max(sub1, sub2, sub3);

      let per = 0;
      let grade = "";

      if (min < 33) {
        per = 0;
        grade = "Fail";
      } else {
        per = Number((total / 3).toFixed(2));

        if (per >= 90) grade = "A+";
        else if (per >= 80) grade = "A";
        else if (per >= 70) grade = "B";
        else if (per >= 60) grade = "C";
        else grade = "D";
      }

      state.students.push({
        name,
        rollNo,
        sub1,
        sub2,
        sub3,
        total,
        min,
        max,
        per,
        grade,
      });
    },

    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (s) => s.rollNo !== action.payload,
      );
    },
    updateStudent: (state, action) => {
      const { name, rollNo, sub1, sub2, sub3 } = action.payload;
      const s1 = Number(sub1);
      const s2 = Number(sub2);
      const s3 = Number(sub3);

      const total = s1 + s2 + s3;
      const min = Math.min(s1, s2, s3);
      const max = Math.max(s1, s2, s3);

      let per = 0;
      let grade = "";

      if (min < 33) {
        per = 0;
        grade = "Fail";
      } else {
        per = Number((total / 3).toFixed(2));

        if (per >= 90) grade = "A+";
        else if (per >= 80) grade = "A";
        else if (per >= 70) grade = "B";
        else if (per >= 60) grade = "C";
        else grade = "D";
      }
      state.students = state.students.map((student) =>
        student.rollNo === rollNo
          ? {
              ...student,
              name,
              sub1: s1,
              sub2: s2,
              sub3: s3,
              min,
              max,
              total,
              per,
              grade,
            }
          : student,
      );
    },
  },
});

export const { addStudent, deleteStudent, updateStudent } =
  marksheetSlice.actions;
export default marksheetSlice.reducer;
