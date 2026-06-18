export default function ProfilePage() {
  return (
    <div className="page-center">
      <div className="app-container">
        <h1>Profil</h1>

        <p>To jest strona profilu użytkownika.</p>

        <div className="todo-item">
          <h3>Dane użytkownika</h3>
          <p>Imię: Jan</p>
          <p>Email: jan@example.com</p>
        </div>

        <div className="todo-item">
          <h3>Statystyki</h3>
          <p>Ukończone zadania: 12</p>
          <p>Aktywne zadania: 5</p>
        </div>
      </div>
    </div>
  );
}