import { devtools } from "zustand/middleware";
import AuthStore from "./AuthStore";
import ProductStore from "./ProductStore";
import { create } from "zustand";

const useBaoundStore = create()(
  devtools((...a) => ({
    ...ProductStore(...a),
    ...AuthStore(...a),
  }))
);

export default useBaoundStore;
