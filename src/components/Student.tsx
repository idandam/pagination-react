const Student: React.FC<{
  name: string;
  age: number;
  gender: string;
  school: string;
  email: string;
  graduated: boolean;
}> = (props) => {
  return <li>{props.name}</li>;
};

export default Student;
