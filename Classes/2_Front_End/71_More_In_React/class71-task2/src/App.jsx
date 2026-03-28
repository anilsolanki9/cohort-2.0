import React from "react";
import Card from "./components/Card";

const App = () => {
  const users = [
    {
      bannerImage: "https://images.unsplash.com/photo-1755282464755-ef4e95c6bae1?w=600&auto=format&fit=crop&q=60",
      profileImage: "https://images.unsplash.com/photo-1774294067490-b7e2a5964cf5?q=80&w=687&auto=format&fit=crop",
      userName: "Aarav Sharma",
      role: "Frontend Developer",
      isOnline: true,
      rating: 4.5,
      hoursWorked: 1240,
      duration: 18,
      contactUrl: "mailto:aarav.sharma@example.com",
    },
    {
      bannerImage: "https://images.unsplash.com/photo-1773672726538-885c0d878033?q=80&w=1332&auto=format&fit=crop",
      profileImage: "https://images.unsplash.com/photo-1774011211544-dfd53584118b?q=80&w=1974&auto=format&fit=crop",
      userName: "Priya Verma",
      role: "UI/UX Designer",
      isOnline: false,
      rating: 4.8,
      hoursWorked: 980,
      duration: 12,
      contactUrl: "mailto:priya.verma@example.com",
    },
    {
      bannerImage: "https://images.unsplash.com/photo-1773053525998-8cb667020fa7?w=600&auto=format&fit=crop&q=60",
      profileImage: "https://images.unsplash.com/photo-1708024587407-73445142b5a8?q=80&w=1974&auto=format&fit=crop",
      userName: "Rohan Mehta",
      role: "Backend Developer",
      isOnline: true,
      rating: 4.2,
      hoursWorked: 1560,
      duration: 24,
      contactUrl: "mailto:rohan.mehta@example.com",
    },
    {
      bannerImage: "https://images.unsplash.com/photo-1653622139972-e7f937344c19?w=600&auto=format&fit=crop&q=60",
      profileImage: "https://images.unsplash.com/photo-1724710152067-f5cda1ed9820?w=600&auto=format&fit=crop&q=60",
      userName: "Sneha Kapoor",
      role: "Full Stack Developer",
      isOnline: false,
      rating: 4.9,
      hoursWorked: 2100,
      duration: 30,
      contactUrl: "mailto:sneha.kapoor@example.com",
    },
    {
      bannerImage: "https://images.unsplash.com/photo-1768916321581-7d18f925b4fe?w=600&auto=format&fit=crop&q=60",
      profileImage: "https://images.unsplash.com/photo-1674504176007-d2f55cd47ad4?w=600&auto=format&fit=crop&q=60",
      userName: "Karan Singh",
      role: "DevOps Engineer",
      isOnline: true,
      rating: 4.3,
      hoursWorked: 1320,
      duration: 20,
      contactUrl: "mailto:karan.singh@example.com",
    },
    {
      bannerImage: "https://images.unsplash.com/photo-1737505599278-4266307e7190?w=600&auto=format&fit=crop&q=60",
      profileImage: "https://images.unsplash.com/photo-1773146916297-c9f61093c308?w=600&auto=format&fit=crop&q=60",
      userName: "Ananya Iyer",
      role: "Product Manager",
      isOnline: false,
      rating: 4.7,
      hoursWorked: 890,
      duration: 14,
      contactUrl: "mailto:ananya.iyer@example.com",
    },
    {
      bannerImage: "https://images.unsplash.com/photo-1727800922947-8da4d48c9fb5?w=600&auto=format&fit=crop&q=60",
      profileImage: "https://images.unsplash.com/photo-1773698403328-e6891737b7dd?w=600&auto=format&fit=crop&q=60",
      userName: "Vikram Joshi",
      role: "Mobile App Developer",
      isOnline: true,
      rating: 4.1,
      hoursWorked: 760,
      duration: 10,
      contactUrl: "mailto:vikram.joshi@example.com",
    },
    {
      bannerImage: "https://images.unsplash.com/photo-1771873679761-3378902fdf18?w=600&auto=format&fit=crop&q=60",
      profileImage: "https://images.unsplash.com/photo-1773493017440-a173056a728f?w=600&auto=format&fit=crop&q=60",
      userName: "Neha Gupta",
      role: "Data Analyst",
      isOnline: false,
      rating: 4.6,
      hoursWorked: 1120,
      duration: 16,
      contactUrl: "mailto:neha.gupta@example.com",
    },
    {
      bannerImage: "https://images.unsplash.com/photo-1753133488917-7fc3868aec74?w=600&auto=format&fit=crop&q=60",
      profileImage: "https://images.unsplash.com/photo-1773773872774-705d6d5d0069?w=600&auto=format&fit=crop&q=60",
      userName: "Aditya Rao",
      role: "AI Engineer",
      isOnline: true,
      rating: 5.0,
      hoursWorked: 1980,
      duration: 28,
      contactUrl: "mailto:aditya.rao@example.com",
    },
    {
      bannerImage: "https://images.unsplash.com/photo-1771423406994-bb335b5ccd6f?w=600&auto=format&fit=crop&q=60",
      profileImage: "https://images.unsplash.com/photo-1773534847233-4fe884f29ad7?w=600&auto=format&fit=crop&q=60",
      userName: "Meera Nair",
      role: "QA Engineer",
      isOnline: false,
      rating: 4.4,
      hoursWorked: 870,
      duration: 11,
      contactUrl: "mailto:meera.nair@example.com",
    },
  ];

  return (
    <div className="p-5 flex flex-wrap gap-10">
      {users.map((user, idx) => {
        return <Card key={idx} user={user} />;
      })}
    </div>
  );
};

export default App;
