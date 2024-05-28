import React, { useEffect, useState } from "react";
import { getreturnAndRefundRequest } from "../../APIRequest/privacyPolicyApi";
import parser from "html-react-parser";

const ReturnAndRefundPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getreturnAndRefundRequest();
      setData(data);
    })();
  }, []);

  return (
    <div className="max-w-5xl lg:w-full px-4 py-10 mx-auto">
      <div>
        <h1 className="text-2xl uppercase text-center">Return And Refund</h1>
      </div>
      {/* contact inof */}
      <div className=" pt-10">
        <div className=" pt-10">
          {data?.length > 0 && parser(data[0]?.returnAndRefund)}
        </div>
      </div>
    </div>
  );
};

export default ReturnAndRefundPage;
