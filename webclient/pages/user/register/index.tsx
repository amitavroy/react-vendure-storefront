import { NextPage } from "next";
import { RegistrationForm } from "../../../components/Forms/RegistrationForm";
import Layout from "../../../components/Layout";

const UserRegisterPage: NextPage = () => {
  return (
    <Layout>
      <RegistrationForm />
    </Layout>
  );
};

export default UserRegisterPage;
