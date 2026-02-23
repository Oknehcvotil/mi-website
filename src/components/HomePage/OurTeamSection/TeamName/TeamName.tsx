import { NameCont } from "./TeamName.styled";

type TeamNameProps = {
  id: string;
  name: string;
  role: string;
};

const TeamName = ({ id, name, role }: TeamNameProps) => {
  return (
    <NameCont className={`team-${id}`}>
      <h3>{name}</h3>
      <p>{role}</p>
    </NameCont>
  );
};
export default TeamName;
