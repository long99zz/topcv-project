'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  PaperAirplaneIcon,
  DocumentTextIcon,
  SparklesIcon,
  UserIcon,
  ComputerDesktopIcon,
  StarIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

interface CVSuggestionData {
  score: number;
  suggestions: string[];
}

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  type?: 'text' | 'cv-suggestion' | 'analysis';
  data?: CVSuggestionData;
}

export default function ToppyAIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Xin chào! Tôi là Toppy AI - trợ lý tuyển dụng thông minh của TopCV. Tôi có thể giúp bạn:\n\n• Phân tích và cải thiện CV\n• Đề xuất vị trí phù hợp\n• Tư vấn nghề nghiệp\n• Chuẩn bị phỏng vấn\n\nBạn muốn tôi hỗ trợ điều gì hôm nay?',
      isUser: false,
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage);
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): Message => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('cv') || lowerInput.includes('hồ sơ')) {
      return {
        id: Date.now().toString(),
        content: 'Tôi sẽ phân tích CV của bạn và đưa ra những gợi ý cải thiện. Hãy upload CV hoặc chia sẻ thông tin về kinh nghiệm làm việc của bạn.',
        isUser: false,
        timestamp: new Date(),
        type: 'cv-suggestion',
        data: {
          score: 75,
          suggestions: [
            'Thêm kỹ năng chuyên môn cụ thể',
            'Cải thiện phần mô tả kinh nghiệm',
            'Thêm chứng chỉ và thành tích'
          ]
        }
      };
    }

    if (lowerInput.includes('việc làm') || lowerInput.includes('công việc')) {
      return {
        id: Date.now().toString(),
        content: 'Dựa trên hồ sơ của bạn, tôi tìm thấy 15 công việc phù hợp. Bạn có muốn xem danh sách chi tiết không?',
        isUser: false,
        timestamp: new Date(),
        type: 'text'
      };
    }

    return {
      id: Date.now().toString(),
      content: 'Cảm ơn bạn đã chia sẻ! Tôi đang xử lý thông tin và sẽ đưa ra gợi ý tối ưu nhất cho bạn. Có điều gì khác tôi có thể hỗ trợ không?',
      isUser: false,
      timestamp: new Date(),
      type: 'text'
    };
  };

  const quickActions = [
    { text: 'Phân tích CV của tôi', icon: DocumentTextIcon },
    { text: 'Tìm việc làm phù hợp', icon: SparklesIcon },
    { text: 'Cải thiện hồ sơ', icon: UserIcon },
    { text: 'Chuẩn bị phỏng vấn', icon: ComputerDesktopIcon },
  ];

  const cvTemplates = [
    { name: 'CV Công nghệ', downloads: 2340, rating: 4.8 },
    { name: 'CV Kinh doanh', downloads: 1890, rating: 4.7 },
    { name: 'CV Marketing', downloads: 1560, rating: 4.6 },
    { name: 'CV Tài chính', downloads: 1230, rating: 4.5 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-3 mr-4">
                <SparklesIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Toppy AI</h1>
                <p className="text-gray-600 mt-1">Trợ lý tuyển dụng thông minh</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-green-700 font-medium">Đang hoạt động</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
        {/* Main Chat Interface */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="border-b p-4">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-2 mr-3">
                  <SparklesIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Toppy AI Assistant</h3>
                  <p className="text-sm text-gray-600">Luôn sẵn sàng hỗ trợ bạn</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isUser 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    
                    {/* CV Analysis Result */}
                    {message.type === 'cv-suggestion' && message.data && (
                      <div className="mt-3 p-3 bg-white rounded-lg text-gray-900">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Điểm CV</span>
                          <span className="text-lg font-bold text-green-600">{message.data.score}/100</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2 mb-3">
                          <div 
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${message.data.score}%` }}
                          ></div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-medium text-gray-700">Gợi ý cải thiện:</p>
                          {message.data.suggestions.map((suggestion: string, index: number) => (
                            <div key={index} className="flex items-center text-xs text-gray-600">
                              <ExclamationTriangleIcon className="h-3 w-3 mr-1 text-orange-500" />
                              {suggestion}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg px-4 py-2">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="border-t p-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => setInputMessage(action.text)}
                    className="flex items-center justify-center p-2 text-xs bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <action.icon className="h-4 w-4 mr-1 text-gray-600" />
                    {action.text}
                  </button>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Nhập câu hỏi của bạn..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  <PaperAirplaneIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Stats */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Thống kê AI</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">CV đã phân tích</span>
                <span className="font-bold text-gray-900">1,234</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Gợi ý đã đưa ra</span>
                <span className="font-bold text-gray-900">5,678</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Độ chính xác</span>
                <span className="font-bold text-green-600">94.2%</span>
              </div>
            </div>
          </div>

          {/* Popular CV Templates */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Mẫu CV phổ biến</h3>
            <div className="space-y-3">
              {cvTemplates.map((template, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{template.name}</p>
                    <div className="flex items-center mt-1">
                      <StarIcon className="h-3 w-3 text-yellow-400 mr-1" />
                      <span className="text-xs text-gray-600">{template.rating}</span>
                      <span className="text-xs text-gray-400 ml-2">
                        {template.downloads.toLocaleString()} lượt tải
                      </span>
                    </div>
                  </div>
                  <button className="text-green-600 text-xs font-medium hover:text-green-700">
                    Xem
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hoạt động gần đây</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <CheckCircleIcon className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">CV được phân tích</p>
                  <p className="text-xs text-gray-600">2 giờ trước</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <SparklesIcon className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Gợi ý việc làm</p>
                  <p className="text-xs text-gray-600">1 ngày trước</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-purple-100 rounded-full p-2 mr-3">
                  <DocumentTextIcon className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">CV được tạo mới</p>
                  <p className="text-xs text-gray-600">3 ngày trước</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}