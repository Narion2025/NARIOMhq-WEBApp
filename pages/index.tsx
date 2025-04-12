import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NarionHQ() {
  const [messages, setMessages] = useState([
    { role: 'narion', text: 'Willkommen in NarionHQ. Sprich, und ich höre.' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'narion', text: 'Antwort folgt bald…' }]);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">🧙 NarionHQ – Strategischer Dialograum</h1>
      <div className="space-y-2 max-h-[60vh] overflow-y-auto border p-4 rounded-xl bg-gray-900">
        {messages.map((msg, idx) => (
          <Card key={idx} className={msg.role === 'narion' ? 'bg-blue-950' : 'bg-gray-800'}>
            <CardContent className="p-2">
              <strong className="block mb-1">{msg.role === 'narion' ? 'Narion' : 'Du'}:</strong>
              <span>{msg.text}</span>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex mt-4 gap-2">
        <Input
          className="flex-1"
          placeholder="Frag Narion etwas..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
        />
        <Button onClick={sendMessage}>Senden</Button>
      </div>
    </div>
  );
}