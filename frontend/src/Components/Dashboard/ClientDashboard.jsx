import React, { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import "./Dashboard.css"
import { motion } from 'framer-motion'
import Navbar from "../Navbar/Navbar";

const ClientDashboard = () => {
  const { user, setToken, setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false)

  const [stats, setStats] = React.useState({
    completedWorkouts: 0,
    favoriteExercises: 0,
    streakDays: 0
  });

  React.useEffect(() => {
    fetchUserStats();
  }, []);

  const fetchUserStats = async () => {
    try {
      const token = localStorage.getItem("token");

      setStats({
        completedWorkouts: 12,
        favoriteExercises: 8,
        streakDays: 5
      });

    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.ok) {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
        navigate("/login-register");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };



  const handleClick = (e) => {
    e.preventDefault()
    setShow(!show)
  }

  return (
    <>
      <Navbar />
      <div className="client-div min-h-screen bg-gray-100">
        <header className="header-d bg-[#001F3F] text-white p-4 flex justify-between items-center shadow-md">
          <div className="ul-links">
            <ul>
              <li><a href="/client-exercices">Exercices</a></li>
              <li><Link to="/client-food">Food</Link></li>
              <li><Link to="/store-products">Store</Link></li>


            </ul>
          </div>

          <div className="icon-profile">
            <a href="#"><i class="bi bi-person" onClick={handleClick}></i></a>
          </div>
        </header>
        {
          show && (
            <>
              <div className='result-profile-first'>
                <div className="text-name">Welcome, {user?.name}</div>
                <motion.div
                  className='d-logout-first'
                  whileHover={{ x: -10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 150 }}
                  onClick={handleLogout}
                >
                  <i className="icon bi bi-box-arrow-right"></i>
                  <p>Logout</p>
                </motion.div>

              </div>
            </>
          )
        }

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Panel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">Workouts Completed</h3>
              <p className="text-3xl font-bold text-blue-600">{stats.completedWorkouts}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">Favorite Exercises</h3>
              <p className="text-3xl font-bold text-green-600">{stats.favoriteExercises}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">Day Streak</h3>
              <p className="text-3xl font-bold text-purple-600">{stats.streakDays}</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-700">Exercise Library</h3>
                <p className="text-gray-600 mt-2">Browse and discover new exercises</p>
                <Link
                  to="/client/exercises"
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 inline-block"
                >
                  View Exercises
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-700">My Workouts</h3>
                <p className="text-gray-600 mt-2">View and track your workout progress</p>
                <Link
                  to="/client/workouts"
                  className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300 inline-block"
                >
                  My Workouts
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-700">Profile Settings</h3>
                <p className="text-gray-600 mt-2">Update your profile and preferences</p>
                <Link
                  to="/client/profile"
                  className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition duration-300 inline-block"
                >
                  Settings
                </Link>
              </div>
            </div>
          </div>

          {/* Workout Progress */}
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 bg-gray-100 text-left text-gray-600 font-semibold">Date</th>
                    <th className="py-2 px-4 bg-gray-100 text-left text-gray-600 font-semibold">Workout</th>
                    <th className="py-2 px-4 bg-gray-100 text-left text-gray-600 font-semibold">Duration</th>
                    <th className="py-2 px-4 bg-gray-100 text-left text-gray-600 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4">Mar 17, 2025</td>
                    <td className="py-3 px-4">Full Body Workout</td>
                    <td className="py-3 px-4">45 minutes</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-xs">Completed</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Mar 15, 2025</td>
                    <td className="py-3 px-4">Arm Day</td>
                    <td className="py-3 px-4">30 minutes</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-xs">Completed</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Mar 14, 2025</td>
                    <td className="py-3 px-4">Leg Day</td>
                    <td className="py-3 px-4">50 minutes</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-xs">Completed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recommended Workouts */}
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Workouts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="h-40 bg-gray-300"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Core Strength</h3>
                  <p className="text-gray-600 text-sm mt-1">20 minutes • Beginner</p>
                  <p className="mt-2 text-sm">Focus on building core strength with this quick workout</p>
                  <button className="mt-3 bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600">
                    Start Workout
                  </button>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="h-40 bg-gray-300"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Upper Body Power</h3>
                  <p className="text-gray-600 text-sm mt-1">30 minutes • Intermediate</p>
                  <p className="mt-2 text-sm">Build strength in your upper body with these exercises</p>
                  <button className="mt-3 bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600">
                    Start Workout
                  </button>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="h-40 bg-gray-300"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Full Body HIIT</h3>
                  <p className="text-gray-600 text-sm mt-1">45 minutes • Advanced</p>
                  <p className="mt-2 text-sm">High intensity interval training for maximum results</p>
                  <button className="mt-3 bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600">
                    Start Workout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default ClientDashboard;