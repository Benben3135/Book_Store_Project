import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { motion } from "framer-motion";
import { Check, Keyboard, Library, PenIcon } from "lucide-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { scroll } from "../../features/layout/isScrollSlice";
import { thereNoUser } from "../../features/user/isUserSlice";

const ProRegister = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(scroll()); // Dispatch the scroll action
    dispatch(thereNoUser());
  }, []);

  function createOrder() {
    return fetch("/my-server/create-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product ids and quantities
      body: JSON.stringify({
        cart: [
          {
            id: "YOUR_PRODUCT_ID",
            quantity: "YOUR_PRODUCT_QUANTITY",
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id);
  }
  //@ts-ignore
  function onApprove(data) {
    return fetch("/my-server/capture-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
      .then((response) => response.json())
      .then((orderData) => {
        const name = orderData.payer.name.given_name;
        alert(`Transaction completed by ${name}`);
      });
  }

  return (
    <div className=" w-full h-[200vh]  bg-gradient-to-b from-sky-200 to-yellow-100 flex flex-col items-center justify-start">
      {/*first page */}
      <div className=" w-full h-full flex flex-col items-center justify-start">
        <div className=" flex flex-col justify-center items-center w-full h-fit mt-24">
          <h1 className=" text-center text-7xl font-bold font-sans text-slate-800 antialiased">
            Bookeria<span className=" text-yellow-400">Pro®</span>
          </h1>
          <h2 className=" max-w-prose text-2xl text-slate-700 font-normal text-center mt-2">
            The home for authors and official critics. Publish your new creation
            right now with BookeriaPro®.
          </h2>
          <div className=" w-full h-96 flex flex-row items-center justify-center mt-8 bg-gradient-to-b from-slate-300 to-sky-200 shadow-xl p-8 gap-8">
            <div className=" w-1/6 h-full bg-slate-200 flex flex-col items-center justify-start p-8 rounded-lg">
              <div className=" bg-white rounded-full p-2 flex flex-col justify-center items-center shadow-md mb-2">
                <PenIcon />
              </div>
              <h1 className=" font-bold text-2xl font-sans">
                Add your own books
              </h1>
              <h2 className=" font-normal font-sans max-w-prose text-center">
                Add your creations to the Bookeria official library and get it
                exposed.
              </h2>
            </div>

            <div className=" w-1/6 h-full bg-slate-200 flex flex-col items-center justify-start p-8 rounded-lg">
              <div className=" bg-white rounded-full p-2 flex flex-col justify-center items-center shadow-md mb-2">
                <Library />
              </div>
              <h1 className=" font-bold text-2xl font-sans">Get full access</h1>
              <h2 className=" font-normal font-sans max-w-prose text-center">
                Get full access to all of the books in our library
              </h2>
            </div>

            <div className=" w-1/6 h-full bg-slate-200 flex flex-col items-center justify-start p-8 rounded-lg">
              <div className=" bg-white rounded-full p-2 flex flex-col justify-center items-center shadow-md mb-2">
                <Keyboard />
              </div>
              <h1 className=" font-bold text-2xl font-sans">
                Write official reviews
              </h1>
              <h2 className=" font-normal font-sans max-w-prose text-center">
                Write official reviews as a critic and get exposed as an
                official Bookeria critic
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/*second page */}
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className=" text-6xl font-bold font-sans mb-10 text-slate-800">
          So what are you waiting for?
        </h1>
        <div className=" w-fit h-fit flex flex-row gap-8 items-center justify-center">
          <motion.div
          initial={{y:100 , opacity:0}}
          whileInView={{y:0 , opacity:1}}
          className=" h-[34rem] w-96 bg-slate-200 flex flex-col items-center justify-between gap-4 rounded-sm shadow-lg p-4">
            <h1 className=" font-bold text-slate-800 text-3xl mt-2">
              BookeriaPro® <span className=" text-slate-600">BASIC</span>
            </h1>
            <div className=" h-1/2 w-full bg-slate-100 rounded-sm shadow-md p-4 flex flex-col items-center justify-start">
              <div className=" h-14 w-full shadow-lg flex flex-row items-center justify-start p-2">
                <Check color="green" />
                <p className=" ml-2 font-bold font-sans">
                  Full access ro Bookeria libraries
                </p>
              </div>
              <div className=" h-14 w-full shadow-lg flex flex-row items-center justify-start p-2">
                <Check color="green" />
                <p className=" ml-2 font-bold font-sans">
                  Official critic reviews
                </p>
              </div>
              <div className=" h-14 w-full shadow-lg flex flex-row items-center justify-start p-2">
                <Check color="gray" />
                <p className=" ml-2 font-bold font-sans">
                  Upload your own books
                </p>
              </div>
            </div>
            <PayPalScriptProvider options={{ clientId: "test" }}>
              <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
            </PayPalScriptProvider>{" "}
          </motion.div>
          <motion.div
           initial={{y:100 , opacity:0}}
           whileInView={{y:0 , opacity:1}}
          className=" h-[34rem] w-96 bg-slate-200 flex flex-col items-center justify-between gap-4 rounded-sm shadow-lg p-4">
            <h1 className=" font-bold text-slate-800 text-3xl mt-2">
              BookeriaPro® <span className=" text-slate-600">BASIC</span>
            </h1>
            <div className=" h-1/2 w-full bg-slate-100 rounded-sm shadow-md p-4 flex flex-col items-center justify-start">
              <div className=" h-14 w-full shadow-lg flex flex-row items-center justify-start p-2">
                <Check color="green" />
                <p className=" ml-2 font-bold font-sans">
                  Full access ro Bookeria libraries
                </p>
              </div>
              <div className=" h-14 w-full shadow-lg flex flex-row items-center justify-start p-2">
                <Check color="green" />
                <p className=" ml-2 font-bold font-sans">
                  Official critic reviews
                </p>
              </div>
              <div className=" h-14 w-full shadow-lg flex flex-row items-center justify-start p-2">
                <Check color="green" />
                <p className=" ml-2 font-bold font-sans">
                  Upload your own books
                </p>
              </div>
            </div>
            <PayPalScriptProvider options={{ clientId: "test" }}>
              <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
            </PayPalScriptProvider>{" "}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProRegister;
