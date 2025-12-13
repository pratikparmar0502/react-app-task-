const Students = (props) => {
  let s1 = parseInt(props.Maths);
  let s2 = parseInt(props.Science);
  let s3 = parseInt(props.Physics);
  let s4 = parseInt(props.English);
  let s5 = parseInt(props.Gujarati);
  let total = s1 + s2 + s3 + s4 + s5;

  if (s1 < 35 || s2 < 35 || s3 < 35 || s4 < 35 || s5 < 35) {
    var per = 0;
  } else {
    per = total / 5;
  }

  let grade;
  if (per >= 95 && per <= 100) {
    grade = "A+";
  } else if (per >= 86 && per <= 94) {
    grade = "A";
  } else if (per >= 75 && per <= 85) {
    grade = "B";
  } else if (per >= 65 && per <= 74) {
    grade = "C";
  } else if (per >= 51 && per <= 64) {
    grade = "D";
  } else if (per >= 36 && per <= 50) {
    grade = "E";
  } else {
    grade = "-";
  }
  let min = Math.min(s1, s2, s3, s4, s5);
  let max = Math.max(s1, s2, s3, s4, s5);
  return (
    <>
      <tr>
        <td>{props.No}</td>
        <td>{props.Name}</td>
        <td>{props.Maths}</td>
        <td>{props.Science}</td>
        <td>{props.Physics}</td>
        <td>{props.English}</td>
        <td>{props.Gujarati}</td>
        <td>{total}</td>
        <td>{per}</td>
        <td>{grade}</td>
        <td>{min}</td>
        <td>{max}</td>
      </tr>
    </>
  );
};

export default Students;
