export async function getCategories() {
  const res = await fetch("http://localhost:5000/categories");
  const data = await res.json();
  return data;
}
export async function getBooks() {
  const res = await fetch("http://localhost:5000/books");
  const data = await res.json();
  return data;
}
export async function getBookById({book_id}) {
  const res = await fetch(`http://localhost:5000/books/${category_id}`);
  const data = await res.json();
  return data;
}
