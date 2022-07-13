import { NextPage } from "next";
import { useRouter } from "next/router";

import { TokenVerifyForm } from "../../../components/Forms/TokenVerifyForm";
import Layout from "../../../components/Layout";

const VerifyTokenPage: NextPage = () => {
  const router = useRouter();
  return (
    <Layout pageTitle="Verify user account">
      <div className="mx-auto w-1/2">
        <TokenVerifyForm onSuccess={() => router.push("/")} />
      </div>
    </Layout>
  );
};

export default VerifyTokenPage;
