import { NextPage } from "next";
import { useRouter } from "next/router";
import { RegistrationForm } from "../../../components/Forms/RegistrationForm";
import Layout from "../../../components/Layout";

const UserRegisterPage: NextPage = () => {
  const router = useRouter();
  return (
    <Layout pageTitle="Registration">
      <RegistrationForm onSuccess={() => router.push("/user/verify-token")} />
    </Layout>
  );
};

export default UserRegisterPage;
