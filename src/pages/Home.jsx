import { useEffect } from "react";
import { useState } from "react"
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { login, logout } from "../slices/authSlice";

const Home = () => {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then(userData => {
        if (userData) {
          dispatch(login({ userData }));
        }
        else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false))
  }, [dispatch]);


  if (loading) {
    return <>Loading.....</>
  }

  return (
    <>
      <h1>test</h1>
    </>
  )
}

export default Home
