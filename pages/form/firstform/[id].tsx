import { NextPage } from "next";
type ssd = {
  props: {
    id: String;
  };
};
type props = {
  id: String;
};
const Ids: NextPage = (param: props) => {
  const id = param.id;
  return <div>id:{id}</div>;
};
export function getServerSideProps({ params: { id } }): ssd {
  return {
    props: {
      id,
    },
  };
}
export default Ids;
