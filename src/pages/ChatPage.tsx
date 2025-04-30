
import ChatInterface from "@/components/ChatInterface";

const ChatPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden" style={{ height: "calc(100vh - 200px)" }}>
          <ChatInterface />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
