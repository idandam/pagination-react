const Student: React.FC<{
  name: string;
  age: number;
  gender: string;
  school: string;
  email: string;
  graduated: boolean;
}> = (props) => {
  return <div>{props.name}</div>;
};

export default Student;
