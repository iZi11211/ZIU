export default function CategoriesPage() {
  return (
    <div className="page-center">
      <div className="app-container">
        <h1>Kategorie</h1>

        <p>Przykładowe kategorie zadań:</p>

        <div className="task-grid">
          <div className="todo-item">
            <h3>Praca</h3>
            <p>Zadania zawodowe</p>
          </div>

          <div className="todo-item">
            <h3>Dom</h3>
            <p>Obowiązki domowe</p>
          </div>

          <div className="todo-item">
            <h3>Nauka</h3>
            <p>Kursy i rozwój</p>
          </div>

          <div className="todo-item">
            <h3>Sport</h3>
            <p>Trening i aktywność</p>
          </div>
        </div>
      </div>
    </div>
  );
}