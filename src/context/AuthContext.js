import { createContext, useState, useEffect, useCallback } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authTokens, setAuthTokens] = useState(() =>
    sessionStorage.getItem("authTokens")
      ? JSON.parse(sessionStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    sessionStorage.getItem("authTokens")
      ? jwt_decode(sessionStorage.getItem("authTokens"))
      : null
  );
  
  const [loading, setLoading] = useState(true);

  const loginUser = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/accounts/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });

    let data = null;
    try {
      data = await response.json();
    } catch (error) {
      console.log("Error: ", error);
    }

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      sessionStorage.setItem("authTokens", JSON.stringify(data));
      console.log("User ==> ", jwt_decode(data.access));
      navigate(`/dashboard`);
    } else {
      alert("Please check your credentials ==> ", data.message);
    }
  };

  const logoutUser = useCallback(() => {
    setAuthTokens(null);
    setUser(null);
    sessionStorage.removeItem("authTokens");
    navigate(`/login`);
  }, [navigate]);

  const updateToken = useCallback(async () => {
    console.log("Updating token...");

    try {
      if (authTokens?.refresh) {
        console.log(authTokens?.refresh);
        const response = await fetch(
          "http://127.0.0.1:8000/accounts/token-refresh/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ refresh: authTokens?.refresh }),
          }
        );

        const data = await response.json();

        if (response.status === 200) {
          setAuthTokens(data);
          setUser(jwt_decode(data.refresh));
          sessionStorage.setItem("authTokens", JSON.stringify(data));
          console.log("User ==> ", jwt_decode(data.refresh));
        } else {
          logoutUser();
        }

        if (loading) {
          setLoading(false);
        }
      } else {
        console.log("No refresh token found");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }, [authTokens?.refresh, logoutUser, loading]);


  const updateUserInfo = async (updatedUser) => {
    try {
        const formData  = new FormData();
        formData.append('first_name', updatedUser.first_name)
        formData.append('last_name', updatedUser.last_name)
        formData.append('email', updatedUser.email)
        formData.append('phone', updatedUser.phone)
        formData.append('username', updatedUser.username)

        console.log("Updating user info...", authTokens?.access);  
        if (authTokens?.access) {
            const response = await fetch(
            "http://127.0.0.1:8000/accounts/update/",
            {
                method: "PUT",
                headers: {
                Authorization: `Bearer ${authTokens.access}`,
                },
                body: formData,
            }
            );
            const data = await response.json();
            if (response.ok) {
                setUser(data);
                console.log("User updated:", data);
            } else {
                console.log("Failed to update user:", data);
            }
            } else {
            console.log("No refresh token found");
            }
    } catch (error) {
        console.log('Error:', error);
        }
    };


    let contextData = {
        logoutUser: logoutUser,
        user: user,
        loginUser: loginUser,
        authTokens:authTokens,
        updateUserInfo : updateUserInfo,
    }

    useEffect(() => {
        if(loading){
            updateToken()
        }

        let fourMinutes = 240000
        let interval = setInterval(() => {
            if(authTokens) {
                updateToken()
            }
        }, fourMinutes)
        return () => clearInterval(interval)
    }, [authTokens, updateToken, loading])


    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}