import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Label, TextInput, Tooltip } from "flowbite-react";
import Loader from "../components/Loader";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  //if we want to check if redirect is in url(when user
  //wants to checkout it redirects tp login)
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/"; //if there is a redirect

  //to check to see if we are logged in:
  //because if we are logged in we want to redirected to either / homepage or if there is sth to redirected

  useEffect(() => {
    if (userInfo) {
      //if there is userinfo in local storage, navigate to whatever that redirect is
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    } else {
      try {
        //login comming from api slice           //unwrap, extract values from promise
        console.log("Login data:", { name, email, password });
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res })); //send res which is user info and pass it to setCredentials which set the local storage whatever the user is
        navigate(redirect);
      } catch (error) {
        console.log("login failed", error);
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <div>
      {" "}
      <div className="relative w-full mx-auto xs:p-0 p-4 pb-[25px] md:pb-[40px] lg:pb-[100px] xl:pb-[120px] flex flex-col items-center justify-center text-font-family-color">
        <div className="flex flex-col justify-start items-start gap-[2rem] w-[100%] md:w-[60%] lg:w-[45%] xl:w-[40%] bg-white rounded-[15px] p-4 sm:p-8 z-9 shadow-lg mt-[10px] md:mt-[15px] lg:mt-[10px] xl:mt-[20px] xs:py-12 py-10">
          <div className="flex items-center">
            <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
              Sign up
            </h3>
          </div>

          {/* form */}
          <form onSubmit={submitHandler} className="space-y-6 w-full">
            {/* first name */}
            <div>
              <Label
                htmlFor="firstname"
                value="Your first name"
                className="visually-hidden"
              />
              <TextInput
                id="firstname"
                type="text"
                name="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name *"
                style={{
                  backgroundColor: "var(--bg-white-color)",
                  borderColor: "var(--bg-header-footer)",
                  outlineColor: "var(--secondary-color)",
                  padding: "1.15rem",
                  color: "var(--font-family-color)",
                  fontSize: "1rem",
                }}
              />
            </div>
            {/* last name */}
            <div>
              <Label
                htmlFor="lastname"
                value="Your last name"
                className="visually-hidden"
              />
              <TextInput
                id="lastname"
                type="text"
                name="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name *"
                style={{
                  backgroundColor: "var(--bg-white-color)",
                  borderColor: "var(--bg-header-footer)",
                  outlineColor: "var(--secondary-color)",
                  padding: "1.15rem",
                  color: "var(--font-family-color)",
                  fontSize: "1rem",
                }}
              />
            </div>
            {/* email */}
            <div>
              <Label
                htmlFor="email"
                value="Your email"
                className="visually-hidden"
              />
              <TextInput
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address *"
                style={{
                  backgroundColor: "var(--bg-white-color)",
                  borderColor: "var(--bg-header-footer)",
                  outlineColor: "var(--secondary-color)",
                  padding: "1.15rem",
                  color: "var(--font-family-color)",
                  fontSize: "1rem",
                }}
              />
            </div>
            {/* password */}
            <div style={{ position: "relative" }}>
              <Label
                htmlFor="password"
                value="Your password"
                className="visually-hidden"
              />
              <TextInput
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your Password *"
                style={{
                  backgroundColor: "var(--bg-white-color)",
                  borderColor: "var(--bg-header-footer)",
                  outlineColor: "var(--secondary-color)",
                  padding: "1.15rem",
                  color: "var(--font-family-color)",
                  fontSize: "1rem",
                  paddingRight: "2.5rem",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              ></div>
            </div>
            {/* confirm password */}
            <div style={{ position: "relative" }}>
              <Label
                htmlFor="confirmpassword"
                value="Repeat your password"
                className="visually-hidden"
              />
              <TextInput
                id="confirmpassword"
                name="confirmpassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Your Password *"
                style={{
                  backgroundColor: "var(--bg-white-color)",
                  borderColor: "var(--bg-header-footer)",
                  outlineColor: "var(--secondary-color)",
                  padding: "1.15rem",
                  color: "var(--font-family-color)",
                  fontSize: "1rem",
                  paddingRight: "2.5rem",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              ></div>
            </div>
            <div className="flex items-center gap-2">
              <span>We will remember you until you logout!</span>
            </div>

            <Button type="submit" className="custom-button-style bg-purple-500">
              Sign up
            </Button>
            {isLoading && <Loader />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
