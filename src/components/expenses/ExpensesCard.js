import "./ExpenseCard.css";

export const ExpensesCard = ({ el }) => {
  const dateMonth = new Date(el.date).toLocaleString("ru-ru", {
    month: "long",
  });

  const dateYear = new Date(el.date).getFullYear().toString();

  const dateDay = new Date(el.date).getDate().toString();
  return (
    <div className="iDiv">
      <div className="left-side">
        <div className="p-date">
          <span>{dateMonth}</span>
          <span>{+dateYear}</span>
          <span className="span">{+dateDay}</span>
        </div>
        <p className="title">{el.title}</p>
      </div>
      <p className="price">{el.price} $</p>
    </div>
  );
};
