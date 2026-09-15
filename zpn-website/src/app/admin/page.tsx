"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdminPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        setIsLoggedIn(true);
        setSubmissions(data.submissions);
      } else {
        setError(data.message || "ভুল পাসওয়ার্ড");
      }
    } catch {
      setError("নেটওয়ার্ক ত্রুটি");
    }
    setLoading(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword("");
    setSubmissions([]);
    router.push("/");
  };

  if (!isLoggedIn) {
    return (
      <>
        <Navbar />
        <div className="admin-login-container">
          <form className="admin-login-form" onSubmit={handleLogin}>
            <h2>এডমিন লগইন</h2>
            <p>ড্যাশবোর্ডে প্রবেশ করতে পাসওয়ার্ড দিন</p>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="পাসওয়ার্ড দিন" 
              required 
            />
            {error && <p className="error-text">{error}</p>}
            <button type="submit" disabled={loading} className="btn btn-primary">
              {loading ? "অপেক্ষা করুন..." : "প্রবেশ করুন"}
            </button>
          </form>
        </div>
      </>
    );
  }

  const connectionReqs = submissions.filter(s => s.type === "connection");
  const complaints = submissions.filter(s => s.type === "complaint");

  return (
    <>
      <Navbar />
      <div className="admin-dashboard container" style={{paddingTop: "120px", paddingBottom: "80px", minHeight: "80vh"}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h1 className="admin-title" style={{ marginBottom: 0 }}>এডমিন ড্যাশবোর্ড</h1>
          <button onClick={handleLogout} className="btn btn-primary" style={{ backgroundColor: '#DC2626', borderColor: '#DC2626' }}>লগ আউট</button>
        </div>
        
        <div className="admin-section">
          <h2>নতুন সংযোগের আবেদন ({connectionReqs.length})</h2>
          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>তারিখ</th>
                  <th>নাম</th>
                  <th>ফোন</th>
                  <th>এলাকা</th>
                  <th>প্যাকেজ</th>
                  <th>বিস্তারিত</th>
                </tr>
              </thead>
              <tbody>
                {connectionReqs.map(req => (
                  <tr key={req.id}>
                    <td>{new Date(req.createdAt).toLocaleString("bn-BD")}</td>
                    <td>{req.fullName}</td>
                    <td>{req.phone}</td>
                    <td>{req.area}</td>
                    <td>{req.package}</td>
                    <td>{req.message}</td>
                  </tr>
                ))}
                {connectionReqs.length === 0 && (
                  <tr><td colSpan={6} style={{textAlign:'center'}}>কোনো আবেদন নেই</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="admin-section" style={{marginTop: '60px'}}>
          <h2>অভিযোগ সমূহ ({complaints.length})</h2>
          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>তারিখ</th>
                  <th>নাম</th>
                  <th>ফোন</th>
                  <th>এলাকা</th>
                  <th>অভিযোগের ধরন</th>
                  <th>বিস্তারিত</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map(req => (
                  <tr key={req.id}>
                    <td>{new Date(req.createdAt).toLocaleString("bn-BD")}</td>
                    <td>{req.fullName || "-"}</td>
                    <td>{req.phone || "-"}</td>
                    <td>{req.area}</td>
                    <td>{req.package}</td>
                    <td>{req.message}</td>
                  </tr>
                ))}
                {complaints.length === 0 && (
                  <tr><td colSpan={6} style={{textAlign:'center'}}>কোনো অভিযোগ নেই</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
