import { useRouter } from "next/router";

import { LoginForm } from "../../../components/Forms/LoginForm";
import Layout from "../../../components/Layout";

const LoginPage = () => {
  const router = useRouter();
  return (
    <Layout pageTitle="Login to Demo shop">
      <div className="mx-auto w-1/2">
        <LoginForm onSuccess={() => router.push("/")} />
      </div>
    </Layout>
  );
};

export default LoginPage;
