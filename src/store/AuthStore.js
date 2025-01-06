// import Domain from "../services/Endpoint";
// import axios from "axios";
import { setSession } from "../services/token.service";

const createAuthStore = (set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  authLoading: false,
  tokenLoading: true,

  setUser: (args) => {
    localStorage.setItem("user", JSON.stringify(args));

    set({ user: args })
  },

  logoutService: () => {
    console.log("in logoutService");

    setSession(null);
    localStorage.removeItem("user");
    set({ user: null, authLoading: false, tokenLoading: false });
  },

  loginService: async (email, password) => {
    set({ authLoading: true });

    try {
      // const response = await axios.post(`${Domain}/auth/login`, {
      //   email,
      //   password,
      // });

      const tokenExpiration = new Date();
      tokenExpiration.setMinutes(tokenExpiration.getMinutes() + 5);

      const generateAccessToken = () => {
        return `dummy_access_token_${Math.random().toString(36).slice(2, 11)}_${Date.now()}`;
      };

      const response = {
        data: {
          status: 200,
          data: {
            user: {
              student_id: 1,
              full_name: "Name " + password,
              email: email,
            },
            access_token: generateAccessToken(),
            token_expiration: tokenExpiration.toISOString(), 
          },
        },
      };

      console.log(response.data);

      const { status, message, data } = response.data;

      if (status === 200) {
        const access_token = data.access_token;
        const token_expiration = data.token_expiration;

        const { student_id, full_name, email } = data.user;
        const userToSave = { student_id, full_name, email };

        console.log(message);
        // toast.success(message);

        setSession(access_token, token_expiration);

        set({ user: JSON.stringify(userToSave), authLoading: false, tokenLoading: false });
        localStorage.setItem("user", JSON.stringify(userToSave));
      } else {
        set({ authLoading: false, user: null });
      }
    } catch (error) {
      console.log(error);
      set({ authLoading: false });
    }
  },

  loginWithToken: async () => {
    try {
      // const response = await axios(`${Domain}/validation`);

      const tokenExpiration = new Date();
      tokenExpiration.setMinutes(tokenExpiration.getMinutes() + 5);

      const response = {
        data: {
          status: 200,
          data: {
            user: {
              student_id: 1,
              full_name: "John Doe",
              email: "john.doe@example.com",
            },
            access_token: `dummy_access_token_${Math.random().toString(36).slice(2, 11)}_${Date.now()}`,
            token_expiration: tokenExpiration.toISOString(),
          },
        },
      };

      console.log(response.data);

      const { status, message, data } = response.data;

      if (status === 200) {
        const access_token = data.access_token;
        const token_expiration = data.token_expiration;

        const { student_id, full_name, email } = data.user;
        const userToSave = { student_id, full_name, email };

        console.log(message);
        // toast.success(message);

        setSession(access_token, token_expiration);

        set({ user: JSON.stringify(userToSave), authLoading: false, tokenLoading: false });
        localStorage.setItem("user", JSON.stringify(userToSave));
      } else {
        set({ tokenLoading: false, user: null });
      }
    } catch (error) {
      console.log(error);

      set();
    }
  },
});

export default createAuthStore;
