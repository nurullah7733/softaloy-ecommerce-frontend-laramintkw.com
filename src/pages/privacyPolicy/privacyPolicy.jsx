import React, { useEffect, useState } from "react";
import { getPrivacyPolicyRequest } from "../../APIRequest/privacyPolicyApi";
import parser from "html-react-parser";

const PrivacyPolicyPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getPrivacyPolicyRequest();
      setData(data);
    })();
  }, []);

  return (
    <div className="max-w-5xl lg:w-full px-4 py-10 mx-auto">
      <div>
        <h1 className="text-2xl uppercase text-center">Privacy Policy</h1>
      </div>
      {/* contact inof */}
      <div className=" pt-10">
        {data?.length > 0 && parser(data[0]?.privacyPolicy)}
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
