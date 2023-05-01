import ChatLayout from "./layout/ChatLayout";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <ChatLayout />
      <Toaster position="top-center" richColors />
    </>
  );
}

export default App;
