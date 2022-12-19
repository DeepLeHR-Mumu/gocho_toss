import type { NextPage } from "next";

import { useModal } from "@/globalStates/useModal";
import { useToast } from "@/globalStates/useToast";

const HomePage: NextPage = () => {
  const { currentModal, setModal } = useModal();
  const { currentToast, setToast } = useToast();
  return (
    <main>
      <div>
        <button
          type="button"
          onClick={() => {
            setModal("hi");
          }}
        >
          modal button
        </button>
        {currentModal}
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            setToast("토스트 메시지");
          }}
        >
          toast button
        </button>
        {currentToast}
      </div>
      business service HomePage
    </main>
  );
};

export default HomePage;