import React, { useEffect, useState } from "react";
import { getTermAndConditionRequest } from "../../APIRequest/privacyPolicyApi";
import parser from "html-react-parser";

const TermAndConditionsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getTermAndConditionRequest();
      setData(data);
    })();
  }, []);
  return (
    <div className="max-w-5xl lg:w-full px-4 py-10 mx-auto">
      <div>
        <h1 className="text-2xl uppercase text-center">Term And Conditions</h1>
      </div>
      {/* contact inof */}
      <div className=" pt-10">
        {data?.length > 0 && parser(data[0]?.termOfCondition)}
      </div>
    </div>
  );
};

export default TermAndConditionsPage;
