import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import "./Verify.css";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        await axios.post("http://localhost:4000/api/order/verify", {
          orderId: searchParams.get("orderId"), // matches backend
          success: searchParams.get("success")  // matches backend
        });

        // Redirect to MyOrders page after verification
        setTimeout(() => {
          navigate("/myorders");
        }, 3000);
      } catch (error) {
        console.error("Payment verification failed:", error);
        setTimeout(() => {
          navigate("/myorders");
        }, 3000);
      }
    };

    verifyPayment();
  }, [navigate, searchParams]);

  return (
    <div className="verify">
      <div className="spinner"></div>
      <h2>Verifying your payment...</h2>
      <p>Please wait, redirecting to your orders...</p>
    </div>
  );
};

export default Verify;
