
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Send, Video, Calendar, Link2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  sender: "user" | "tutor";
  text: string;
  timestamp: Date;
  isSystemMessage?: boolean;
}

const ChatInterface = () => {
  const { id: tutorId } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "tutor",
      text: "Hi there! How can I help you today?",
      timestamp: new Date(Date.now() - 60000),
    },
  ]);
  const [tutor, setTutor] = useState({
    name: "Sarah Miller",
    avatar: "",
    skills: ["Web Development", "JavaScript", "React"],
    isOnline: true,
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: input,
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInput("");
    
    // Simulate tutor response after a delay
    setTimeout(() => {
      const tutorReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: "tutor",
        text: "Thanks for your message! I'd be happy to discuss more about the skill exchange.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, tutorReply]);
    }, 1000);
  };
  
  const handleScheduleMeeting = () => {
    const systemMessage: Message = {
      id: Date.now().toString(),
      sender: "tutor",
      text: "Meeting scheduled for tomorrow at 3:00 PM via Zoom.",
      timestamp: new Date(),
      isSystemMessage: true,
    };
    
    setMessages([...messages, systemMessage]);
    
    toast({
      title: "Meeting scheduled!",
      description: "You'll receive a reminder before the meeting starts.",
    });
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={tutor.avatar} />
            <AvatarFallback className="bg-skill-purple text-white">
              {tutor.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold">{tutor.name}</h2>
            <p className="text-sm text-gray-600">
              {tutor.isOnline ? (
                <span className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span> 
                  Online
                </span>
              ) : (
                "Offline"
              )}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Video size={18} />
          </Button>
          <Button variant="outline" size="icon">
            <Calendar size={18} />
          </Button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {message.isSystemMessage ? (
              <Card className="max-w-sm w-full bg-gray-100 border-gray-200">
                <CardContent className="p-3">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-skill-purple" />
                    <p className="text-sm">{message.text}</p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className={`flex ${message.sender === "user" ? "flex-row-reverse" : "flex-row"} gap-2 max-w-[80%]`}>
                {message.sender === "tutor" && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={tutor.avatar} />
                    <AvatarFallback className="bg-skill-purple text-white text-xs">
                      {tutor.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                )}
                <div>
                  <div 
                    className={`px-4 py-2 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-skill-purple text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t p-4">
        <form onSubmit={handleSend} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Select>
            <SelectTrigger className="w-[110px]">
              <SelectValue placeholder="Actions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="schedule" onClick={handleScheduleMeeting}>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>Schedule</span>
                </div>
              </SelectItem>
              <SelectItem value="link">
                <div className="flex items-center">
                  <Link2 size={16} className="mr-2" />
                  <span>Send link</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
          <Button 
            type="submit" 
            disabled={!input.trim()}
            className="bg-skill-purple hover:bg-skill-darkPurple"
          >
            <Send size={18} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
