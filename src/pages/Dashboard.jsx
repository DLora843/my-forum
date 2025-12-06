import React from "react";
import { Link } from "react-router-dom";
import "../pages/Dashboard.css";

export default function Dashboard() {
    const categories = [
        { id: 1, name: "Frontend", description: "React, Vue, Css, HTML" },
        { id: 2, name: "Backend", description: "Node.js, Django, PHP" },
        { id: 3, name: "Databases", description: "SQL, NoSQL, MongoDB" },
    ]
    return (
        <div className="dashboard-page">
            <header className="hasboard-header">
                <h1>Добре дошли в MyForum</h1>
                  <p>Прегледай категориите и започни дискусия!</p>
            </header>

        <div className="dashboard-categories">
            {categories.map(cat => (
                <div key={cat.id} className="dashboard-card">
                    <h3>{cat.name}</h3>
                    <p>{cat.description}</p>
                    <Link to={`/forums/${cat.id}`} className="btn-small">Виж категорията</Link>
                </div>
            ))}
            <Link to="/">Начало</Link>
        </div>
        </div>
    );
}